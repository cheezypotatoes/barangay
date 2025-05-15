<?php

namespace App\Http\Controllers;
use App\Models\ComplaintCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FileCaseController extends Controller
{
    //
    public function show()
    {        
        return Inertia::render('FileCase', []);
    }
}
