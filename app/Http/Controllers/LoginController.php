<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    
    public function show()
    {
        return inertia('Index');
    }



    //
    public function Login(LoginRequest $request) {

        $credentials = $request->validated();

        // Attempt to authenticate user
        if (Auth::attempt(['email' => $credentials['email'], 'password' => $credentials['password']])) {
            // Regenerate session to prevent session fixation attacks
            $request->session()->regenerate();
           
            return redirect()->intended(default: '/dashboard');
        }

        return back()->withErrors(provider: ['error' => 'Invalid credentials. Please try again.']);

    }
}
