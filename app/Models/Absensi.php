<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absensi extends Model
{
    use HasFactory;
    /**
     * fillable
     * 
     * @var array
    */
    protected $fillable = [
        'nik',
        'tanggal',
        'jam masuk',
        'jam keluar',
        'keterangan',
    ];
    protected function absensi():Attribute
    {
        return Attribute::make(
            get:fn($absensi)=>('/storage/absensi/' .$absensi),
        );
    }
}
