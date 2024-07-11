<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta property="og:title" content={{ config('app.name', 'iDoBill') }}>
	<meta property="og:description" content={{ config('app.name', 'iDoBill') }}>
	<meta property="og:image" content="{{ asset('images/idobill_logo.png') }}">
	<meta property="og:url" content="https://idobill.gti.my.id">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="idobill">

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Refresh" content="3000">

	<title inertia>{{ config('app.name', 'Laravel') }}</title>

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.bunny.net">
	<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

	<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">

	<!-- Favicon -->
	<link rel="icon" href="{{ asset('favicon.ico') }}">
	<link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}" sizes="180x180">
	<link rel="icon" href="{{ asset('favicon-32x32.png') }}" type="image/png" sizes="32x32">
	<link rel="icon" href="{{ asset('favicon-16x16.png') }}" type="image/png" sizes="16x16">
	<link rel="manifest" href="{{ asset('site.webmanifest') }}">

	<!-- Scripts -->
	@routes
	@viteReactRefresh
	@vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
	@inertiaHead
</head>

<body class="font-sans antialiased">
	@inertia
</body>

</html>