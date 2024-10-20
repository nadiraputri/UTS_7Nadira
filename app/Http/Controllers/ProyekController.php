<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\proyek;
use App\Http\Controllers\Controller;

class ProyekController extends Controller
{
    
    public function index()
    {
        $data = Proyek::all();

        return response()->json($data);
    }

}