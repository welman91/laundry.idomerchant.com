<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Closure;

class ValidateModule
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
	 * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
	 */
	public function handle(Request $request, Closure $next)
	{
		$modules = [
			'brand',
			'size',
			'pattern',
			'color',
			'defect',
		];

		if (!in_array($request->module, $modules)) {
			return abort(403, 'Module Not Found!');
		}

		return $next($request);
	}
}
