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

    public function create(request $request)
    {
        $data = new Absensi();
        $data->karyawan_id = $request->input('karyawan_id');
        $data->tanggal = $request->input('tanggal');
        $data->masuk = $request->input('masuk');
        $data->keluar = $request->input('keluar');
        $data->keterangan = $request->input('keterangan');

        $data->save();
        echo "<h3>Data Absensi</h3>";

        return response()-> json($data);
    }

    public function show($id)
    {
        $data = Absensi::find($id);
        return response()-> json($data);
    }

    public function update(request $request, $id)
    {
        $data = Karyawan::find($id);
        $data->nik = $request->input('nik');
        $data->tanggal = $request->input('tanggal');
        $data->masuk = $request->input('masuk');
        $data->keluar = $request->input('keluar');
        $data->keterangan = $request->input('keterangan');

        $data->save();
        echo "<h3>Absensi berhasil diubah</h3>";

        return response()-> json($data);
    }

    public function destroy($id)
    {
        $data = Absensi::find($id);
        $data->delete();

        return response()-> json('data berhasil terhapus');
    }
}


