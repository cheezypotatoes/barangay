<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Organizations extends Model
{
    use HasFactory;
    //
    protected $fillable = [
        'user_id',
        'organization_name',
        'status',
    ];
}
