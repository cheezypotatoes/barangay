<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Residents extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'last_name',
        'first_name',
        'middle_name',
        'name_extension',
        'gender',
        'birth_date',
        'civil_status',
        'religion',
        'ethnicity',
        'blood_type',
        'year_started_staying',
        'status_of_employment',
        'monthly_gross_income',
        'pension',
        
    ];

    
}
