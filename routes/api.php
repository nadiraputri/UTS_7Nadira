<?php
use App\Http\Controllers\AbsensiController;
use App\Http\Controllers\KaryawanController;
use App\Http\Controllers\CutiController;
use App\Http\Controllers\LemburController;
use App\Http\Controllers\ProyekController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get(uri: '/', action: function (): Factory\View {
    return view('wecome');
});

Route::resource('/Karyawan', KaryawanController::class);
Route::post('/Karyawan/create',[KaryawanController::class, 'create']);
Route::get('/Karyawan/index',[KaryawanController::class, 'index']);
Route::get('/Karyawan/show/{id}',[KaryawanController::class, 'show']);
Route::delete('/Karyawan/delete/{id}',[KaryawanController::class, 'destroy']);
Route::put('/Karyawan/update/{id}',[KaryawanController::class, 'update']);


Route::resource('/Absensi', AbsensiController::class);
Route::post('/Absensi/create',[AbsensiController::class, 'create']);
Route::get('/Absensi/index',[AbsensiController::class, 'index']);
Route::get('/Absensi/show/{id}',[AbsensiController::class, 'show']);
Route::delete('/Absensi/delete/{id}',[AbsensiController::class, 'destroy']);
Route::put('/Absensi/update/{id}',[AbsensiController::class, 'update']);

Route::resource('/cuti', CutiController::class);
Route::post('/cuti/create',[CutiController::class, 'create']);
Route::get('/cuti/index',[CutiController::class, 'index']);
Route::get('/cuti/show/{id}',[CutiController::class, 'show']);
Route::delete('/cuti/delete/{id}',[CutiController::class, 'destroy']);
Route::put('/cuti/update/{id}',[CutiController::class, 'update']);


Route::resource('/lembur', LemburController::class);
Route::post('/lembur/create',[LemburController::class, 'create']);
Route::get('/lembur/index',[LemburController::class, 'index']);
Route::get('/lembur/show/{id}',[LemburController::class, 'show']);
Route::delete('/lembur/delete/{id}',[LemburController::class, 'destroy']);
Route::put('/lembur/update/{id}',[LemburController::class, 'update']);

Route::resource('/proyek', ProyekController::class);
Route::post('/proyek/create',[ProyekController::class, 'create']);
Route::get('/proyek/index',[ProyekController::class, 'index']);
Route::get('/proyek/show/{id}',[ProyekController::class, 'show']);
Route::delete('/proyek/delete/{id}',[ProyekController::class, 'destroy']);
Route::put('/proyek/update/{id}',[ProyekController::class, 'update']);