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

    public function create(request $request)
    {
        $data = new proyek();
        $data->nik = $request->input('nik');
        $data->petugas = $request->input('petugas');
        $data->proyek = $request->input('proyek');
        $data->lokasi = $request->input('lokasi');
        $data->deadline = $request->input('deadline');

        $data->save();
        echo "<h3>Data proyek </h3>";

        return response()-> json($data);
    }

    public function show($id)
    {
        $data = proyek::find($id);
        return response()-> json($data);
    }

    public function update(request $request, $id)
    {
        $data = proyek::find($id);
        $data->proyek = $request->input('proyek');
        $data->lokasi = $request->input('lokasi');
        $data->start = $request->input('start');
        $data->deadline = $request->input('deadline');

        $data->save();
        echo "<h3>data proyek berhasil diubah</h3>";

        return response()-> json($data);
    }

    public function destroy($id)
    {
        $data = proyek::find($id);
        $data->delete();

        return response()-> json('data berhasil terhapus');
    }
}