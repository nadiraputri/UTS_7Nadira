<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lemburs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('karyawan_id')->contained('karyawans');
            $table->Date(column: 'tanggal');
            $table->Time(column: 'mulai');
            $table->Time(column: 'selesai');
            $table->integer(column: 'jumlah');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lemburs');
    }
};
