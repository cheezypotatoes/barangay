import React, { useState } from "react";

export default function CedulaPaymentList() {
  const payments = [
    {
      id: 1,
      resident_id: "R001",
      payment: 150.0,
      gcash_referral_code: "GCASH1234",
      status: "pending",
      created_at: "2025-05-01 09:30",
      updated_at: "2025-05-01 09:30",
    },
    {
      id: 2,
      resident_id: "R002",
      payment: 200.0,
      gcash_referral_code: "GCASH5678",
      status: "confirmed",
      created_at: "2025-05-03 11:15",
      updated_at: "2025-05-04 14:20",
    },
    {
      id: 3,
      resident_id: "R003",
      payment: 100.0,
      gcash_referral_code: "GCASH91011",
      status: "pending",
      created_at: "2025-05-05 10:00",
      updated_at: "2025-05-05 10:00",
    },
  ];

  // Keep a local copy of payment statuses to toggle
  const [paymentStatuses, setPaymentStatuses] = useState(
    payments.reduce((acc, p) => {
      acc[p.id] = p.status;
      return acc;
    }, {})
  );

  const toggleStatus = (id) => {
    setPaymentStatuses((prev) => ({
      ...prev,
      [id]: prev[id] === "pending" ? "confirmed" : "pending",
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Cedula Payments</h2>

      <table className="min-w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <tr>
            <th className="border border-gray-300 px-6 py-3 text-left">ID</th>
            <th className="border border-gray-300 px-6 py-3 text-left">Resident ID</th>
            <th className="border border-gray-300 px-6 py-3 text-right">Payment (₱)</th>
            <th className="border border-gray-300 px-6 py-3 text-left">GCash Ref Code</th>
            <th className="border border-gray-300 px-6 py-3 text-left">Status</th>
            <th className="border border-gray-300 px-6 py-3 text-left">Created At</th>
            <th className="border border-gray-300 px-6 py-3 text-left">Updated At</th>
            <th className="border border-gray-300 px-6 py-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {payments.map(
            ({
              id,
              resident_id,
              payment,
              gcash_referral_code,
              created_at,
              updated_at,
            }) => {
              const status = paymentStatuses[id];
              const isConfirmed = status === "confirmed";

              return (
                <tr
                  key={id}
                  className={`text-gray-800 hover:bg-gray-50 transition-colors duration-200 ${
                    isConfirmed ? "bg-green-50" : ""
                  }`}
                >
                  <td className="border border-gray-300 px-6 py-3">{id}</td>
                  <td className="border border-gray-300 px-6 py-3">{resident_id}</td>
                  <td className="border border-gray-300 px-6 py-3 text-right">
                    {payment.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-6 py-3">{gcash_referral_code}</td>
                  <td className="border border-gray-300 px-6 py-3 capitalize">{status}</td>
                  <td className="border border-gray-300 px-6 py-3">{created_at}</td>
                  <td className="border border-gray-300 px-6 py-3">{updated_at}</td>
                  <td className="border border-gray-300 px-6 py-3 text-center">
                    <button
                      onClick={() => toggleStatus(id)}
                      className={`px-4 py-2 rounded-full font-semibold text-sm transition ${
                        isConfirmed
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {isConfirmed ? "Confirmed" : "Pending"}
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}