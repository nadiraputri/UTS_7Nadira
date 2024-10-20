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
Route::resource('/Absensi', AbsensiController::class);
Route::resource('/cuti', CutiController::class);
Route::resource('/lembur', LemburController::class);
Route::resource('/proyek', ProyekController::class);