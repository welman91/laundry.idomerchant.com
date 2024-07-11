<?php

use App\Models\PrefixTag;
use App\Models\Team;
use App\Models\User;
use App\Modules\CustomerMaster\Models\CustomerMaster;
use App\Modules\Transaction\Models\Transaction;
use App\Services\UniqueIdGenerator;
use App\Services\UniqueNoGenerator;
use Illuminate\Support\Facades\Log;

function getNextEntityNumber($table, $field, $entity, $length = 10)
{
	$team_no = Team::find(getCurrentTeamHostingId())->team_no;

	$entity_prefix = PrefixTag::where('entity', $entity)->firstOrFail()->id;

	$formattedNumber = str_pad($entity_prefix, 2, '0', STR_PAD_LEFT);

	return (new UniqueIdGenerator)
		->generate($table, $field, $length, $team_no . $formattedNumber);
}

function softDelete($model, $extra = null)
{
	if ($extra) {
		$data = [
			'deleted_by' => auth()->id()
		] +  $extra;
	} else {
		$data = [
			'deleted_by' => auth()->id()
		];
	}

	$model->update($data);

	return $model->delete();
}

function restoreData($model, $extra = null)
{
	if ($extra) {
		$data = [
			'deleted_by' => null
		] +  $extra;
	} else {
		$data = [
			'deleted_by' => null
		];
	}

	$model->update($data);

	return $model->restore();
}

function saveModelLog($type, $class, $model_id)
{
	$user_id = auth()->id();

	$logDetails = [
		'type'     => $type,
		'class'    => $class,
		'model_id' => $model_id,
		'user_id'  => $user_id,
	];

	Log::channel('modelChannelLog')
		->info(json_encode($logDetails));
	// ->info("$type $class, with id: $model_id, by user id: $user_id;");
}

function getNextTransactionNumber()
{
	$column = 'rcp_no';

	$last_row = Transaction::query()
		->where('team_id', getCurrentTeamId())
		->latest($column);

	return (new UniqueNoGenerator)
		->generate($last_row, $column, 6);
}

function getNextUserNumber($personal_team_id)
{
	$column = 'user_no';

	$last_row = User::query()
		->where('personal_team_id', $personal_team_id)
		->latest($column);

	return (new UniqueNoGenerator)
		->generate($last_row, $column, 8);
}

function getNextCustomerRegNumber()
{
	$column = 'reg_no';

	$last_row = CustomerMaster::query()
		->where('hosting_id', getCurrentTeamHostingId())
		->whereNotIn($column, ['NM'])
		->latest($column);

	return (new UniqueNoGenerator)
		->generate($last_row, $column, 4);
}
