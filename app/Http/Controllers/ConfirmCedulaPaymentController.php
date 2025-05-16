<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Residents;
use App\Models\CedulaPayment;
use Inertia\Inertia;


class ConfirmCedulaPaymentController extends Controller
{
    //
    public function show() {
        $payments = CedulaPayment::with('resident:id,id,first_name,last_name')->get();

        return Inertia::render('ConfirmCedulaPayment', [
            'payments' => $payments
        ]);
    }

    public function changePaymentStatus(Request $request)
    {
       

       
        $payment = CedulaPayment::find($request->id);
        $payment->status = $request->status;

       
        $payment->save();

        return redirect()->back();
    }
}
