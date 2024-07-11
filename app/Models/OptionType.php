<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Sushi\Sushi;

class OptionType extends Model
{
	use Sushi;

	public $incrementing = false;

	protected $keyType = 'string';

	protected $rows = [
		[
			'id'    => 'radio',
			'name'  => 'Radio',
			'color' => 'green-500'
		],
		[
			'id'    => 'checkbox',
			'name'  => 'Checkbox',
			'color' => 'rose-500'
		],
	];
}
