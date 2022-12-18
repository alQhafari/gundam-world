<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Transaksi extends Model
{
    use HasFactory, Notifiable;
    protected $fillable = [
        'user_id'
    ];
    public function routeNotificationForTelegram()
    {
        return 5452510952;
    }
    // public function Gundam()
    // {
    //     return $this->belongsTo(Gundam::class);
    // }
}
