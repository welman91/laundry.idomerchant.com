<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

/**
 * Class UniqueIdGenerator
 * @package App\Services
 */
class UniqueIdGenerator
{
	/*
	 * Service ini berguna untuk men-generate unique id
	 */

	public function generate($table, $field, $length, $prefix)
	{
		$last_row = DB::table($table)->where($field, 'like', $prefix . '%')
			->latest($field);

		if (count($last_row->get())) {
			// Jika existing
			$last_no = $last_row->pluck($field)->first();
			$next    = ++$last_no;
		} else {
			// Jika tidak existing
			$prefix_length = strlen($prefix);
			$number_length = $length - $prefix_length;
			$number        = str_pad(1, $number_length, '0', STR_PAD_LEFT);
			$next          = $prefix . $number;
		}

		return $next;
	}
}
