<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileCaseController extends Controller
{
    //
    public function show()
    {
        return inertia('FileCase');
    }
}
