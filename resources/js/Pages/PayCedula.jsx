import React from "react";
import { usePage } from "@inertiajs/react";

export default function PayCedulaStatus() {
//TODO: ALLOW USER TO SEE ALL PENDING
  const { props } = usePage();
  const pension = props.pension ?? 0;
  const totalPayments = Number(props.totalPayments) || 0;

  const billAmount = ((pension * 12) / 1000) + 5;

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
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
    </div>
  );
}