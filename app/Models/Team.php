<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
	use HasFactory, SoftDeletes;

	public $timestamps    = false;
	protected $guarded    = [];

	protected $hidden = [
		'created_at',
		'created_by',
		'updated_at',
		'updated_by',
		'deleted_by',
	];

	public static function boot()
	{
		parent::boot();

		self::creating(function ($model) {
			$model->created_at = now();
			$model->created_by = auth()->id();
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
			$query->whereIn('hosting_id', [getCurrentTeamHostingId()]);
		});
	}

	// * SEARCH , SORT & FILTERS
	public function scopeWithSearch($query, $search, $guard = 'web')
	{
		if ($guard === 'web') {
			$query->when(isset($search['v']), function ($q) use ($search) {
				if ($search['f'] === 'area_name') {
					$q->whereHas('area', function ($qry) use ($search) {
						$qry->where('name', 'like', '%' . $search['v'] . '%');
					});
				} else if ($search['f'] === 'customer_id') {
					return $q->where('id', 'like', '%' . $search['v'] . '%')
						->orWhere('name', 'like', '%' . $search['v'] . '%')
						->orWhere('reg_no', 'like', '%' . $search['v'] . '%')
						->orWhere('mobile', 'like', '%' . $search['v'] . '%')
						->orWhere('address', 'like', '%' . $search['v'] . '%');
				} else {
					return $q->where($search['f'], 'like', '%' . $search['v'] . '%');
				}
			});
		}

		if ($guard === 'api') {
			$query->when($search, function ($q) use ($search) {
				$q->where('id', 'like', '%' . $search . '%')
					->orWhere('name', 'like', '%' . $search . '%')
					->orWhere('mobile', 'like', '%' . $search . '%')
					->orWhere('address', 'like', '%' . $search . '%');
			});
		}
	}

	public function scopeWithSort(
		$query,
		$sort,
		$defaultField = 'created_at',
		$defaultDirection = 'desc',
	) {
		$query->when($sort, function ($q) use ($sort) {
			switch ($sort['f']) {
				case 'area_name':
					$q->whereHas('area', function ($qry) use ($sort) {
						$qry->orderBy('name', $sort['d']);
					});
					break;
				case 'subs_status':
					$q->whereHas('lastSubscriptionWithTrashed', function ($qry) use ($sort) {
						$qry->orderBy('subs_status', $sort['d']);
					});
					break;

				default:
					$q->orderBy($sort['f'], $sort['d']);
					break;
			}
		}, function ($q) use ($defaultField, $defaultDirection) {
			return $q->orderBy($defaultField, $defaultDirection);
		});
	}

	public function scopeWithFilter($query, $filter, $field)
	{
		$query->when($filter, function ($q) use ($filter, $field) {
			if ($field == 'status') {
				return $q->whereHas('lastSubscriptionWithTrashed', function ($qry) use ($filter) {
					$qry->whereIn('subs_status', makeArray($filter));
				});
			}
			return $q->whereIn($field, makeArray($filter));
		});
	}

	// * DATA SCOPE
	public function scopeDatatableQuery($query)
	{
		return $query;
	}

	public function scopeSingleRowQuery($query)
	{
		return $query
			->with([
				'banks',
				'areas' => ['district', 'village']
			]);
	}

	// * RELATIONSHIP
	public function rstatus()
	{
		return $this->belongsTo(TeamStatus::class, 'status');
	}
}
