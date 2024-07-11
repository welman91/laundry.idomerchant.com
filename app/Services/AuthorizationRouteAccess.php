<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

/**
 * Class AuthorizationRouteAccess
 * @package App\Services
 */
class AuthorizationRouteAccess
{
	/*
	 * Service ini berguna untuk otorisasi menu berdasarkan role user
	 */

	public function generate(): array
	{
		$routes = auth()->user()->getPermissionNames()->toArray();
		array_push($routes, 'logout');

		return $routes;
	}
}
