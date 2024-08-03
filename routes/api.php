<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\EmployeeController;

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class,'login']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('register', [AuthController::class,'register']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);

});

Route::apiResource('/employee',EmployeeController::class);