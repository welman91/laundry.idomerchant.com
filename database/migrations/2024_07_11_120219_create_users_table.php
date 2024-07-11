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
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('user_no', 20)->unique('unique_user_no');
            $table->string('user_name');
            $table->string('user_department', 20)->default('adm');
            $table->string('user_status', 20)->default('active')->comment(' active/nonactive');
            $table->tinyInteger('pricelevel')->default(1);
            $table->unsignedBigInteger('country_code_id')->nullable();
            $table->string('mobile', 20)->nullable();
            $table->string('profile_img')->nullable();
            $table->string('email', 60)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->unsignedBigInteger('current_team_id')->default(1);
            $table->unsignedBigInteger('personal_team_id')->default(1);
            $table->boolean('superuser')->default(false)->comment('0/1');
            $table->timestamp('last_login_at')->nullable();
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
        Schema::dropIfExists('users');
    }
};
