<?php

namespace App\Http\Controllers;
use App\Models\Residents;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ShowResidentsController extends Controller
{
    //
    public function show() {
        $residents = Residents::all() -> toArray();

       
        
    
        return Inertia::render('ShowResidents', [
            'residents' => $residents,
        ]);
    }


}
