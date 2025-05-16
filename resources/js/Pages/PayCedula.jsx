import React from "react";
import { usePage } from "@inertiajs/react";

export default function PayCedulaStatus() {
  const { props } = usePage();
  const pension = props.pension ?? 0;
  const totalPayments = Number(props.totalPayments) || 0;
  const payments = props.payments ?? [];

  const billAmount = ((pension * 12) / 1000) + 5;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 to-blue-50 flex flex-col items-center justify-start p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Annual Cedula Bill
        </h1>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-gray-600 text-lg">Total Bill</p>
            <p className="text-2xl font-semibold text-blue-600">
              ₱{billAmount.toFixed(2)}
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-lg">Total Paid</p>
            <p className="text-2xl font-semibold text-green-600">
              ₱{totalPayments.toFixed(2)}
            </p>
          </div>
        </div>

        <a href="/CedulaPaymentForm">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-medium transition shadow-md hover:shadow-lg"
          >
            Pay Again
          </button>
        </a>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment History</h2>

        {payments.length === 0 ? (
          <p className="text-gray-600">No payment records found.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Amount (₱)</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(({ id, payment, status, created_at }) => (
                <tr key={id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{new Date(created_at).toLocaleDateString()}</td>
                  <td className="border border-gray-300 px-4 py-2">{Number(payment).toFixed(2)}</td>
                  <td className={`border border-gray-300 px-4 py-2 capitalize ${
                    status === "completed" ? "text-green-600" :
                    status === "pending" ? "text-yellow-600" :
                    "text-red-600"
                  }`}>
                    {status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
