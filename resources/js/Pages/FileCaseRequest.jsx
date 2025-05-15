import React from 'react';
import { usePage } from '@inertiajs/react';

export default function BarangayComplaintRequestForm() {
  const { allComplaintNames } = usePage().props;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Request Barangay Complaint Meeting</h2>

        <label className="block mb-2">Complaint Category</label>
        <select
          name="complaintCategory"
          className="w-full p-2 border rounded mb-4"
          required
        >
          <option value="" disabled>-- Please Select --</option>
          {allComplaintNames.map((complaint, index) => (
            <option key={index} value={complaint}>
              {complaint}
            </option>
          ))}
        </select>

        <form className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Complaint Details</label>
            <textarea
              name="complaintDetails"
              rows="5"
              className="w-full p-3 border rounded-lg border-gray-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Submit Request for Meeting
          </button>
        </form>
      </div>
    </div>
  );
}
