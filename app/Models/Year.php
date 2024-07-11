<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class Year extends Model
{
	// VirtualModel
	use Sushi;

	public $incrementing = false;

	protected $keyType = 'string';

	protected $rows = [
		['id' => '2024', 'name' => '2024'],
		['id' => '2023', 'name' => '2023'],
		['id' => '2022', 'name' => '2022'],
		['id' => '2021', 'name' => '2021'],
		['id' => '2020', 'name' => '2020'],
		['id' => '2019', 'name' => '2019'],
		['id' => '2018', 'name' => '2018'],
		['id' => '2017', 'name' => '2017'],
		['id' => '2016', 'name' => '2016'],
		['id' => '2015', 'name' => '2015'],
	];
}
