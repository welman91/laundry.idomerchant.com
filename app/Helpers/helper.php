<?php

use App\Models\InvoicesWhatsappStatus;
use App\Models\LogError;
use App\Models\Team;
use App\Services\UniqueIdGenerator;
use App\Services\UniqueNoGenerator;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

function getCurrentTeamId()
{
	return auth()->user()->current_team_id;
}

function getPersonalTeamId()
{
	return auth()->user()->personal_team_id;
}

function getCurrentTeamSlug()
{
	return auth()->user()->currentTeam->slug;
}

function getCurrentTeamPrefix()
{
	return auth()->user()->currentTeam->prefix;
}

function getCurrentTeamNumber()
{
	return auth()->user()->currentTeam->team_no;
}

function getCurrentTeamTimeZone()
{
	return auth()->user()->currentTeam->timezone;
}

function getCurrentHostingPrefix()
{
	$hosting = Team::find(auth()->user()->currentTeam->hosting_id);
	return $hosting->prefix;
}

function getCurrentTeamHostingId()
{
	return auth()->user()->currentTeam->hosting_id;
}

function getCurrentTeamType()
{
	return auth()->user()->currentTeam->type;
}

function getCurrentTeamWhatsappClientId()
{
	return auth()->user()->currentTeam->whatsapp_client_id;
}

function getInhouseTeams(): array
{
	$team 	= Team::withTrashed()->find(getCurrentTeamId());
	$teams[] 	= $team->id;

	if (in_array($team->type, ['hosting', 'central'])) {
		$teams 	= Team::withTrashed()
			->where('hosting_id', $team->hosting_id)
			->pluck('id')
			->toArray();
	}
	return $teams;
}

function getQueryFields($columns, $feature, $state = 'true')
{
	$fields = array_filter($columns, function ($field) use ($feature, $state) {
		return $field[$feature] === $state;
	});

	$searchableFields = array_column($fields, 'field');

	return $searchableFields;
}

function getValidatedData($table, $data): array
{
	$schema = Schema::getColumnListing($table->getTable());
	return array_filter($data, function ($item) use ($schema) {
		return in_array($item, $schema);
	}, ARRAY_FILTER_USE_KEY);
}

function getNextSubscriptionNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('new_subscriptions', 'subs_no', 14, $prefix . '-SUB');
}

function getNextPsbNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('new_subscriptions', 'form_no', 14, $prefix . '-PSB');
}

function getNextUpgradeNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('new_subscriptions', 'form_no', 14, $prefix . '-UPG');
}

function getNextDowngradeNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('new_subscriptions', 'form_no', 14, $prefix . '-DWG');
}

function getNextInvoiceNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('new_invoices', 'inv_no', 14, $prefix . '-INV');
}

function getNextInvoicePaymentNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate(
			'new_invoice_payments',
			'payment_no',
			14,
			$prefix . '-PAY'
		);
}

function getNextPaymentCode()
{
	$random = rand(10, 99);
	$timestamp = now()->timestamp;
	return $timestamp + $random;
}

function getNextAssetTransferNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('asset_transfers', 'transfer_no', 14, $prefix . '-TRF');
}

function getNextProductNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('new_products', 'product_no', 14, $prefix . '-PRD');
}

function getNextFeeNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('new_fees', 'fee_no', 14, $prefix . '-FEE');
}


function getNextCustomerDeviceRegNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('customer_devices', 'reg_no', 14, $prefix . '-CDV');
}

function getNextCustomerActivationNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('customer_activations', 'activation_no', 14, $prefix . '-ACT');
}

function getNextHelpdeskTicketNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('helpdesk_tickets', 'ticket_no', 14, $prefix . '-TKT');
}

function getNextVoucherPaymentNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('new_receipt_vouchers', 'voucher_no', 14, $prefix . '-RCV');
}

function getNextCreditNoteNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('new_credit_notes', 'credit_no', 14, $prefix . '-CRD');
}

function getNextDebitNoteNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentTeamPrefix();
	return (new UniqueIdGenerator)
		->generate('new_debit_notes', 'debit_no', 14, $prefix . '-DBT');
}

function getNextMerchantPaymentBatchNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentHostingPrefix();
	return (new UniqueIdGenerator)
		->generate('batch_payment_merchant_invoices', 'batch_no', 14, $prefix . '-BAT');
}

function getNextMerchantPaymentNumber($prefix = null)
{
	$prefix = ($prefix) ?? getCurrentHostingPrefix();
	return (new UniqueIdGenerator)
		->generate('new_merchant_invoice_payments', 'paid_no', 14, $prefix . '-TAG');
}

function saveErrorLog($th, $file)
{
	DB::transaction(function () use ($th, $file) {
		LogError::create([
			'message' => $th->getMessage(),
			'filename' => $file
		]);
	});
}

function returnBackWithData($data)
{
	return session()->put('response', [
		'token' => Str::random(10),
		'data'  => $data
	]);
}

