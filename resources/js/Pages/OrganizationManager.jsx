import { useEffect, useState, useRef } from "react";
import { usePage, useForm } from '@inertiajs/react';

export default function OrganizationManager() {
    const [selectedOption, setSelectedOption] = useState('none');

    const { organizationData, userData, residentData } = usePage().props;
    const [organizationDataState, setOrganizationDataState] = useState();
    const dataChangesMap = useRef(new Map());
    const { post } = useForm({
        changesMap: dataChangesMap.current,
    });

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const statusMap = {
        accepted: "rejected",
        rejected: "pending",
        pending: "accepted",
    };

    useEffect(() => {
        setOrganizationDataState(organizationData);
    }, [organizationData]);

    const applyChanges = () => {
        post('/organizationManager');
    };

    const getUserNameById = (userId) => {
        const resident = residentData.find(r => r.user_id === userId);
        return resident ? resident.full_name : "Unknown";
    };

    const changeUserStatus = (rowId, userId, organizationName) => {
        const user = organizationDataState.find(user =>
            user.user_id === userId && user.organization_name === organizationName
        );

        const user_status = user.status;
        const newStatus = statusMap[user_status] || user_status;

        const updatedOrganizationData = organizationDataState.map((item, index) => {
            if (index === rowId - 1) {
                return { ...item, status: newStatus };
            }
            return item;
        });

        dataChangesMap.current[rowId] = [userId, organizationName, newStatus];
        setOrganizationDataState(updatedOrganizationData);
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="mb-6 flex items-center gap-4 flex-wrap">
                {["accepted", "rejected", "pending", "none"].map((status) => (
                    <label key={status} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="organizationFilter"
                            value={status}
                            checked={selectedOption === status}
                            onChange={handleRadioChange}
                            className="accent-blue-600"
                        />
                        <span className="capitalize text-sm text-gray-700">{status}</span>
                    </label>
                ))}
                <button
                    onClick={applyChanges}
                    className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition"
                >
                    Apply Changes
                </button>
            </div>

            <div className="overflow-auto rounded-lg shadow">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-50 text-gray-700 uppercase text-sm">
                        <tr>
                            <th className="px-4 py-2 text-left border-b">User ID</th>
                            <th className="px-4 py-2 text-left border-b">Name</th>
                            <th className="px-4 py-2 text-left border-b">Organization</th>
                            <th className="px-4 py-2 text-center border-b">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(organizationDataState || []).map((item, idx) =>
                            selectedOption === "none" || item.status === selectedOption ? (
                                <tr key={item.id} className="hover:bg-gray-50 transition">
                                    <td className="px-4 py-2 border-b">{item.user_id}</td>
                                    <td className="px-4 py-2 border-b">{getUserNameById(item.user_id)}</td>
                                    <td className="px-4 py-2 border-b">{item.organization_name}</td>
                                    <td
                                        className="px-4 py-2 text-center border-b text-blue-600 font-semibold cursor-pointer hover:text-yellow-600 select-none"
                                        onClick={() => changeUserStatus(item.id, item.user_id, item.organization_name)}
                                    >
                                        {item.status}
                                    </td>
                                </tr>
                            ) : null
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
