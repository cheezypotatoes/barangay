<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CedulaPayment extends Model
{
    use HasFactory;

    protected $table = 'cedula_payments';

    // Mass assignable fields
    protected $fillable = [
        'resident_id',
        'payment',
        'gcash_referral_code',
        'status',
    ];

    /**
     * Define relationship to Resident model
     */
    public function resident()
    {
        return $this->belongsTo(Residents::class);
    }
}
