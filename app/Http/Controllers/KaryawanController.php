<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Karyawan;
use App\Http\Controllers\Controller;

class KaryawanController extends Controller
{
    
    public function index()
    {
        $data = Karyawan::all();

        return response()->json($data);
    }

}

