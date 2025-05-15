<?php

namespace App\Http\Controllers;
use App\Models\Residents;
use App\Models\Complaint;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class FileCaseController extends Controller
{
    //
    public function show()
    {        
        $UserData = Residents::where('user_id', auth()->id())->get()->toArray();
        
        if (count($UserData) == 0){
            return redirect('/registerAsResident');
        }

        $resident_id = Residents::where('user_id', Auth::id())->first();
      
        
        $userComplaints = Complaint::select([
            'id',
            'category_id',
            'resident_id',
            'message',
            'schedule_date',
            'status',
            'created_at',
            'updated_at'
        ])
        ->where('resident_id', $resident_id->id)
        ->with('category') // eager load category
        ->latest()
        ->get()
        ->map(function ($complaint) {
            return [
                'id' => $complaint->id,
                'resident_id' => $complaint->resident_id,
                'message' => $complaint->message,
                'schedule_date' => $complaint->schedule_date,
                'status' => $complaint->status,
                'created_at' => $complaint->created_at,
                'updated_at' => $complaint->updated_at,
                'category_name' => $complaint->category->complaint_category_name ?? 'Unknown',
            ];
        })
        ->toArray();


        return Inertia::render('FileCase', [
            'complaints' => $userComplaints,
        ]);
    }
}
