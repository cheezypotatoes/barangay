<?php

namespace App\Http\Controllers;
use App\Models\ComplaintCategory;
use Illuminate\Http\Request;
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

}
