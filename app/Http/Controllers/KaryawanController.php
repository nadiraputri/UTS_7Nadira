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

    public function create(request $request)
    {
        $data = new Karyawan();
        $data->nik = $request->input('nik');
        $data->nama = $request->input('nama');
        $data->departemen = $request->input('departemen');
        $data->jabatan = $request->input('jabatan');
        $data->deskripsi = $request->input('deskripsi');

        $data->save();
        echo "<h3>Data Karyawan</h3>";

        return response()-> json($data);
    }

    public function show($id)
    {
        $data = Karyawan::find($id);
        return response()-> json($data);
    }

    public function update(request $request, $id)
    {
        $data = Karyawan::find($id);
        $data->nik = $request->input('nik');
        $data->nama = $request->input('nama');
        $data->departemen = $request->input('departemen');
        $data->jabatan = $request->input('jabatan');
        $data->deskripsi = $request->input('deskripsi');

        $data->save();
        echo "<h3>Pengguna berhasil diubah</h3>";

        return response()-> json($data);
    }

    public function destroy($id)
    {
        $data = Karyawan::find($id);
        $data->delete();

        return response()-> json('data berhasil terhapus');
    }
}

