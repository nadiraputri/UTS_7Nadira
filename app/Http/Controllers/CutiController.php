<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\cuti;
use App\Http\Controllers\Controller;

class cutiController extends Controller
{
    
    public function index()
    {
        $data = cuti::all();

        return response()->json($data);
    }

}