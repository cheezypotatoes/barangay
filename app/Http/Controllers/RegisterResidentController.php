<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResidentDataRequest;
use Inertia\Inertia;
use App\Models\Residents;

class RegisterResidentController extends Controller
{
    public function RegisterResident(ResidentDataRequest $request) {
        $convertedData = $request->validatedData();
        $convertedData['user_id'] = auth()->id();
        
        Residents::create($convertedData);

        return redirect('/');
    }

    public function Show() {
        $alreadyRegistered = Residents::where('user_id', auth()->user()->id)->exists();

        if($alreadyRegistered) {
            return redirect('/dashboard');
        }

        return Inertia::render('RegisterAsResident');
    }
}
