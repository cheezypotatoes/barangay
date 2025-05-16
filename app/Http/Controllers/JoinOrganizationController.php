<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Organizations;
use App\Models\Residents;

class JoinOrganizationController extends Controller
{
    //
    public function show()
    {
        $UserData = Residents::where('user_id', auth()->id())->get()->toArray();
        
        if (count($UserData) == 0){
            return redirect('/registerAsResident');
        }
        return inertia('JoinOrganization');
    }

    public function join(Request $request)
    {

        $userId = Auth::id();
        $organizationUserWantsTOJoin = $request->toArray()['organizationSelected'];

        $userRow = Organizations::where('user_id', $userId)
            ->where('organization_name', $organizationUserWantsTOJoin)
            ->first();

        if (!$userRow) {
     
            Organizations::create([
                'organization_name' => $organizationUserWantsTOJoin,
                'user_id' => $userId,
                'status' => 'pending',
                ]
            );
            return back()->with('success', 'Successfully requested to join organization.');
        }

        return back()->withErrors('error', 'You have already requested to join or are a member.');      
    }
}
