<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    protected $fillable = [
        'category_id',
        'message',
        'schedule_date',
        'status',
    ];
    
    public function category()
    {
        return $this->belongsTo(ComplaintCategory::class);
    }
}
