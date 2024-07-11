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
        Schema::create('customer_masters', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('hosting_id');
            $table->unsignedBigInteger('register_by_team_id');
            $table->string('reg_no', 20)->nullable();
            $table->date('reg_date');
            $table->string('name');
            $table->unsignedBigInteger('country_code_id')->nullable();
            $table->string('mobile', 20)->nullable();
            $table->string('address')->nullable();
            $table->string('cust_status', 20)->nullable();
            $table->string('email')->nullable();
            $table->string('password')->nullable();
            $table->rememberToken();
            $table->string('uuid')->nullable();
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
        Schema::dropIfExists('customer_masters');
    }
};
