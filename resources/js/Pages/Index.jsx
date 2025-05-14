import shieldImage from "../images/lucide_shield.svg";
import shieldImageBlue from "../images/lucide_shield_blue.svg";
import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import React from 'react';

const Index = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login');
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#1DA1F2] flex justify-start items-start flex-col">
        <div className="flex justify-start items-center mt-20 ml-10" >
          <img src={shieldImage} alt="Shield" width="100" height="100" />
          <h1 className="text-3xl text-white font-bold">LOCALPULSE</h1>
        </div>

        <div className="flex justify-start items-center mt-5 ml-10 flex-col" >
          <h1 className="text-4xl text-white font-bold">
            Welcome to LocalPulse a <br />
            Local Government  <br />
            Profiling System
          </h1>
          <br></br>
          <p className="text-1xl text-white text-opacity-80">
            Access the barangay’s services, manage resident <br />
            information, and track community affairs all in one secure <br />
            platform.
          </p>
        </div>
      </div>

      <div className="w-1/2 bg-white flex justify-start items-center flex-col">
        <div className="flex justify-center items-center mt-12 flex-col" >
          <img src={shieldImageBlue} alt="Shield" width="80" height="80" />
          <h1 className="text-4xl text-black font-bold">
            Sign in  to your account
          </h1>
          <p className="text-1xl text-gray-400 font-bold">
            Enter your credentials to access the portal
          </p>
        </div>

        <div className="flex justify-center items-center mt-12 flex-col" >
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 ">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              style={{ width: '29vw' }}
              required
            />

            <label htmlFor="password" className="block text-sm font-medium text-gray-800 mt-4">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              style={{ width: '29vw' }}
              required
            />

            <button
              type="submit"
              disabled={processing}
              className="mt-2 p-2 w-full border bg-blue-500 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 flex items-center justify-center text-center"
            >
              <h1 className="text-1xl text-white font-bold">
                {processing ? 'Signing in...' : 'Sign in'}
              </h1>
            </button>

            <div className="flex mt-1 text-center justify-start">
              <h1 className="text-0xl"><a href="/register">Sign in</a></h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
