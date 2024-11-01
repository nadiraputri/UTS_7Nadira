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

    public function create(request $request)
    {
        $data = new cuti();
        $data->nik = $request->input('nik');
        $data->mulai = $request->input('mulai');
        $data->selesai = $request->input('selesai');
        $data->jenis = $request->input('jenis');

        $data->save();
        echo "<h3>Jadwal cuti karyawan</h3>";

        return response()-> json($data);
    }

    public function show($id)
    {
        $data = cuti::find($id);
        return response()-> json($data);
    }

    public function update(request $request, $id)
    {
        $data = cuti::find($id);
        $data->nik = $request->input('nik');
        $data->mulai = $request->input('mulai');
        $data->selesai = $request->input('selesai');
        $data->jenis = $request->input('jenis');

        $data->save();
        echo "<h3>Jadwal Cuti berhasil diubah</h3>";

        return response()-> json($data);
    }

    public function destroy($id)
    {
        $data = cuti::find($id);
        $data->delete();

        return response()-> json('data berhasil terhapus');
    }
}