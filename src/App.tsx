// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import AssessmentForm from "./components/Assesment";
import ProfileSection from "./components/Profile";

function App() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <span
            className="text-[24px] font-medium leading-[36px] text-left w-[253px] h-[36px] mb-4 lg:mb-0 text-[#0B1D2E]"
            style={{
              fontFamily: "P22 Mackinac",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            New Self-Assessment
          </span>

          <div className="flex items-center space-x-6">
            {/* Bell Icon */}
            <button className="bg-white p-2 rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0201 2.91016C8.71009 2.91016 6.02009 5.60016 6.02009 8.91016V11.8002C6.02009 12.4102 5.76009 13.3402 5.45009 13.8602L4.30009 15.7702C3.59009 16.9502 4.08009 18.2602 5.38009 18.7002C9.69009 20.1402 14.3401 20.1402 18.6501 18.7002C19.8601 18.3002 20.3901 16.8702 19.7301 15.7702L18.5801 13.8602C18.2801 13.3402 18.0201 12.4102 18.0201 11.8002V8.91016C18.0201 5.61016 15.3201 2.91016 12.0201 2.91016Z"
                  stroke="#0B1D2E"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M13.8699 3.20043C13.5599 3.11043 13.2399 3.04043 12.9099 3.00043C11.9499 2.88043 11.0299 2.95043 10.1699 3.20043C10.4599 2.46043 11.1799 1.94043 12.0199 1.94043C12.8599 1.94043 13.5799 2.46043 13.8699 3.20043Z"
                  stroke="#0B1D2E"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.02 19.0596C15.02 20.7096 13.67 22.0596 12.02 22.0596C11.2 22.0596 10.44 21.7196 9.90002 21.1796C9.36002 20.6396 9.02002 19.8796 9.02002 19.0596"
                  stroke="#0B1D2E"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
              {/* Optional: Add a notification badge */}
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Profile Section */}
            <ProfileSection />
          </div>
        </header>
        <div className="flex flex-row justify-between items-center mb-8">
          <div className="flex space-x-4">
            <span
              className="text-[20px] font-medium leading-[36px] text-left text-gray-600 text-[#969696]"
              style={{
                fontFamily: "P22 Mackinac",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Edit
            </span>
            <span
              className="text-[20px] font-medium leading-[36px] text-left text-gray-600 text-[#0B1D2E]"
              style={{
                fontFamily: "P22 Mackinac",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Share
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span
              className="text-[16px] font-medium leading-[36px] text-left text-gray-600 text-[#0B1D2E]"
              style={{
                fontFamily: "P22 Mackinac",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Survey is Active
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div
                className="w-[43.4px] h-[24.11px] bg-white rounded-full peer peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
                style={{
                  boxShadow: "0px 2.41px 4.82px 0px #2727271A",
                }}
              ></div>
            </label>
          </div>
        </div>

        {/* Assessment Form */}
        <AssessmentForm />
      </div>
    </div>
  );
}

export default App;
