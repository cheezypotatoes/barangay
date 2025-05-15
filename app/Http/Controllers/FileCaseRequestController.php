<?php

namespace App\Http\Controllers;
use App\Models\ComplaintCategory;
use Illuminate\Http\Request;
use App\Models\Complaint;
use App\Models\Residents;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class FileCaseRequestController extends Controller
{
    //
    public function show()
    {
        $UserData = Residents::where('user_id', auth()->id())->get()->toArray();
        
        if (count($UserData) == 0){
            return redirect('/registerAsResident');
        }
        
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


        
        $resident = Residents::where('user_id', Auth::id())->first();
        
        


        Complaint::create([
            'category_id' => $category->id,
            'resident_id' => $resident->id, 
            'message' => $validated['description'],
            'schedule_date' => null,
            'status' => "Pending",
        ]);

        return redirect('/FileCase')->with('message', 'Complaint submitted successfully.');
    }

}
