<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JadwalCuti extends Model
{
    use HasFactory;
    /**
     * fillable
     * 
     * @var array
    */
    protected $fillable = [
        'nik',
        'tanggal mulai',
        'tanggal selesai',
        'keterangan',
    ];
    protected function JadwalCuti():Attribute
    {
        return Attribute::make(
            get:fn($JadwalCuti)=>('/storage/Jadwal_Cuti/' .$JadwalCuti),
        );
    }
}