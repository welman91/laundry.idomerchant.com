<?php

namespace App\Http\Middleware;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Closure;

class CheckIdoOrderSession
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next): Response
	{
		$session = session()->get('idoorder_session');

		if (!$session) {
			$team_slug = $request->team;
			$table_no  = $request->table_no;

			return redirect()->route(
				'idoorder.entry.index',
				[$team_slug, $table_no]
			);
		}

		return $next($request);
	}
}
