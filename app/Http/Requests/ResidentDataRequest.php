<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ResidentDataRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'middle_name' => 'required|string',
            'name_extension' => 'required|string',
            'gender' => 'required|string',
            
            'birth_date' => 'required|string',
            'religion' => 'required|string',
            'ethnicity' => 'required|string',
            'blood_type' => 'required|string',
            
            'civil_status' => 'required|string',
            'year_started_staying' => 'required|string',
            'status_of_employment' => 'required|string',
            'pension' => 'required|string',
        ];
    }

    public function validatedData(): array
    {
        $validated = $this->validated();

        return [
            'first_name' => $validated['first_name'],
            'last_name' => $validated['last_name'],
            'middle_name' => $validated['middle_name'],
            'name_extension' => $validated['name_extension'],
            'gender' => $validated['gender'],

            'birth_date' => date('Y-m-d', strtotime($validated['birth_date'])), // Convert to Date (YYYY-MM-DD)
            'religion' => $validated['religion'],
            'ethnicity' => $validated['ethnicity'],
            'blood_type' => $validated['blood_type'],

            'civil_status' => $validated['civil_status'],
            'year_started_staying' => (int) $validated['year_started_staying'], 
            'status_of_employment' => $validated['status_of_employment'],
            'pension' => number_format((float) preg_replace('/[^0-9.]/', '', $validated['pension']), 2, '.', ''),

        ];  
    }
}
