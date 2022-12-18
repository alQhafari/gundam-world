<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gundam extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'penilaian',
        'terjual',
        'harga',
        'deskripsi',
        'merek',
        'bahan',
        'berat',
        'dimensi',
        'stok',
        'asal',
        'url'
    ];
    // public function routeNotificationForTelegram()
    // {
    //     return 993344556;
    // }
    // public function Transaksi()
    // {
    //     return $this->hasMany(Transaksi::class);
    // }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        '',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        '',
    ];
}
