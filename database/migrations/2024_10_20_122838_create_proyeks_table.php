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
        Schema::create('proyeks', function (Blueprint $table) {
            $table->id();
            $table->integer(column: 'nik');
            $table->string(column: 'petugas');
            $table->string(column: 'proyek');
            $table->string(column: 'lokasi');
            $table->Date(column: 'deadline');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyeks');
    }
};
