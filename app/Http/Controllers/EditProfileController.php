<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Residents;
use Inertia\Inertia;
use App\Http\Requests\ResidentDataRequest;


class EditProfileController extends Controller
{
    //
    public function Show(){
        $UserData = Residents::where('user_id', auth()->id())->get()->toArray();
        
        if (count($UserData) == 0){
            return redirect('/registerAsResident');
        }
        
        return Inertia::render('EditProfile', [
            'UserData' => $UserData
        ]);
    }
    public function Edit(ResidentDataRequest $request){
        
        $UserId = auth()->id();
 
        $UserRow = Residents::where('user_id', $UserId)->first();
    
        if ($UserRow) {
            $convertedData = $request->validated();
           
            // Just to be sure that the user_id is not changed
            $convertedData['user_id'] = $UserId;
    
            $UserRow->update($convertedData);

        }
        
        return redirect('/');

    }
}
