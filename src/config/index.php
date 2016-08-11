
<?php
// Silex documentation: http://silex.sensiolabs.org/doc/

require_once __DIR__.'/../../vendor/autoload.php';

$app = new Silex\Application();

$app['debug'] = true;

/* SQLite config

TODO: Add a users table to sqlite db
*/

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'   => 'pdo_sqlite',
        'path'     => __DIR__.'/../app.db',
    ),
));

// Twig template engine config
$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));

$app->register(new Silex\Provider\ServiceControllerServiceProvider());

$app->register(new Silex\Provider\SessionServiceProvider());
$app->register(new Silex\Provider\UrlGeneratorServiceProvider());

?>