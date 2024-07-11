<?php

namespace App\Http\Actions;

use App\Http\Resources\SingleModelResource;
use Illuminate\Http\JsonResponse;

class ModelEditAction
{
	public function edit($request, $id, $table, $module, $options): JsonResponse
	{
		$options = (new ModelCreateAction)->getOptions($request, $module, $options);

		$data = $table->withTrashed()
			->singleRowQuery()
			->findOrFail($id);

		$model = new SingleModelResource($data);

		return response()->json(compact('options', 'model'));
	}
}
