# Laravel Laundry Web App Edition ▲

## Introduction

This repository is a portfolio of Laravel web application.

## Official Documentation

### Installation

First go inside project root folder, rename .env.example to .env,
And then create mysql database with name idomerchant_laundry, please change db username and password in .env file according to your mysql settings.

Open terminal and run this command:

```bash
composer install
npm install

php artisan key:generate
php artisan migrate
```

Before serve the project, you need to clear config, cache, etc, by run this on terminal.

```bash
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan route:clear
php artisan config:cache
php artisan optimize:clear
composer dump-autoload
```

To serve the project, run this command:

```bash
php artisan serve
```

Open another terminal, and run this command:

```bash
npm run dev
```

### Named Routes

For convenience, [Ziggy](https://github.com/tighten/ziggy#spas-or-separate-repos) may be used to reference your Laravel application's named route URLs from your React application.

## Contributing

Thank you for considering contributing to Breeze Next! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

Please review [our security policy](https://github.com/laravel/breeze-next/security/policy) on how to report security vulnerabilities.
