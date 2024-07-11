<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class Module extends Model
{
	// VirtualModel
	use Sushi;

	public $incrementing = false;

	protected $keyType = 'string';

	protected $rows = [
		['id' => 'dashboard', 'name' => 'Dashboard'],
		['id' => 'customer-master', 'name' => 'Customer Master'],
	];
}
