import React from "react";
import { usePage } from '@inertiajs/react'




export default function Dashboard() {
    const { auth, userCount, residentsCount, alreadyRegistered, isAdmin } = usePage().props;
    
    console.log("Admin: ", isAdmin);
   
  
    return (
        <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 dark:bg-gray-800 text-white p-6">
            <h2 className="text-2xl font-semibold mb-6">Barangay Profiling</h2>
            <ul>
                <a href="/"><li className="py-2 hover:bg-blue-800 rounded cursor-pointer">Home</li></a>
                <li className="py-2 hover:bg-blue-800 rounded cursor-pointer">Show Residents</li>

                {alreadyRegistered ? (
                    <a href="/editProfile">
                        <li className="py-2 hover:bg-blue-800 rounded cursor-pointer">
                        Edit Profile
                        </li>
                    </a>
                    ) : (
                    <a href="/registerAsResident">
                        <li className="py-2 hover:bg-blue-800 rounded cursor-pointer">
                        Register As Resident
                        </li>
                    </a>
                )}

                {isAdmin && (
                    <a href="/organizationManager">
                        <li className="py-2 hover:bg-blue-800 rounded cursor-pointer">
                            Organization Manager
                        </li>
                    </a>
                )}

                <a href="/logout"><li className="py-2 hover:bg-blue-800 rounded cursor-pointer">Logout</li></a>
            </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6">
            {/* Top Navigation */}
            <div className="dark:bg-gray-800 text-white p-4 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-semibold">Hello {auth.name}. Welcome to Dashboard</h3>
            </div>

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1: Total Population */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-4">Site users</h4>
                    <p className="text-gray-700">Current total site users of this site.</p>
                    <div className="mt-4 text-3xl font-bold">{userCount}</div>
                </div>

                {/* Card 2: Registered Residents */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-4">Registered Residents</h4>
                    <p className="text-gray-700">Number of registered residents in the barangay.</p>
                    <div className="mt-4 text-3xl font-bold">{residentsCount}</div>
                </div>

                {/* Card 3: Active Services */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold mb-4">Active Services</h4>
                    <p className="text-gray-700">Available services for residents.</p>
                    <div className="mt-4 text-3xl font-bold">None</div>
                </div>
            </div>

            {/* Additional Information */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">Barangay Information</h4>
                <p className="text-gray-700">This section can be used to display other information such as recent updates, news, and announcements.</p>
            </div>
        </div>
    </div>
    );
}
