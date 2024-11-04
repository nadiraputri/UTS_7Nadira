<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lembur extends Model
{
    use HasFactory;
        /**
     * fillable
     * 
     * @var array
    */
    protected $fillable = [
        'karyawan_id',
        'tanggal',
        'mulai',
        'selesai',
        'jumlah',
    ];
    protected function nik():Attribute
    {
        return Attribute::make(
            get:fn($nik)=>('/storage/lembur/' .$nik),
        );
    }
}
