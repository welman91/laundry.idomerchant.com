<?php

namespace App\Http\Middleware;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Closure;

class PasswordVerificattion
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next): Response
	{
		// CHECK USER PASSWORD BEFORCE CONTINUE
		$check = Hash::check($request->password, auth()->user()->password);
		return ($check) ? $next($request) : abort(401);
	}
}
