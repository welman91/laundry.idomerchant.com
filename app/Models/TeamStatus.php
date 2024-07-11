<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class TeamStatus extends Model
{
	// VirtualModel
	use Sushi;

	public $incrementing = false;

	protected $keyType = 'string';

	protected $rows = [
		['id' => 'active', 'name' => 'Active'],
		['id' => 'nonactive', 'name' => 'Nonactive'],
	];
}
