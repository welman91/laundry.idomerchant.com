<?php

namespace App\Modules\CustomerMaster\DataTables;

use App\Modules\CustomerMaster\Resources\CustomerSelectionResource;
use App\Modules\CustomerMaster\Models\CustomerMaster;
use Illuminate\Http\Request;

class CustomerSelectionDataTable
{
	public function __invoke(Request $request)
	{
		$search  = $request->get('search');
		$sort    = $request->get('sort');

		$data = CustomerMaster::query()
			->inhouse([getCurrentTeamHostingId()])
			->with(['country_code'])
			->when($search ?? null, function ($q) use ($search) {
				$q->where('name', 'like', '%' . $search . '%')
					->orWhere('mobile', 'like', '%' . $search . '%')
					->orWhere('address', 'like', '%' . $search . '%')
					->orWhere('reg_no', 'like', '%' . $search . '%');
			})
			->when($sort ?? null, function ($q) use ($sort) {
				$q->orderBy($sort['f'], $sort['d'] === 'desc' ? 'desc' : 'asc');
			});

		$data = $data->paginate()
			->appends([
				'search' => $search,
				'sort'   => $sort,
			]);

		$collection = CustomerSelectionResource::collection($data);

		return $collection;
	}
}
