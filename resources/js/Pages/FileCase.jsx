import React, { useState } from 'react';

export default function BarangayComplaintRequestForm() {
  const [form, setForm] = useState({
    complaint: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.complaint) newErrors.complaint = 'Please describe the issue you want to request a meeting for.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log('Request submitted:', form);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Request Barangay Complaint Meeting</h2>

        {submitted ? (
          <p className="text-green-600 font-medium">
            ✅ Request submitted successfully. We will schedule a meeting with you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700">Complaint Details</label>
              <textarea
                name="complaint"
                rows="5"
                value={form.complaint}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${
                  errors.complaint ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {errors.complaint && <p className="text-red-500 text-sm">{errors.complaint}</p>}
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Submit Request for Meeting
            </button>
          </form>
        )}
      </div>
    </div>
  );
}