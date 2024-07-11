<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

/**
 * Class UniqueNoGenerator
 * @package App\Services
 */
class UniqueNoGenerator
{
	/*
	 * Service ini berguna untuk men-generate unique number per team
	 */

	public function generate($last_row, $field, $length)
	{
		if (count($last_row->get())) {
			// The initial number as a string
			$currentNumberString = $last_row->pluck($field)->first();
			// Convert the string to an integer and increment it
			$currentNumber = (int)$currentNumberString;
			$nextNumber = $currentNumber + 1;

			// Format the next number with leading zeros
			$next = sprintf('%0' . $length . 'd', $nextNumber);
		} else {
			// Jika tidak existing
			$next = str_pad(1, $length, '0', STR_PAD_LEFT);
		}

		// if (count($last_row->get())) {
		// 	// Jika existing
		// 	$last_no = $last_row->pluck($field)->first();
		// 	$next    = ++$last_no;
		// } else {
		// 	// Jika tidak existing
		// 	$prefix_length = strlen($prefix);
		// 	$number_length = $length - $prefix_length;
		// 	$number        = str_pad(1, $number_length, '0', STR_PAD_LEFT);
		// 	$next          = $prefix . $number;
		// }

		return $next;
	}
}
