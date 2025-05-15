<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComplaintCategory extends Model
{
    /** @use HasFactory<\Database\Factories\ComplaintCategoryFactory> */
    use HasFactory;
    protected $fillable = ['complaint_category_name'];
}
