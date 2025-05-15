<?php

namespace App\Http\Controllers;
use App\Models\Residents;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FileCaseController extends Controller
{
    //
    public function show()
    {        
        $UserData = Residents::where('user_id', auth()->id())->get()->toArray();
        
        if (count($UserData) == 0){
            return redirect('/registerAsResident');
        }
        return Inertia::render('FileCase', []);
    }
}
