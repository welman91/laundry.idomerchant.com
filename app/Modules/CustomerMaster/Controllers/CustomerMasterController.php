<?php

namespace App\Modules\CustomerMaster\Controllers;

use App\Modules\CustomerMaster\DataTables\CustomerMasterDataTable;
use App\Modules\CustomerMaster\Actions\LoadCustomerMasterOptions;
use App\Modules\CustomerMaster\Actions\BuildCustomerMasterData;
use App\Modules\CustomerMaster\Requests\CustomerMasterRequest;
use App\Modules\CustomerMaster\Models\CustomerMaster;
use App\Http\Actions\ModelRestoreAction;
use App\Http\Actions\ModelDestroyAction;
use App\Http\Actions\ModelCreateAction;
use App\Http\Actions\ModelUpdateAction;
use App\Http\Actions\ModelIndexAction;
use App\Http\Actions\ModelStoreAction;
use App\Http\Actions\ModelEditAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomerMasterController extends Controller
{
	private $title  = 'Customers';

	private $module = 'customer-master';

	private $routes, $table, $dataTable, $buildData, $options, $extraDestroy;

	public function __construct()
	{
		$methods = [
			'index', 'create', 'store', 'edit', 'update', 'destroy', 'restore'
		];

		foreach ($methods as $method) {
			$routeName = "$this->module.$method";
			$routes[$method] = $routeName;
		}
		$this->routes       = $routes;
		$this->table        = CustomerMaster::query();
		$this->dataTable    = (new CustomerMasterDataTable);
		$this->buildData    = (new BuildCustomerMasterData);
		$this->options      = (new LoadCustomerMasterOptions);
		$this->extraDestroy = ['cust_status' => 'unavailable'];
	}

	public function index(Request $request, $team)
	{
		return (new ModelIndexAction)
			->index(
				$request,
				$this->title,
				$this->module,
				$this->routes,
				$this->dataTable
			);
	}

	public function create(Request $request, $team)
	{
		return (new ModelCreateAction)
			->create(
				$request,
				$this->module,
				$this->options
			);
	}

	public function store(CustomerMasterRequest $request, $team)
	{
		return (new ModelStoreAction)
			->store(
				$request,
				$this->table,
				$this->buildData,
				$this->module
			);
	}

	public function edit(Request $request, $team,  $id)
	{
		return (new ModelEditAction)
			->edit(
				$request,
				$id,
				$this->table,
				$this->module,
				$this->options
			);
	}

	public function update(CustomerMasterRequest $request, $team,  $id)
	{
		return (new ModelUpdateAction)
			->update(
				$request,
				$id,
				$this->table,
				$this->buildData,
				$this->module
			);
	}

	public function destroy($team, $id)
	{
		return (new ModelDestroyAction)
			->destroy(
				$id,
				$this->table,
				$this->module,
				$this->extraDestroy
			);
	}

	public function restore($team, $id)
	{
		return (new ModelRestoreAction)
			->restore(
				$id,
				$this->table,
				$this->module,
			);
	}
}
