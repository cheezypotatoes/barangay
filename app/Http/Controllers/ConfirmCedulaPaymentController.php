<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Residents;
use Inertia\Inertia;


class ConfirmCedulaPaymentController extends Controller
{
    //
    public function show() {

        return Inertia::render('ConfirmCedulaPayment', []);
    }
}
