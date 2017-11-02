<meta charset="utf-8" />

<title>{{ project_title }}{% if package.version %} - v{{ package.version }}{% endif %}</title>
<link rel="stylesheet" href="assets/css/main.css" />
<link href="https://fonts.googleapis.com/css?family=Space+Mono|Droid+Sans+Mono" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<meta name="viewport" content="width=device-width">
<meta content="IE=edge, chrome=1" http-equiv="X-UA-Compatible">

<!-- Open Graph tags -->
<meta property="og:title" content="{{ project_title }} - SassDoc" />
<meta property="og:type" content="website" />

{% if package.description %}
<meta property="og:description" content="{{ package.description | safe }}" />
{% else %}
<meta property="og:description" content="Release the docs!" />
{% endif %}

<!-- Thanks to Sass-lang.com for the icons -->
<link href="{{ shortcutIcon.url }}" rel="shortcut icon">

<link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700|Poppins" rel="stylesheet">
{# <script src="https://use.typekit.net/akc0yri.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script> #}