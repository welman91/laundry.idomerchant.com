<?php

namespace App\Modules\CustomerMaster\DataTables;

use App\Modules\CustomerMaster\Models\CustomerMaster;
use App\Http\Resources\ModelResource;
use Illuminate\Http\Request;

class CustomerMasterDataTable
{
	public function generate(Request $request)
	{
		$search = $request->get('search');
		$sort   = $request->get('sort');
		$type   = $request->get('type');
		$status = $request->get('status');

		$available   = $request->get('available');
		$unavailable = $request->get('unavailable');
		$deleted     = $request->get('deleted');

		$data = CustomerMaster::query()
			->inhouse([getCurrentTeamHostingId()])
			->datatableQuery()
			->withSearch($search)
			->withSort($sort);

		if ($available === 'false') {
			$data = $data->where('cust_status', 'unavailable');
		}

		if ($unavailable === 'false') {
			$data = $data->where('cust_status', 'available');
		}

		if ($deleted === 'true') {
			$data = $data->withTrashed();
		}

		$data = $data->paginate()
			->appends([
				'search'      => $search,
				'sort'        => $sort,
				'status'      => $status,
				'type'        => $type,
				'available'   => $available,
				'unavailable' => $unavailable,
				'deleted'     => $deleted,
			]);

		$collection = ModelResource::collection($data);

		return $collection;
	}
}
