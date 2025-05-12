<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Organizations;

class JoinOrganizationController extends Controller
{
    //
    public function show()
    {
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
