<?php

namespace App\Http\Controllers;
use App\Models\ComplaintCategory;
use Illuminate\Http\Request;
use App\Models\Complaint;
use Inertia\Inertia;

class FileCaseRequestController extends Controller
{
    //
    public function show()
    {
        $allComplaintNames = ComplaintCategory::pluck('complaint_category_name');

        return Inertia::render('FileCaseRequest', [
            'allComplaintNames' => $allComplaintNames
        ]);
    }


    public function submit(Request $request)
    {
            $validated = $request->validate([
            'category' => 'required|string',
            'description' => 'required|string|min:5',
        ]);

        $category = ComplaintCategory::where('complaint_category_name', $validated['category'])->first();


        Complaint::create([
            'category_id' => $category->id,
            'message' => $validated['description'],
            'schedule_date' => null,
            'status' => "Pending",
        ]);

        return redirect('/FileCase')->with('message', 'Complaint submitted successfully.');
        
    }

}
