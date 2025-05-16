import { useEffect, useState, useRef } from "react";
import { usePage, useForm } from '@inertiajs/react';

export default function JoinOrganization() {
    const [selectedOrg, setSelectedOrg] = useState("");
    const [warning, setWarning] = useState("");
    const { data, setData, post, processing, errors, reset } = useForm({
            organizationSelected: '',
    });


    const warningText = useRef(null)
    const organizations = [
        "women's",
        "pwd",
        "senior citizen"
    ];

    const handleConfirm = () => {
        data['organizationSelected'] = selectedOrg;
        if (data['organizationSelected']) {
            post('/JoinOrganization', {
                onSuccess: (success) => {
                    setWarning("Successfully requested")
                    reset('organizationSelected');
                    warningText.current.classList.remove('text-red-700');
                    warningText.current.classList.add('text-green-700');
                },
                onError: (errors) => {
                    warningText.current.classList.remove('text-green-700');
                    warningText.current.classList.add('text-red-700');
                    setWarning("You already requested this organization.")
                },
            });
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Pick an Organization</h2>
            <select
            value={selectedOrg}
            onChange={(e) => {setSelectedOrg(e.target.value), setWarning("")}}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            <option value="">-- Select --</option>
            {organizations.map((org) => (
                <option key={org} value={org}>
                {org}
                </option>
            ))}
            </select>

            <button
            onClick={handleConfirm}
            className="w-full p-3 rounded-lg font-medium text-white bg-[#1F2937] hover:bg-blue-800 transition"
            >
            Confirm
            </button>
            
            {selectedOrg && (
                <p ref={warningText} className="text-red-700">
                    {warning}
                </p>
            )}
        </div>

        
        </div>
    );
}