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

    public function create(request $request)
    {
        $data = new lembur();
        $data->karyawan_id = $request->input('karyawan_id');
        $data->tanggal = $request->input('tanggal');
        $data->mulai = $request->input('mulai');
        $data->selesai = $request->input('selesai');
        $data->jumlah = $request->input('jumlah');

        $data->save();
        echo "<h3>Data Lembur karyawan</h3>";

        return response()-> json($data);
    }

    public function show($id)
    {
        $data = lembur::find($id);
        return response()-> json($data);
    }

    public function update(request $request, $id)
    {
        $data = lembur::find($id);
        $data->nik = $request->input('nik');
        $data->tanggal = $request->input('tanggal');
        $data->mulai = $request->input('mulai');
        $data->selesai = $request->input('selesai');
        $data->jumlah = $request->input('jumlah');

        $data->save();
        echo "<h3>data lembur karyawan berhasil diubah</h3>";

        return response()-> json($data);
    }

    public function destroy($id)
    {
        $data = lembur::find($id);
        $data->delete();

        return response()-> json('data berhasil terhapus');
    }
}