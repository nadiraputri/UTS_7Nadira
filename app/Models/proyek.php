<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class proyek extends Model
{
    use HasFactory;
    /**
     * fillable
     * 
     * @var array
    */
    protected $fillable = [
        'nik',
        'petugas',
        'proyek',
        'lokasi',
        'deadline',
    ];
    protected function nik():Attribute
    {
        return Attribute::make(
            get:fn($nik)=>('/storage/proyek/' .$nik),
        );
    }
}
