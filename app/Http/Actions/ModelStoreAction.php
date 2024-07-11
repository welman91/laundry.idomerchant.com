<?php

namespace App\Http\Actions;

use App\Modules\CustomerMaster\Models\CustomerMaster;
use App\Modules\ProductSellingPrice\Actions\AvoidSameProductPriceLevel;
use App\Modules\ProductMaster\Actions\AvoidSameProductCode;
use App\Services\AvoidExistingName;
use Illuminate\Support\Facades\DB;

class ModelStoreAction
{
	public $newCreated;

	public function store($request, $table, $buildData, $module)
	{
		// dd($request);
		try {

			if (!in_array($module, ['product-master', 'product-selling-price'])) {
				if ((new AvoidExistingName)->check($table, $request->name))
					return back()->withErrors('The name is already exist!');
			}

			if ($module === 'product-master') {
				if ((new AvoidSameProductCode)->check($request->product_code))
					return back()->withErrors('The product code is already exist!');
			}

			if ($module === 'product-selling-price') {
				if ((new AvoidSameProductPriceLevel)->check($request))
					return back()
						->withErrors('Cannot add data, because price level for this product is already exist!');
			}

			DB::transaction(function () use ($request, $table, $buildData) {
				// *** START ***

				$data  = $buildData->build($request, 'create');
				// dd($request, $data);
				$model = $table->create($data);

				$this->newCreated = $model;

				saveModelLog('store', class_basename($model), $model->id);
				// *** DONE ***
			});

			if ($module === 'customer-master') {
				$customer = CustomerMaster::with('country_code')
					->find($this->newCreated->id);
				return back()->withFlash($customer);
			} else {
				return back()->withFlash('New data created.');
			}
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
