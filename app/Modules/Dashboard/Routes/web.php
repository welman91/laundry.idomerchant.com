<?php

use App\Modules\Dashboard\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Dashboard Web Routes
|--------------------------------------------------------------------------
|
*/

Route::prefix('{team}')
	->middleware(['auth', 'verified', 'CheckTeamIsExisting'])
	->group(function () {
		Route::get('dashboard', [DashboardController::class, 'index'])
			->name('dashboard.index');

		Route::get(
			'dashboard/fetch-transactions',
			[DashboardController::class, 'getTotalTransactions']
		)->name('dashboard.fetch-transactions');

		Route::get(
			'dashboard/fetch-sales',
			[DashboardController::class, 'getTotalSales']
		)->name('dashboard.fetch-sales');

		Route::get(
			'dashboard/fetch-target',
			[DashboardController::class, 'getTotalTarget']
		)->name('dashboard.fetch-target');
	});
