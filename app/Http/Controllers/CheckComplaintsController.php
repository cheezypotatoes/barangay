<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Complaint;
use Illuminate\Http\Request;

class CheckComplaintsController extends Controller
{
    //
    public function show()
    {

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
        ->with(['category', 'resident']) // use the correct relation name
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
                'first_name' => $complaint->resident->first_name ?? 'Unknown',
                'last_name' => $complaint->resident->last_name ?? 'Unknown',
            ];
        })
        ->toArray();
      

        $UserRow = User::where('id', auth()->id())->first()->makeVisible('is_admin')->toArray();
        

        return $UserRow['is_admin'] == 0 ? 
            redirect('/dashboard') : 
            Inertia::render('CheckComplaints', [
               "userComplaints" => $userComplaints
            ]); 
    }


    public function changeData(Request $request) {
        $id = $request->input('id');
        $scheduleDate = $request->input('schedule_date');
        $status = $request->input('status');
        
        $complaint = Complaint::find($id);
        
        if (!empty($scheduleDate)) {
        $complaint->schedule_date = $scheduleDate;
        }

        if (!empty($status)) {
            $complaint->status = $status;
        }

        $complaint->save();

        


        return redirect()->back();
    }
}
