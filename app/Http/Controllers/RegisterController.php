<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegistrationRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse;


class RegisterController extends Controller
{

    public function register(RegistrationRequest $request)
    {
        // If validation passes, get the validated data:
        $validated = $request->validated();

        // Create the user:
        User::create([
            'name'     => $validated['name'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
            'isAdmin' => false,
        ]);

        return redirect('/login');
    }
}
