import { useEffect, useState, useRef } from "react";
import { usePage, useForm } from '@inertiajs/react';

export default function OrganizationManager() {
    //TODO: Make it so that apply change will grab the organizationDataState and re-apply the data
    //TODO: make filter, maybe every iteration on map check what's the filter condition in ((organizationDataState || []).map) and decide if show or not show the row
    //TODO: Make it so it wont re-render the whole table when changing the status of a user, only the row that was changed
    const [filter, setFilter] = useState("view all organization");
    const [selectedOption, setSelectedOption] = useState('none');

    const { organizationData, userData } = usePage().props;
    const [organizationDataState, setOrganizationDataState] = useState();
    const dataChangesMap = useRef(new Map());
    const { changesMap, setChangesMap, post  } = useForm({
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
    }, [organizationData])

    const applyChanges = () => {
        post('/organizationManager')
    }

    const getUserNameById = (userId) => {
        const user = userData.find(user => user.id === userId);
        return user ? user.name : "Unknown"; 
    };

    const changeUserStatus = (rowId, userId, organizationName) => { 
        const user = organizationDataState.find(user => 
            user.user_id === userId && user.organization_name === organizationName
        );

        const user_status = user.status
        const newStatus = statusMap[user_status] || user_status;

        const updatedOrganizationData = organizationDataState.map((item, index) => {
            if (index === rowId - 1) {
                return { ...item, status: newStatus };
            }
            return item;
        });
        
        dataChangesMap.current[rowId] = [userId, organizationName ,newStatus];
        setOrganizationDataState(updatedOrganizationData);
        console.log(dataChangesMap.current)
    }

    

    return (
        <div className="p-4">
            <div className="mb-4">
            {/* Select Dropdown */}
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border rounded w-60"
            >
                <option value="view all organization">View All Organizations</option>
                <option value="request only">Request Only</option>
            </select>

            {/* Radio Buttons */}
            <div className="mt-2 ml-1">
                <label className="flex items-center space-x-1">
                    <input
                    type="radio"
                    name="organizationFilter"
                    value="accepted"
                    onChange={handleRadioChange}
                 
                    />
                    <span>accepted</span>
                </label>

                <label className="flex items-center space-x-1">
                    <input
                    type="radio"
                    name="organizationFilter"
                    value="rejected"
                    onChange={handleRadioChange}
                    />
                    <span>rejected</span>
                </label>

                <label className="flex items-center space-x-1">
                    <input
                    type="radio"
                    name="organizationFilter"
                    value="pending"
                    onChange={handleRadioChange}
                    />
                    <span>pending</span>
                </label>

                <label className="flex items-center space-x-1">
                    <input
                    type="radio"
                    name="organizationFilter"
                    value="none"
                    onChange={handleRadioChange}
                    />
                    <span>none</span>
                </label>
            </div>

            {/* Apply Changes Button */}
            <button onClick={applyChanges} className="mt-2 p-2 bg-blue-500 text-white rounded">
                Apply Changes
            </button>
            </div>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b">
                    <th className="p-2 border-r w-1">ID</th>
                    <th className="p-2 border-r w-1/4">Name</th>
                    <th className="p-2 border-r w-1/3">Organization</th>
                    <th className="p-2 border-r w-1/6">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {(organizationDataState || []).map((item) => (
                        (item.status === selectedOption || selectedOption === 'none') ? (
                        <tr key={item.id} className="border-b">
                            <td className="p-2 border-r text-center">{item.user_id}</td>
                            <td className="p-2 border-r">{getUserNameById(item.user_id)}</td>
                            <td className="p-2">{item.organization_name}</td>
                            <td
                            className="p-2 hover:text-yellow-600 cursor-pointer text-center border-r select-none"
                            onClick={() => changeUserStatus(item.id, item.user_id, item.organization_name)}
                            >
                            {item.status}
                            </td>
                        </tr>
                        ) : null
                    ))}
                </tbody>
            </table>
        </div>
    );
}