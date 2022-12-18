<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\Gundam::factory()->create([
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
            "asal" => "Lampung",
            "url" => "https://images.unsplash.com/photo-1598541264502-84dc6aa2fb87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        ]);
        \App\Models\Gundam::factory()->create([
            'name' => "RX-0 Unicorn",
            'penilaian' => mt_rand(1, 10),
            'terjual' => mt_rand(1, 100),
            'harga' => 1000000,
            'deskripsi' => "Lorem consequat irure irure voluptate do. Reprehenderit ex nulla cillum amet. Laborum fugiat eu pariatur ut veniam Lorem qui aliquip labore tempor consequat consequat fugiat exercitation. Deserunt commodo elit elit aute. Ipsum consectetur esse qui officia.",
            'merek' => 'Suzuki',
            'bahan' => 'Aluminium',
            "berat" => 1.3,
            "dimensi" => "3x4",
            "stok" => mt_rand(1, 50),
            "asal" => "Lampung",
            "url" => "https://images.unsplash.com/photo-1626276264267-1f861ffa1486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        ]);
        \App\Models\Gundam::factory()->create([
            'name' => "RX-93-v2-Hi-v",
            'penilaian' => mt_rand(1, 10),
            'terjual' => mt_rand(1, 100),
            'harga' => 1000000,
            'deskripsi' => "Lorem consequat irure irure voluptate do. Reprehenderit ex nulla cillum amet. Laborum fugiat eu pariatur ut veniam Lorem qui aliquip labore tempor consequat consequat fugiat exercitation. Deserunt commodo elit elit aute. Ipsum consectetur esse qui officia.",
            'merek' => 'Suzuki',
            'bahan' => 'Aluminium',
            "berat" => 1.3,
            "dimensi" => "3x4",
            "stok" => mt_rand(1, 50),
            "asal" => "Lampung",
            "url" => "https://images.unsplash.com/photo-1612400201050-25004ce3142f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
        ]);
        \App\Models\Gundam::factory()->create([
            'name' => "Double X",
            'penilaian' => mt_rand(1, 10),
            'terjual' => mt_rand(1, 100),
            'harga' => 1000000,
            'deskripsi' => "Lorem consequat irure irure voluptate do. Reprehenderit ex nulla cillum amet. Laborum fugiat eu pariatur ut veniam Lorem qui aliquip labore tempor consequat consequat fugiat exercitation. Deserunt commodo elit elit aute. Ipsum consectetur esse qui officia.",
            'merek' => 'Suzuki',
            'bahan' => 'Aluminium',
            "berat" => 1.3,
            "dimensi" => "3x4",
            "stok" => mt_rand(1, 50),
            "asal" => "Lampung",
            "url" => "https://images.unsplash.com/photo-1549512329-31d4e8831543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        ]);
        \App\Models\Gundam::factory()->create([
            'name' => "Age-3",
            'penilaian' => mt_rand(1, 10),
            'terjual' => mt_rand(1, 100),
            'harga' => 1000000,
            'deskripsi' => "Lorem consequat irure irure voluptate do. Reprehenderit ex nulla cillum amet. Laborum fugiat eu pariatur ut veniam Lorem qui aliquip labore tempor consequat consequat fugiat exercitation. Deserunt commodo elit elit aute. Ipsum consectetur esse qui officia.",
            'merek' => 'Suzuki',
            'bahan' => 'Aluminium',
            "berat" => 1.3,
            "dimensi" => "3x4",
            "stok" => mt_rand(1, 50),
            "asal" => "Lampung",
            "url" => "https://images.unsplash.com/photo-1549512329-31d4e8831543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        ]);
    }
}
