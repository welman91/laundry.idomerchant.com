<?php

use Illuminate\Support\Facades\Facade;
use Illuminate\Support\ServiceProvider;

return [

	/*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */

	'name'                 => env('APP_NAME', 'Laravel'),
	'version'              => env('APP_VERSION', '1.0.0'),
	'country'              => env('COUNTRY', 62),
	'currency'             => env('CURRENCY', 'IDR'),

	'email_domain'         => env('EMAIL_DOMAIN', 'gmail.com'),

	// FOR API KEY PAYMENT GATEWAY
	'api_key_mst'          => env('API_KEY_MST', ''),

	// FOR WEBHOOK SECRET TOKEN
	'webhook_secret_token' => env('WEBHOOK_SECRET_TOKEN', ''),

	'error_msg'            => env('SYSTEM_ERROR_MESSAGE', 'ERROR'),

	/*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" your application is currently
    | running in. This may determine how you prefer to configure various
    | services the application utilizes. Set this in your ".env" file.
    |
    */

	'env' => env('APP_ENV', 'production'),

	/*
    |--------------------------------------------------------------------------
    | Application Debug Mode
    |--------------------------------------------------------------------------
    |
    | When your application is in debug mode, detailed error messages with
    | stack traces will be shown on every error that occurs within your
    | application. If disabled, a simple generic error page is shown.
    |
    */

	'debug' => (bool) env('APP_DEBUG', false),

	/*
    |--------------------------------------------------------------------------
    | Application URL
    |--------------------------------------------------------------------------
    |
    | This URL is used by the console to properly generate URLs when using
    | the Artisan command line tool. You should set this to the root of
    | your application so that it is used when running Artisan tasks.
    |
    */

	'url' => env('APP_URL', 'http://localhost'),

	'asset_url' => env('ASSET_URL'),

	/*
    |--------------------------------------------------------------------------
    | Application Timezone
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default timezone for your application, which
    | will be used by the PHP date and date-time functions. We have gone
    | ahead and set this to a sensible default for you out of the box.
    |
    */

	// 'timezone' => 'UTC',
	'timezone' => env('TIMEZONE', 'Asia/Jakarta'),

	/*
    |--------------------------------------------------------------------------
    | Application Locale Configuration
    |--------------------------------------------------------------------------
    |
    | The application locale determines the default locale that will be used
    | by the translation service provider. You are free to set this value
    | to any of the locales which will be supported by the application.
    |
    */

	// 'locale' => 'en',
	'locale' => 'id',

	/*
    |--------------------------------------------------------------------------
    | Application Fallback Locale
    |--------------------------------------------------------------------------
    |
    | The fallback locale determines the locale to use when the current one
    | is not available. You may change the value to correspond to any of
    | the language folders that are provided through your application.
    |
    */

	'fallback_locale' => 'en',

	/*
    |--------------------------------------------------------------------------
    | Faker Locale
    |--------------------------------------------------------------------------
    |
    | This locale will be used by the Faker PHP library when generating fake
    | data for your database seeds. For example, this will be used to get
    | localized telephone numbers, street address information and more.
    |
    */

	'faker_locale' => 'en_US',

	/*
    |--------------------------------------------------------------------------
    | Encryption Key
    |--------------------------------------------------------------------------
    |
    | This key is used by the Illuminate encrypter service and should be set
    | to a random, 32 character string, otherwise these encrypted strings
    | will not be safe. Please do this before deploying an application!
    |
    */

	'key' => env('APP_KEY'),

	'cipher' => 'AES-256-CBC',

	/*
    |--------------------------------------------------------------------------
    | Maintenance Mode Driver
    |--------------------------------------------------------------------------
    |
    | These configuration options determine the driver used to determine and
    | manage Laravel's "maintenance mode" status. The "cache" driver will
    | allow maintenance mode to be controlled across multiple machines.
    |
    | Supported drivers: "file", "cache"
    |
    */

	'maintenance' => [
		'driver' => 'file',
		// 'store'  => 'redis',
	],

	/*
    |--------------------------------------------------------------------------
    | Autoloaded Service Providers
    |--------------------------------------------------------------------------
    |
    | The service providers listed here will be automatically loaded on the
    | request to your application. Feel free to add your own services to
    | this array to grant expanded functionality to your applications.
    |
    */

	'providers' => ServiceProvider::defaultProviders()->merge([
		/*
         * Package Service Providers...
         */

		/*
         * Application Service Providers...
         */
		App\Providers\AppServiceProvider::class,
		App\Providers\AuthServiceProvider::class,
		// App\Providers\BroadcastServiceProvider::class,
		App\Providers\EventServiceProvider::class,
		App\Providers\RouteServiceProvider::class,
		Barryvdh\Debugbar\ServiceProvider::class,
	])->toArray(),

	/*
    |--------------------------------------------------------------------------
    | Class Aliases
    |--------------------------------------------------------------------------
    |
    | This array of class aliases will be registered when this application
    | is started. However, feel free to register as many as you wish as
    | the aliases are "lazy" loaded so they don't hinder performance.
    |
    */

	'aliases' => Facade::defaultAliases()->merge([
		// 'Example' => App\Facades\Example::class,
		'Debugbar' => Barryvdh\Debugbar\Facades\Debugbar::class,
	])->toArray(),

	/*
    |--------------------------------------------------------------------------
    | NOC Passcode
    |--------------------------------------------------------------------------
    |
    | Passcode untuk autentikasi koneksi ke semua mikrotik
    | Hanya boleh dipegang oleh NOC/Teknisi Jaringan
    | Semua Api membutuhkan code ini
    |
    */

	'noc_passcode' => env('NOC_PASSCODE', '12345678'),

	/*
		|--------------------------------------------------------------------------
		| Server
		|--------------------------------------------------------------------------
		*/

	'server_url'                => env('SERVER_URL'),
	'server_token_url'          => env('SERVER_TOKEN_URL'),
	'client_id'                 => env('CLIENT_ID'),
	'client_secret'             => env('CLIENT_SECRET'),

	'whatsapp_client_id'        => env('WHATSAPP_CLIENT_ID'),
	'wagserver_endpoint_url'    => env('WAGSERVER_ENDPOINT_URL'),
	'whatsapp_agent_code'       => env('WHATSAPP_AGENT_CODE'),
	'whatsapp_max_limit_number' => env('WHATSAPP_MAX_LIMIT_NUMBER'),
	'whatsapp_testing_number'   => env('WHATSAPP_TESTING_NUMBER'),

	'error_msg'                 => env('SYSTEM_ERROR_MESSAGE', ''),

	'ciphering'                 => env('CIPHERING', ''),
	'encryption_iv'             => env('ENCRYPTION_IV', ''),

	'mybills_entrypoint'        => env('MYBILLS_ENTRYPOINT', ''),

];
