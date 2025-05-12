<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class Women extends Authenticatable
{
    use HasFactory;
    protected $table = 'women';

    protected $fillable = [
        'user_id',
        'status',
    ];

}
