<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Modules\UserManagement\Models\UserDepartment;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Modules\UserManagement\Models\UserStatus;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
	use HasApiTokens, HasFactory, Notifiable, HasRoles, SoftDeletes;

	// protected $primaryKey   = 'user_id';
	// protected $keyType      = 'string';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $guarded = [];

	/**
	 * The attributes that should be hidden for serialization.
	 *
	 * @var array<int, string>
	 */
	protected $hidden = [
		'password',
		'remember_token',
		'created_at',
		'created_by',
		'updated_at',
		'updated_by',
		'deleted_by',
	];

	/**
	 * The attributes that should be cast.
	 *
	 * @var array<string, string>
	 */
	protected $casts = [
		'email_verified_at' => 'datetime',
		'password' => 'hashed',
	];

	public static function boot()
	{
		parent::boot();

		self::creating(function ($model) {
			$model->created_at       = now();
			$model->created_by       = auth()->id();
		});

		self::created(function ($model) {
			$model->created_at = now();
			$model->created_by = auth()->id();
		});

		self::updating(function ($model) {
			$model->updated_at = now();
			$model->updated_by = auth()->id();
		});

		self::updated(function ($model) {
			$model->updated_at = now();
			$model->updated_by = auth()->id();
		});
	}

	// * SEARCH , SORT & FILTERS
	public function scopeWithSearch($query, $search)
	{
		$query->when(isset($search['v']), function ($q) use ($search) {
			switch ($search['f']) {
				case 'user_id':
					$q->where('user_id', 'like', '%' . $search['v'] . '%')
						->orWhere('user_name', 'like', '%' . $search['v'] . '%')
						->orWhere('no_hp', 'like', '%' . $search['v'] . '%')
						->orWhere('email', 'like', '%' . $search['v'] . '%');
					break;

				case 'permissions':
					$q->whereHas('permissions', function ($qry) use ($search) {
						$qry->where('name', 'like', '%' . $search['v'] . '%');
					});
					break;

				case 'personal_team_id':
					$q->whereHas('personalTeam', function ($qry) use ($search) {
						$qry->where('name', 'like', '%' . $search['v'] . '%');
					});
					break;

				default:
					$q->where($search['f'], 'like', '%' . $search['v'] . '%');
					break;
			}
		});
	}

	public function scopeWithSort(
		$query,
		$sort,
		$defaultField = 'created_at',
		$defaultDirection = 'desc'
	) {
		$query->when($sort, function ($q) use ($sort) {
			$q->orderBy($sort['f'], $sort['d']);
		}, function ($q) use ($defaultField, $defaultDirection) {
			return $q->orderBy($defaultField, $defaultDirection);
		});
	}

	public function scopeWithFilter($query, $filter, $field)
	{
		$query->when($filter, function ($q) use ($filter, $field) {
			$q->whereIn($field, makeArray($filter));
		});
	}

	// DATA SCOPE
	public function scopeDatatableQuery($query)
	{
		return $query->with([
			'currentTeam:id,name',
			'personalTeam:id,name',
			'department',
			'status',
			'country_code',
		]);
	}

	public function scopeSingleRowQuery($query)
	{
		return $query->with(
			['currentTeam', 'personalTeam', 'permissions', 'status', 'country_code']
		);
	}


	// * RELATIONSHIP
	public function currentTeam()
	{
		return $this->belongsTo(Team::class, 'current_team_id')
			->withTrashed();
	}

	public function personalTeam()
	{
		return $this->belongsTo(Team::class, 'personal_team_id')
			->withTrashed();
	}

	public function country_code()
	{
		return $this->belongsTo(CountryCode::class, 'country_code_id');
	}
}
