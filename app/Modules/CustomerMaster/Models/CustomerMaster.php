<?php

namespace App\Modules\CustomerMaster\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Models\CountryCode;
use App\Models\UnitStatus;

class CustomerMaster extends Model
{
	use SoftDeletes;

	public    $timestamps = false;
	protected $guarded    = [];

	protected $hidden = [
		'created_at',
		'created_by',
		'updated_at',
		'updated_by',
		'deleted_by',
		'password'
	];

	public static function boot()
	{
		parent::boot();

		self::creating(function ($model) {
			$model->created_at          = now();
			$model->created_by          = auth()->id();
			$model->hosting_id          = auth()->user()->currentTeam->hosting_id;
			$model->register_by_team_id = auth()->user()->currentTeam->id;
			$model->reg_date            = now();
			$model->uuid                = Str::uuid();
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

	// * INHOUSE
	public function scopeInhouse($q, $teams)
	{
		$q->where(function ($query) use ($teams) {
			$query->whereIn('hosting_id', $teams);
		});
	}

	// * FILTERS
	public function scopeWithSearch($query, $search, $guard = 'web')
	{
		if ($guard === 'web') {
			$query->when(isset($search['v']), function ($q) use ($search) {
				$q->where($search['f'], 'like', '%' . $search['v'] . '%');
			});
		}

		if ($guard === 'api') {
			$query->when($search, function ($q) use ($search) {
				$q->where('id', 'like', '%' . $search . '%')
					->orWhere('default_price', 'like', '%' . $search . '%');
			});
		}
	}

	public function scopeWithSort(
		$query,
		$sort,
		$defaultField = 'id',
		$defaultDirection = 'desc'
	) {
		$query->when($sort, function ($q) use ($sort) {
			$q->orderBy($sort['f'], $sort['d'] === 'desc' ? 'desc' : 'asc');
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

	// * DATA SCOPE
	public function scopeDatatableQuery($query)
	{
		return $query->with([
			'status',
			'country_code',
		]);
	}

	public function scopeSingleRowQuery($query)
	{
		return $query->with([
			'status',
			'country_code',
		]);
	}

	// * RELATIONSHIP
	public function status()
	{
		return $this->belongsTo(UnitStatus::class, 'cust_status');
	}

	public function country_code()
	{
		return $this->belongsTo(CountryCode::class, 'country_code_id');
	}
}
