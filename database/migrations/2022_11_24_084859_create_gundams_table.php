<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gundams', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('penilaian');
            $table->integer('terjual');
            $table->integer('harga');
            $table->longText('deskripsi');
            $table->string('merek');
            $table->string('bahan');
            $table->double('berat');
            $table->string('dimensi');
            $table->integer('stok');
            $table->string('asal');
            $table->string('url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gundam');
    }
};
