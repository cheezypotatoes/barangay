import React from 'react';
import { useForm, usePage } from '@inertiajs/react';

export default function BarangayComplaintRequestForm() {
  const { allComplaintNames } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    category: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/FileCaseRequest');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Request Barangay Complaint Meeting</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category */}
          <div>
            <label className="block mb-2">Complaint Category</label>
            <select
              name="category"
              value={data.category}
              onChange={(e) => setData('category', e.target.value)}
              className="w-full p-2 border rounded mb-1"
              required
            >
              <option value="" disabled>-- Please Select --</option>
              {allComplaintNames.map((complaint, index) => (
                <option key={index} value={complaint}>
                  {complaint}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700">Complaint Details</label>
            <textarea
              name="description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              rows="5"
              className="w-full p-3 border rounded-lg border-gray-300"
              required
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            disabled={processing}
          >
            Submit Request for Meeting
          </button>
        </form>
      </div>
    </div>
  );
}
