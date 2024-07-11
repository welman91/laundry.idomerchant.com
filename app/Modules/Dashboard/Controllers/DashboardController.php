<?php

namespace App\Modules\Dashboard\Controllers;

use App\Modules\CustomerMaster\Models\CustomerMaster;
use App\Modules\Transaction\Models\Transaction;
use App\Http\Actions\ModelIndexAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;

class DashboardController extends Controller
{
	private $title  = 'Dashboard';

	private $module = 'dashboard';

	private $routes;

	public function __construct()
	{
		$methods = [
			'index'
		];

		foreach ($methods as $method) {
			$routeName = "$this->module.$method";
			$routes[$method] = $routeName;
		}

		$this->routes = $routes;
	}

	public function index(Request $request, $team)
	{
		$data = [
			'totalCustomers'  => $this->getTotalCustomers(),
			'StatTransaction' => $this->getTotalTransactions($request),
			'StatSales'       => $this->getTotalSales($request),
			'StatTarget'      => $this->getTotalTarget($request),
		];

		return (new ModelIndexAction)
			->index(
				$request,
				$this->title,
				$this->module,
				$this->routes,
				data: $data
			);
	}

	public function getTotalCustomers()
	{
		return CustomerMaster::query()
			->where('hosting_id', getCurrentTeamHostingId())
			->count();
	}

	public function getDateRange($request)
	{
		return [
			'startDate' => $request?->startDate ?? Carbon::now()->firstOfMonth()->format('Y-m-d'),
			'endDate' => $request?->endDate ?? Carbon::now()->format('Y-m-d')
		];
	}

	public function getTransactionTable($dateRange)
	{
		return [];
	}

	public function getTotalTransactions(Request $request)
	{
		$dateRange = $this->getDateRange($request);

		$total = 0;

		return compact('dateRange', 'total');
	}

	public function getTotalSales(Request $request)
	{
		$dateRange = $this->getDateRange($request);

		$total = 0;

		return compact('dateRange', 'total');
	}

	public function getTotalTarget(Request $request)
	{
		$dateRange = $this->getDateRange($request);
		$total = 0;
		return compact('dateRange', 'total');
	}
}
