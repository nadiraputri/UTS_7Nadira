<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JadwalCuti;
use App\Http\Controllers\Controller;

class JadwalCutiController extends Controller
{
    
    public function index()
    {
        $data = Jadwal_Cuti::all();

        return response()->json($data);
    }

}


