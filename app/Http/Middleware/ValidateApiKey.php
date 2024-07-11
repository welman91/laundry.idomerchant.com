<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ValidateApiKey
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
		// CEK IF API KEY PROVIDED
		if (!$request->application_key) {
			$response = [
				"response_code"        => 403,
				"response_description" => "Please provide application key"
			];
			return response()->json($response, 403);
		}

		// CEK API KEY IF CORRECT
		if (config('app.api_key_mst') != $request->application_key) {
			$response = [
				"response_code"        => 403,
				"response_description" => "Invalid application key"
			];
			return response()->json($response, 403);
		}

		return $next($request);
	}
}
