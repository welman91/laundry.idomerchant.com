<?php

namespace App\Http\Actions;

use App\Modules\ProductMaster\Actions\AvoidSameProductCode;
use App\Services\AvoidExistingName;
use Illuminate\Support\Facades\DB;

class ModelUpdateAction
{
	public function update($request, $id, $table, $buildData, $module)
	{
		try {

			if (!in_array(
				$module,
				['customer-master', 'product-master', 'product-selling-price']
			)) {
				if ((new AvoidExistingName)->check($module, $request->name, $id))
					return back()->withErrors('The name is already exist!');
			}

			if ($module === 'product-master') {
				if ((new AvoidSameProductCode)->check($request->product_code, $id))
					return back()->withErrors('The product code is already exist!');
			}

			DB::transaction(function () use ($request, $table, $buildData, $id) {
				// *** START ***

				$data  = $buildData->build($request, 'update');
				$model = $table->findOrFail($id);
				$model->update($data);

				saveModelLog('update', class_basename($model), $model->id);
				// *** DONE ***
			});

			return back()->withFlash('Data updated.');
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
