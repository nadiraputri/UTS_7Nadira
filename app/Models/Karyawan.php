<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Karyawan extends Model
{
    use HasFactory;
    /**
     * fillable
     * 
     * @var array
    */
    protected $fillable = [
        'nik',
        'nama',
        'departemen',
        'jabatan',
        'alamat',
        'deskripsi',
    ];
    protected function nik():Attribute
    {
        return Attribute::make(
            get:fn($nik)=>('/storage/Karyawan/' .$nik),
        );
    }
}
