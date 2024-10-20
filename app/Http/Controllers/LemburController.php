<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\lembur;
use App\Http\Controllers\Controller;

class LemburController extends Controller
{
    
    public function index()
    {
        $data = Lembur::all();

        return response()->json($data);
    }

}