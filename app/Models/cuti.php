<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cuti extends Model
{
    use HasFactory;
        /**
     * fillable
     * 
     * @var array
    */
    protected $fillable = [
        'nik',
        'mulai',
        'selesai',
        'jenis',
    ];
    protected function nik():Attribute
    {
        return Attribute::make(
            get:fn($nik)=>('/storage/cuti/' .$nik),
        );
    }
}
