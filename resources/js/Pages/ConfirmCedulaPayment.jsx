import React from "react";
import { usePage, useForm } from "@inertiajs/react";
import { router } from '@inertiajs/react'

export default function CedulaPaymentList() {
  const { payments } = usePage().props;
 
  const handleClick = (id, status) => {
    
    let newStatus;

    if (status === "pending") {
      newStatus = "Completed";
    } else if (status === "completed") {
      newStatus = "Failed";
    } else if (status === "failed") {
      newStatus = "Pending";
    } else {
     
      newStatus = "Pending";
    }
   
    router.post('/ConfirmCedulaPayment', {
      id: id,
      status: newStatus,
    }, {
      preserveScroll: true,
      preserveState: true,
    })
  };

  return (
    <div className="w-full min-h-screen p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Cedula Payments</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 rounded-lg text-sm overflow-hidden table-auto">
  <thead className="bg-gradient-to-r dark:bg-gray-800 text-white text-xs">
    <tr>
      <th className="border border-gray-300 px-3 py-2 text-left">ID</th>
      <th className="border border-gray-300 px-3 py-2 text-left">Resident</th>
      <th className="border border-gray-300 px-3 py-2 text-right">Payment (₱)</th>
      <th className="border border-gray-300 px-3 py-2 text-left">GCash Ref Code</th>
      <th className="border border-gray-300 px-3 py-2 text-left min-w-[120px]">Status</th>
      <th className="border border-gray-300 px-3 py-2 text-left">Created At</th>
      <th className="border border-gray-300 px-3 py-2 text-left">Updated At</th>
      <th className="border border-gray-300 px-3 py-2 text-center">Action</th>
    </tr>
  </thead>

          <tbody className="text-xs">
            {payments.map(
              ({
                id,
                resident,
                payment,
                gcash_referral_code,
                status,
                created_at,
                updated_at,
              }) => (
                <tr key={id} className="text-gray-800 hover:bg-gray-50 transition-colors duration-200">
                  <td className="border border-gray-300 px-3 py-2 whitespace-nowrap">{id}</td>
                  <td className="border border-gray-300 px-3 py-2 whitespace-nowrap">
                    {resident.first_name} {resident.last_name}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-right whitespace-nowrap">
                    {payment ? Number(payment).toFixed(2) : '0.00'}
                  </td>
                  <td className="border border-gray-300 px-3 py-2 whitespace-nowrap">{gcash_referral_code}</td>
                  <td className="border border-gray-300 px-3 py-2 capitalize whitespace-nowrap">{status}</td>
                  <td className="border border-gray-300 px-3 py-2 whitespace-nowrap">{created_at}</td>
                  <td className="border border-gray-300 px-3 py-2 whitespace-nowrap">{updated_at}</td>
                  <td className="border border-gray-300 px-3 py-2 text-center whitespace-nowrap">
                    <button
                      onClick={() => handleClick(id, status)}
                      className={`px-3 py-1 rounded-full font-medium text-xs transition dark:bg-gray-800 text-white`}
                    >
                      Toggle Status
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
