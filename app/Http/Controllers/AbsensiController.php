<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Absensi;
use App\Http\Controllers\Controller;

class AbsensiController extends Controller
{
    
    public function index()
    {
        $data = Absensi::all();

        return response()->json($data);
    }

}


