<?php

use Illuminate\Support\Facades\Route;

Route::any('/', function(){
    return view('welcome');
});

Route::any('/{vue_capture?}', function(){
    return view('welcome');
})->where('vue_capture', '[\/\w\.-]*');

