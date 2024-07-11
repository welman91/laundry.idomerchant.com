<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('team_no', 20)->unique('unique_team_no');
            $table->string('name');
            $table->string('slug')->nullable();
            $table->unsignedBigInteger('hosting_id')->nullable();
            $table->string('timezone')->default('Asia/Jakarta');
            $table->string('whatsapp_client_id', 20);
            $table->string('type', 30);
            $table->string('prefix', 5);
            $table->string('logo')->nullable();
            $table->string('currency', 5)->default('IDR');
            $table->string('status', 20)->default('active');
            $table->tinyInteger('invoice_exp_date')->default(10);
            $table->string('email')->nullable();
            $table->string('contact')->nullable();
            $table->string('address')->nullable();
            $table->string('website')->nullable();
            $table->text('wa_qrcode')->nullable();
            $table->string('wa_status', 30)->default('disconnect')->comment('connect/disconnect');
            $table->timestamp('wa_last_connected')->nullable();
            $table->timestamp('created_at')->nullable();
            $table->unsignedBigInteger('created_by')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->softDeletes();
            $table->unsignedBigInteger('deleted_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teams');
    }
};
