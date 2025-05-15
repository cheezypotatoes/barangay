<?php

namespace App\Http\Controllers;

use App\Models\Residents; 
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\CedulaPayment;

use Carbon\Carbon;

class CedulaPaymentController extends Controller
{
    public function show(Request $request)
    {
      
        $resident = Residents::where('user_id', auth()->id())->first();

        if (!$resident) {
            return redirect('/registerAsResident');
        }

        $birthDate = Carbon::parse($resident->birth_date);
        $age = $birthDate->diffInYears(now());

        $cantMakeMoneyStatuses = [
            "Unemployed", "Student", "Homemaker", "Disabled", "Underemployed",
            "On leave", "Volunteering", "Intern/Apprentice", "Temporarily laid off"
        ];
       
        if (in_array($resident->status_of_employment, $cantMakeMoneyStatuses) || $age < 18) {
            
    
            return redirect()->route('dashboard')->with('message', 'Access denied: You must be employed and at least 18 years old.');
        }

        $totalPayments = CedulaPayment::where('resident_id', $resident->id)
                              ->where('status', 'completed')
                              ->sum('payment');
        $pension = $resident->pension;

        

        return Inertia::render('PayCedula', [
            'totalPayments' => $totalPayments,
            'pension' => $pension,
        ]);
    }
}