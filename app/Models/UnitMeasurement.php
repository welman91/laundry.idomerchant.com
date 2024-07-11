<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class UnitMeasurement extends Model
{
	// VirtualModel
	use Sushi;

	public $incrementing = false;

	protected $keyType = 'string';

	protected $rows = [
		['id' => 'PCS', 'name' => 'PCS', 'old_id' => 5],
		['id' => 'KGS', 'name' => 'KGS', 'old_id' => 5],
		['id' => 'UNIT', 'name' => 'UNIT', 'old_id' => 1],
		['id' => 'SET', 'name' => 'SET', 'old_id' => 2],
		['id' => 'BOX', 'name' => 'BOX', 'old_id' => 3],
		['id' => 'MTR', 'name' => 'METER', 'old_id' => 4],
	];
}
