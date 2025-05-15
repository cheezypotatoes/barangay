import React from 'react';
import { router } from '@inertiajs/react';


export default function BarangayComplaintInbox() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex">
      <div className="flex-1 flex overflow-hidden bg-white shadow-lg rounded-none">

        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-gray-200 flex flex-col">
          <h2 className="text-xl font-bold p-6 border-b border-gray-700">Folders</h2>
            <nav className="flex flex-col p-4 space-y-3 flex-grow overflow-auto">
                    <div className="px-4 py-2 rounded cursor-pointer hover:bg-gray-700 transition bg-gray-800 font-semibold">
                        All Complaints
                    </div>
                    <div className="px-4 py-2 rounded cursor-pointer hover:bg-gray-700 transition">
                        Pending
                    </div>
                    <div className="px-4 py-2 rounded cursor-pointer hover:bg-gray-700 transition">
                        Resolved
                    </div>
                    <a href='/dashboard'>
                        <div className="px-4 py-2 rounded cursor-pointer hover:bg-gray-700 transition">
                            Return
                        </div>
                    </a>
                </nav>
          <div className="p-4 border-t border-gray-700 text-xs text-gray-400 text-center">
            Barangay Complaint System
          </div>
        </aside>

        {/* Main Inbox Area */}
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-8 border-b border-gray-300">
                <h1 className="text-2xl font-semibold text-gray-800">Inbox</h1>
                <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => router.visit('/FileCaseRequest')}
                >New Complaint
                </button>
          </header>

          {/* Message List */}
          <section className="flex-1 overflow-auto bg-gray-50 p-6">
            {[1, 2, 3].map((_, idx) => (

              <div
                key={idx}
                className="mb-5 p-4 border border-gray-300 rounded-lg bg-white  "
              >
                {/* Subject */}
                <div className="h-6 bg-gray-300 rounded w-1/3 mb-2 flex items-center px-2">
                    <h1 className="text-sm font-semibold mr-2">Category:</h1>
                    <h1 className="text-sm" >Public disturbance</h1>
                </div> 

                {/* Preview */}
                <div className="h-5 bg-gray-300 rounded w-4/5 mb-2 flex items-center px-2">
                  <h1 className="text-sm font-semibold mr-2">Preview</h1>
                  <h1 className="text-sm" >Lorem ipsum dolor sit amet consectetur</h1>
                </div>

                {/* Date placeholder */}
                <div className="h-5 bg-gray-300 rounded w-1/4 flex items-center px-2">
                    <h1 className="text-sm font-semibold mr-2">DATE</h1>
                    <h1 className="text-sm shadow-sm animate-pulse">11/11/11</h1>
                </div>
                
              </div>
            ))}
          </section>
        </main>

      </div>
    </div>
  );
}
