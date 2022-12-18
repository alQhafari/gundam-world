<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Ramsey\Uuid\Type\Integer;

class GundamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('gundam')->insert([
            'name' => "Destiny Gundam",
            'penilaian' => mt_rand(1, 10),
            'terjual' => mt_rand(1, 100),
            'harga' => 1000000,
            'deskripsi' => "Lorem consequat irure irure voluptate do. Reprehenderit ex nulla cillum amet. Laborum fugiat eu pariatur ut veniam Lorem qui aliquip labore tempor consequat consequat fugiat exercitation. Deserunt commodo elit elit aute. Ipsum consectetur esse qui officia.",
            'merek' => 'Suzuki',
            'bahan' => 'Aluminium',
            "berat" => 1.3,
            "dimensi" => "3x4",
            "stok" => mt_rand(1, 50),
            "asal" => "Lampung"
        ]);
    }
}
