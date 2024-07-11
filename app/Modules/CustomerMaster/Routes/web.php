<?php

use App\Modules\CustomerMaster\Controllers\CustomerMasterController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Customer Master Web Routes
|--------------------------------------------------------------------------
|
*/

Route::prefix('{team}')
	->middleware(['auth', 'verified', 'CheckTeamIsExisting'])
	->group(function () {
		// 
		Route::post(
			'customer-master/restore/{customer_id}',
			[CustomerMasterController::class, 'restore']
		)->name('customer-master.restore');

		Route::post(
			'customer-master/{customer_id}',
			[CustomerMasterController::class, 'update']
		)->name('customer-master.update');

		Route::resource(
			'customer-master',
			CustomerMasterController::class
		)->except(['show', 'update']);
	});
