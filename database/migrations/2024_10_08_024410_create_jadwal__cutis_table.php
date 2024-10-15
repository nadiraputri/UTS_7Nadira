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
        Schema::create('jadwal__cutis', function (Blueprint $table) {
            $table->id();
            $table->integer(column: 'nik');
            $table->date(column: 'tanggal mulai');
            $table->date(column: 'tanggal selesai');
            $table->string(column: 'keterangan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jadwal__cutis');
    }
};
