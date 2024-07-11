<?php

namespace App\Http\Actions;

use Inertia\Inertia;

class ModelIndexAction
{
	public function index($request, $title, $module, $routes, $dataTable = null, $styles = null, $data = null)
	{
		$page = [
			'title'  => $title,
			'module' => $module,
			'slug'   => $request->team,
			'routes' => $routes,
			'styles' => $styles
		];

		$collection = $dataTable?->generate($request);

		$permissions = [
			'canCreate'  => $this->checkPermission($module, 'create'),
			'canUpdate'  => $this->checkPermission($module, 'update'),
			'canDestroy' => $this->checkPermission($module, 'destroy'),
		];

		$props = compact('page', 'collection', 'permissions', 'data');

		return Inertia::render('Template/Index', $props);
	}

	public function checkPermission($module, $method)
	{
		$userPermissions = auth()->user()->permissions()->pluck('name')->toArray();
		return in_array($module . '.' . $method, $userPermissions);
	}
}
