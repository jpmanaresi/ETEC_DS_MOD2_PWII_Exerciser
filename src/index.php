<?php

require '../vendor/autoload.php';

use Monolog\Logger; 
use Monolog\Handler\StreamHandler;

$logger = new Logger ('nomedocanal');
$logger->pushHandler(new StreamHandler(__DIR__.'/App.log',Logger::DEBUG));


$logger->info('Esta é uma string de info...');
$logger->warning('Isto é um warning...');
$logger->error('Esta é uma msg de erro.');

$variable = array(1,17,"hello", null);
var_dump ($variable);
