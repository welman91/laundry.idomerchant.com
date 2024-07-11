<?php

namespace App\Models;

use Spatie\Permission\Models\Permission as SpatiePermission;

class Permission extends SpatiePermission
{
	public function module()
	{
		return $this->belongsTo(Module::class);
	}
	// You might set a public property like guard_name or connection, or override other Eloquent Model methods/properties

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
}
