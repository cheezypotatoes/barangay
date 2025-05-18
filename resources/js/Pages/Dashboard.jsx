import React from "react";
import { usePage } from '@inertiajs/react'




export default function Dashboard() {
    const { auth, userCount, residentsCount, alreadyRegistered, isAdmin } = usePage().props;
    
    console.log("Admin: ", isAdmin);
   
  
    return (
        <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 dark:bg-gray-800 text-white p-6">
            <h2 className="text-2xl font-bold mb-6">Barangay Profiling</h2>
            <ul>
               

                {!isAdmin && (
                        <>
                            {alreadyRegistered ? (
                            <a href="/editProfile">
                                <li className="py-2 hover:bg-blue-800 rounded cursor-pointer font-bold">
                                Edit Profile
                                </li>
                            </a>
                            ) : (
                            <a href="/registerAsResident">
                                <li className="py-2 hover:bg-blue-800 rounded cursor-pointer font-bold">
                                Register As Resident
                                </li>
                            </a>
                            )}

                            <a href="/JoinOrganization">
                            <li className="font-bold py-2 hover:bg-blue-800 rounded cursor-pointer">
                                Join Organization
                            </li>
                            </a>

                            <a href="/FileCase">
                            <li className="font-bold py-2 hover:bg-blue-800 rounded cursor-pointer">
                                File a Barangay Complaint Meeting
                            </li>
                            </a>
                        </>
                        )}



                {isAdmin && (
                    <>
                        <a href="/viewResidents">
                            <li className="font-bold py-2 hover:bg-blue-800 rounded cursor-pointer">
                            Show Residents
                            </li>
                        </a>
                        <a href="/organizationManager">
                            <li className="font-bold py-2 hover:bg-blue-800 rounded cursor-pointer">
                                Organization Manager
                            </li>
                        </a>
                        <a href="/checkComplaints">
                            <li className="font-bold py-2 hover:bg-blue-800 rounded cursor-pointer">
                                View Complaints
                            </li>
                        </a>
                        <a href="/ConfirmCedulaPayment">
                            <li className="font-bold py-2 hover:bg-blue-800 rounded cursor-pointer">
                                Confirm Cedula
                            </li>
                        </a>
                    </>  
                )}

                <a href="/logout"><li className="font-bold py-2 hover:bg-blue-800 rounded cursor-pointer">Logout</li></a>
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

                {/* Card 3: Cedula */}
               
                <div
                    className="bg-[#1F2937] p-6 rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
                        >
                        <h4 className="text-2xl font-extrabold text-white mb-3 drop-shadow-md">
                            Pay Cedula
                        </h4>
                        <p className="text-indigo-100 mb-6">
                            Make your cedula payment quickly and securely.
                        </p>
                        <a href="/CedulaPayment">
                            <button
                            className="bg-white  font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-100 transition"
                            >
                            Pay Now
                            </button>
                        </a>
                </div>
              
            </div>

            
        </div>
    </div>
    );
}
