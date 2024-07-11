<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class UnitStatus extends Model
{
	// VirtualModel
	use Sushi;

	public $incrementing = false;

	protected $keyType = 'string';

	protected $rows = [
		[
			'id'   => 'available',
			'name' => 'Available',
			'css'  => 'green-pill'
		],
		[
			'id'   => 'unavailable',
			'name' => 'Unavailable',
			'css'  => 'red-pill'
		],
	];
}
