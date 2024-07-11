<?php

namespace App\Http\Actions;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ModelCreateAction
{
	public function create(Request $request, $module, $options): JsonResponse
	{
		$options = $this->getOptions($request, $module, $options);
		return response()->json(compact('options'));
	}

	public function getOptions($request, $module, $options)
	{
		return $options->get($request);
	}
}
