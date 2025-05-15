<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    protected $fillable = [
        'category_id',
        'resident_id',
        'message',
        'schedule_date',
        'status',
    ];

    public function category()
    {
        return $this->belongsTo(ComplaintCategory::class);
    }

    public function resident()
    {
        return $this->belongsTo(\App\Models\Residents::class, 'resident_id');
    }
}