function makeArray(mixed $query, mixed $delimiter = '-'): array
{
	if (is_array($query)) return $query;
	$query = ($query == "0") ? intval($query) : $query;
	return isset($query) ? explode($delimiter, $query) : [];
}

function sumArray($array, $key)
{
	return array_reduce($array, function ($carry, $item) use ($key) {
		return $carry + (isset($item[$key]) ? $item[$key] : 0);
	}, 0);
}


function validateSearchFields(
	mixed $requestFields,
	array $allowedFields,
	mixed $delimiter = '-'
): array {
	if ($requestFields) {
		$searchFields = makeArray($requestFields, $delimiter);
		// $areEqual = empty(array_diff($searchFields, $allowedFields)) && empty(array_diff($allowedFields, $searchFields));
		return array_intersect($allowedFields, $searchFields);
	}
}

function getContact($customer)
{
	if ($customer?->mobile && $customer->countryCode) {
		return $customer->countryCode?->code . $customer->mobile;
	}
	return null;
}

// function getOutstanding($invoice)
// {
// 	$outstandings = $invoice->customer->outstandings()->get()->toArray();

// 	$sum = array_reduce($outstandings, function ($carry, $item) {
// 		return $carry + $item['amount'];
// 	}, 0);

// 	return $sum;
// }

function convertNullToZero($input)
{
	return ($input === null) ? 0 : $input;
}

function getInvoicePaymentPaidType($received_amount, $payment_total, $type = null)
{
	if (!$type) {
		return ($received_amount < $payment_total) ? 'partial' : 'full';
	} else {
		return $type;
	}
}

function jsonReturnWithMessage($msg)
{
	return response()->json(['msg' => $msg], 422);
}

function postRequestSize($request)
{
	$postData = $request->getContent();
	$sizeInKilobytes = round(strlen($postData) / 1024, 2);

	return $sizeInKilobytes;
}

function checkTableDbExisting($array_table = [])
{
	foreach ($array_table as $table) {
		if (!Schema::hasTable($table)) {
			return ['status' => false, 'table' => $table];
		}
	}
	return ['status' => true];
}

function saveWhatsappMsgStatus($response, $msgtype, $inv_no)
{
	$upd = [];

	// Jika sukses terkirim
	if ($response['status'] ?? false) {
		switch ($msgtype) {
			case 'pesanPSB':
				$upd = ['msg_type_psb' => 1, "msg_type_psb_date" => now()];
				break;
			case 'pesanAB':
				$upd = ['msg_type_ab' => 1, "msg_type_ab_date" => now()];
				break;
			case 'pesan1':
				$upd = ['msg_type_1' => 1, "msg_type_1_date" => now()];
				break;
			case 'pesan2':
				$upd = ['msg_type_2' => 1, "msg_type_2_date" => now()];
				break;
			case 'pesan3':
				$upd = ['msg_type_3' => 1, "msg_type_3_date" => now()];
				break;
			case 'pesan_tgl_8_atau_9':
				$upd = [
					'msg_type_pesan_tgl_8_atau_9'      => 1,
					"msg_type_pesan_tgl_8_atau_9_date" => now()
				];
				break;
			case 'pesan_tgl_15':
				$upd = [
					'msg_type_pesan_tgl_15'      => 1,
					"msg_type_pesan_tgl_15_date" => now()
				];
				break;
		}
		$upd += ['response_status' => "Success"];
	} else {
		// Jika tidak sukses terkirim
		$upd += ['response_status' =>  $response['reason']];
	}

	// sukses atau gagal kirim tetap disimpan di InvoiceWhatsapp db
	$upd += ['last_sent' => Carbon::now()];
	InvoicesWhatsappStatus::updateOrCreate(['inv_no' => $inv_no], $upd);
}

function firstHour($date)
{
	return Carbon::createFromFormat('Y-m-d', $date)->setTime(0, 0, 0)->toDateTimeString();
}

function lastHour($date)
{
	return Carbon::createFromFormat('Y-m-d', $date)->setTime(23, 00, 00)->toDateTimeString();
}


function deleteMe($whatDB)
{
	if ($whatDB) {
		$whatDB->delete($whatDB);
	}
}

function getMobileNumber($mobile = null)
{
	return (app()->isProduction()) ? $mobile : config('app.whatsapp_testing_number');
}

function getOrderNumber()
{
	$randomAlphabet = (function () {
		$alphabets = range('A', 'Z');
		do {
			$c = $alphabets[array_rand($alphabets)];
		} while ($c === 'O' || $c === 'I');
		return $c;
	})();

	return $randomAlphabet . strtotime('now');
}

function getDateBasedOnTimezone()
{
	$team = Team::find(auth()->user()->current_team_id);
	return Carbon::now()->tz($team->timezone);
}

function getDateTimezoneByTeamSlug($team_slug)
{
	$team = Team::where('slug', $team_slug)->firstOrFail();
	return Carbon::now()->tz($team->timezone);
}
