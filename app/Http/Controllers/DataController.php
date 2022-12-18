<?php

namespace App\Http\Controllers;

use App\Models\Gundam;
use App\Models\Transaksi;
use Illuminate\Http\Request;
use App\Notifications\LaravelTelegramNotification;

class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gundam = Gundam::all();
        return $gundam;
    }
    public function getSingleProduct($id)
    {
        $gundam = Gundam::find($id);
        return $gundam;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Gundam  $gundam
     * @return \Illuminate\Http\Response
     */
    public function show(Gundam $gundam)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Gundam  $gundam
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Gundam $gundam)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Gundam  $gundam
     * @return \Illuminate\Http\Response
     */
    public function destroy(Gundam $gundam)
    {
        //
    }
}
