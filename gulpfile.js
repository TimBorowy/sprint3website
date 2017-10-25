var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

 /* laravel elixir config in "laravel-elixir/dist/Config.js" must be replaced with elixir-config.js that can be found in the root dir*/

elixir(function(mix) {
    mix.sass([
    	'./css/style.scss',
    	'./css/font-awesome-4.7.0/scss/font-awesome.scss',
    	'./css/lity.min.css',
	]).copy('./css/font-awesome-4.7.0/fonts', 'public/fonts/font-awesome');

	mix.scripts([
		'./node_modules/jquery/dist/jquery.js',
		'/js/lity.min.js',
		'/js/javascript.js',
		
	]);
});