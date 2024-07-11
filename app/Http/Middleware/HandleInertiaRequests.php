<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Services\AuthorizationRouteAccess;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
	/**
	 * The root template that is loaded on the first page visit.
	 *
	 * @var string
	 */
	protected $rootView = 'app';

	/**
	 * Determine the current asset version.
	 */
	public function version(Request $request): string|null
	{
		return parent::version($request);
	}

	/**
	 * Define the props that are shared by default.
	 *
	 * @return array<string, mixed>
	 */
	public function share(Request $request): array
	{

		$auth = (!$request->user()) ? null :
			[
				'user' => User::with([
					'currentTeam:id,team_no,whatsapp_client_id,name,type,slug,logo,address,contact,website',
					'personalTeam:id,team_no,whatsapp_client_id,name,type,slug,logo,address,contact,website',
					'permissions:id,name'
				])
					->withTrashed()
					->find(auth()->id()),

				'roles' => auth()->user()->getRoleNames(),

				// 'routes' => (new AuthorizationRouteAccess)->generate(),

			];

		return [
			...parent::share($request),

			'auth' => $auth,
			'app' => [
				'name'          => config('app.name'),
				'subname'       => $this->getSubname($request),
				'current_route' => Route::currentRouteName()
			],

			'response' => $request->session()->get('response'),

			// 'ziggy' => fn () => [
			// 	...(new Ziggy)->toArray(),
			// 	'location' => $request->url(),
			// ],
		];
	}

	public function getSubname($request)
	{
		if ($request->user()) {
			$current_route = Route::currentRouteName();

			$assetMgmt = ['customer-device.index'];
			$helpdesk = ['ticket-management.index', 'my-ticket.index'];

			if (in_array($current_route, $assetMgmt)) return 'ASSET MGMT';
			if (in_array($current_route, $helpdesk)) return 'HELPDESK';

			return 'ADMIN';
		}
		return null;
	}
}
