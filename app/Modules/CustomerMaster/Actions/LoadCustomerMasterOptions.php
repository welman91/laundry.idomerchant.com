<?php

namespace App\Modules\CustomerMaster\Actions;

use App\Models\CountryCode;
use App\Models\UnitStatus;

class LoadCustomerMasterOptions
{
	public function get($request)
	{
		$options = [];

		$options['statuses']     = UnitStatus::get();
		$options['countrycodes'] = CountryCode::get();

		return $options;
	}
}
