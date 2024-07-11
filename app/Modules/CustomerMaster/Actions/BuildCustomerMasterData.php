<?php

namespace App\Modules\CustomerMaster\Actions;

use App\Modules\CustomerMaster\Models\CustomerMaster;
use Illuminate\Support\Facades\Hash;

class BuildCustomerMasterData
{
	public function build($request, $action)
	{
		$data = getValidatedData(new CustomerMaster, $request->toArray());

		if ($action == 'create') {
			$reg_no = getNextCustomerRegNumber();
			$data['reg_no']   = $reg_no;
			$data['email']    = $reg_no . '@' . config('app.email_domain');
			$data['password'] = Hash::make(12345678);
		}

		return $data;
	}
}
