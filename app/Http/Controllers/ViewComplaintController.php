<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Complaint;

class ViewComplaintController extends Controller
{
    public function show(Request $request)
    {
        // Get the complaint ID from query parameters
        $complaintId = $request->query('id');

        if (!$complaintId) {
            abort(404, 'Complaint ID is required.');
        }

        // Fetch the complaint with related category and resident
        $complaint = Complaint::select([
                'id',
                'category_id',
                'resident_id',
                'message',
                'schedule_date',
                'status',
                'created_at',
                'updated_at'
            ])
            ->with(['category', 'resident'])
            ->where('id', $complaintId)
            ->first();

        if (!$complaint) {
            abort(404, 'Complaint not found.');
        }

        // Prepare the data array
        $result = [
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

        

        // Return the data to the Inertia component
        return inertia('ViewComplaint', ['complaint' => $result]);
    }
}