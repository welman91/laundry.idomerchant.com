<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class CountryCode extends Model
{
	// VirtualModel
	use Sushi;

	public $incrementing = false;

	// protected $keyType = 'string';

	protected $rows = [
		['id' => 62, 'name' => 'INDONESIA', 'code' => '+62'],
		['id' => 60, 'name' => 'MALAYSIA', 'code' => '+60'],
		['id' => 63, 'name' => 'PHILIPPINES', 'code' => '+63'],
		['id' => 65, 'name' => 'SINGAPORE', 'code' => '+65'],
	];

	protected $schema = [
		'code' => 'string',
	];
}
