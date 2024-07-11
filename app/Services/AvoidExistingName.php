<?php

namespace App\Services;

/**
 * Class AvoidExistingName
 * @package App\Services
 */
class AvoidExistingName
{
	/*
	 * Service ini berguna untuk check dan avoid same name di database
	 */

	public function check($table, $name, $model_id = null)
	{
		$model = $table
			->inhouse([getCurrentTeamHostingId()])
			->withTrashed();


		if ($model_id) {
			$model = $model->where('id', '!=', $model_id);
		}

		$exist = $model->where('name', $name)->count();

		return $exist;
	}
}
