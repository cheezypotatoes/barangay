<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Residents;

class DashboardController extends Controller
{
    //
    public function show()
    {
      
        
        $alreadyRegistered = Residents::where('user_id', auth()->user()->id)->exists();
        $isAdmin = User::where('id', auth()->user()->id)->value('is_admin');
        if ($isAdmin == 1){
            $isAdmin = true;
        } else {
            $isAdmin = false;
        }

        $usersCount = User::count();
        $residentsCount = Residents::count();
        return Inertia::render('Dashboard', [
            'userCount' => $usersCount,
            'residentsCount' => $residentsCount,
            'alreadyRegistered' => $alreadyRegistered,
            'isAdmin' => $isAdmin,
            
            
        ]);
    }
}
