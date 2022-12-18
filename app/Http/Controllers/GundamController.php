<?php

namespace App\Http\Controllers;

use App\Models\Gundam;
use App\Http\Requests\StoreGundamRequest;
use App\Http\Requests\UpdateGundamRequest;

class GundamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreGundamRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGundamRequest $request)
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
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Gundam  $gundam
     * @return \Illuminate\Http\Response
     */
    public function edit(Gundam $gundam)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateGundamRequest  $request
     * @param  \App\Models\Gundam  $gundam
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGundamRequest $request, Gundam $gundam)
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
