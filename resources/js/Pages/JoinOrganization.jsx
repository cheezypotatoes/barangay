import { useEffect, useState, useRef } from "react";
import { usePage, useForm } from '@inertiajs/react';

export default function JoinOrganization() {
    const [selectedOrg, setSelectedOrg] = useState("");
    const { data, setData, post, processing, errors, reset } = useForm({
            organizationSelected: '',
    });

    const organizations = [
        "women's",
        "pwd",
        "senior citizen"
    ];

    const handleConfirm = () => {
        data['organizationSelected'] = selectedOrg;
        if (data['organizationSelected']) {
            post('/JoinOrganization', {
                onSuccess: () => {
                    reset('organizationSelected');
                    console.log("SUCCESS")
                },
                onError: (errors) => {
                    console.log(errors);
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
            onChange={(e) => setSelectedOrg(e.target.value)}
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
            className="w-full p-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
            >
            Confirm
            </button>

            {selectedOrg && (
            <p className="text-gray-700">
                ✅ You picked: <strong>{selectedOrg}</strong>
            </p>
            )}
        </div>

        
        </div>
    );
}