<?php

namespace App\Http\Actions;

use Illuminate\Support\Facades\DB;

class ModelRestoreAction
{
	public function restore($id, $table, $module)
	{
		try {
			DB::transaction(function () use ($table, $id) {
				// *** START ***

				$model = $table->withTrashed()->findOrFail($id);
				restoreData($model);

				saveModelLog('restore', class_basename($model), $model->id);
				// *** DONE ***
			});

			return back()->withFlash('Data restored succesfully');
		} catch (\Throwable $th) {
			saveErrorLog($th, __FILE__);
			return back()->withErrors(config('app.error_msg'));
		}
	}
}
