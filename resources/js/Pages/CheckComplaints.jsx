import { useEffect, useState } from 'react';
import { usePage, useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react'



export default function CheckComplaints() {
  const { userComplaints } = usePage().props;

  const [complaints, setComplaints] = useState([]);

  const { data, setData, post, processing, errors } = useForm({
    id: '',
    schedule_date: '',
    status: '',
    })
     

  useEffect(() => {
    const complaintsWithFullName = userComplaints.map((complaint) => ({
      ...complaint,
      user_full_name: `${complaint.first_name ?? ''} ${complaint.last_name ?? ''}`.trim(),
    }));

    setComplaints(complaintsWithFullName);
  }, [userComplaints]);

  const updateScheduleDate = (complaintId, newDate) => {
    data.id = complaintId
    data.schedule_date = newDate
    changeDate(complaintId, newDate)
    
 
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === complaintId
          ? { ...complaint, schedule_date: newDate }
          : complaint
      )
    );
  };

  const toggleStatus = (complaintId) => {
    const complaint = complaints.find((c) => c.id === complaintId);

    const newStatus = complaint.status === 'Pending' ? 'Resolved' : 'Pending';
    
   
    
    changeStatus(complaintId, newStatus)
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) =>
        complaint.id === complaintId
          ? {
              ...complaint,
              status: complaint.status === 'Pending' ? 'Resolved' : 'Pending',
            }
          : complaint
      )
    );
  };


  const changeDate = (complaintId, newDate) => {
    router.post('/checkComplaints', {
      id: complaintId,
      schedule_date: newDate,
    }, {
      preserveScroll: true,
      preserveState: true,
    })
    
  }

    const changeStatus = (complaintId, newStatus) => {
    router.post('/checkComplaints', {
      id: complaintId,
      status: newStatus,
    }, {
      preserveScroll: true,
      preserveState: true,
    });
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-white p-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Complaints Dashboard
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {complaints.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No complaints found.</p>
        ) : (
          complaints.map((complaint) => (
            <div
              key={complaint.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold text-indigo-700">
                  {complaint.category_name}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    complaint.status === 'Resolved'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {complaint.status}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{complaint.message}</p>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>
                  <strong>Scheduled Date: </strong>
                  {complaint.schedule_date
                    ? new Date(complaint.schedule_date).toLocaleDateString()
                    : 'PENDING'}
                </span>
                <span>
                  <strong>Filed By: </strong>
                  {complaint.user_full_name}
                </span>
              </div>

              <div className="flex space-x-3 items-center">
                <input
                  type="date"
                  value={complaint.schedule_date || ''}
                  onChange={(e) => {
                    updateScheduleDate(complaint.id, e.target.value);
                    e.target.blur();
                  }}
                  onBlur={(e) => onDateBlur(complaint.id, e.target.value)}
                  className="border rounded-lg px-3 py-2"
                />
                <button
                  onClick={() => toggleStatus(complaint.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                >
                  Toggle Status
                </button>
                
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}