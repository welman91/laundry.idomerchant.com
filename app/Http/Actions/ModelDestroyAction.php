<?php

namespace App\Http\Actions;

use Illuminate\Support\Facades\DB;

class ModelDestroyAction
{
	public function destroy($id, $table, $module, $extraDestroy = [])
	{
		try {
			DB::transaction(function () use ($table, $id, $extraDestroy) {
				// *** START ***

				$model = $table->findOrFail($id);
				softDelete($model, $extraDestroy);

				saveModelLog('destroy', class_basename($model), $model->id);
				// *** DONE ***
			});

			return back()->withFlash('Data deleted succesfully');
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
