import React from "react";
import { usePage, useForm } from "@inertiajs/react";

export default function PayCedulaForm() {
  const { props } = usePage();
  const gcashNumber = "0917-123-4567";

  const { data, setData, post, processing } = useForm({
    referralCode: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/CedulaPaymentForm");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr bg-[#1DA1F2] p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Cedula Payment
        </h2>

        {/* GCash Number Display */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Send to GCash Number
          </label>
          <div className="bg-gray-100 p-3 rounded-lg text-center font-mono text-lg text-[#1DA1F2]">
            {gcashNumber}
          </div>
        </div>

        {/* Referral Code Input */}
        <div className="mb-4">
          <label
            htmlFor="referralCode"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            GCash Referral Code
          </label>
          <input
            id="referralCode"
            type="text"
            value={data.referralCode}
            onChange={(e) => setData("referralCode", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            placeholder="Enter your referral code"
            required
          />
        </div>

        {/* Amount Input */}
        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            Amount You Sent (₱)
          </label>
          <input
            id="amount"
            type="number"
            step="0.01"
            min="1"
            value={data.amount}
            onChange={(e) => setData("amount", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            placeholder="e.g. 160.00"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={processing}
          className="w-full bg-[#1DA1F2] hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition duration-150"
        >
          {processing ? "Submitting..." : "Confirm Payment"}
        </button>
      </form>
    </div>
  );
}