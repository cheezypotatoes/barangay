<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Residents;
use App\Models\CedulaPayment;

class PayCedulaFormController extends Controller
{
    //
    public function show() {
        return Inertia::render('PayCedulaForm', []);
    }


    public function pay(Request $request) {
            $request->validate([
            'referralCode' => 'nullable|string|max:255',
            'amount' => 'required|numeric|min:1',
        ]);

        $resident = Residents::where('user_id', auth()->id())->firstOrFail();

        CedulaPayment::create([
            'resident_id' => $resident->id,
            'payment' => $request->amount,
            'gcash_referral_code' => $request->referralCode,
            'status' => 'pending',
        ]);


        return redirect()->route('dashboard')->with('message', 'Payment submitted successfully.');
    }
}
