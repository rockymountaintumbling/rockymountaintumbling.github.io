import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

function HolidayHours() {
  const holidays = [
    {
      name: "Spring Break",
      dates: "Monday March 31st – Friday April 4th"
    },
    {
      name: "Memorial Day",
      dates: "Monday May 26th"
    },
    {
      name: "Independence Day",
      dates: "Friday July 4th"
    },
    {
      name: "Pioneer Day",
      dates: "Thursday July 24th"
    },
    {
      name: "Labor Day",
      dates: "Monday September 1st"
    },
    {
      name: "Fall Break",
      dates: "Thursday October 16th – Friday October 17th"
    },
    {
      name: "Halloween",
      dates: "Friday October 31st"
    },
    {
      name: "Thanksgiving Break",
      dates: "Wednesday November 26th – Friday November 28th"
    },
    {
      name: "Winter Break",
      dates: "December 22nd – January 2nd"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 text-[#FF1494] hover:text-[#D1127A] transition">
                <ArrowLeft className="w-6 h-6" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-center mb-8">
                <Calendar className="w-12 h-12 text-[#FF1494]" />
              </div>
              <h1 className="text-4xl font-bold text-center mb-2">2025 Holiday Hours</h1>
              <p className="text-gray-600 text-center mb-8">
                Please note the following dates when the gym will be closed
              </p>

              <div className="space-y-4">
                {holidays.map((holiday, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition duration-300"
                  >
                    <h3 className="text-xl font-semibold text-[#FF1494] mb-2">{holiday.name}</h3>
                    <p className="text-gray-700">{holiday.dates}</p>
                  </div>
                ))}

                <div className="bg-[#FF1494]/5 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-semibold text-[#FF1494] mb-2">Classes Resume</h3>
                  <p className="text-gray-700">Monday January 5th, 2026</p>
                </div>
              </div>

              <div className="mt-8 text-center text-gray-600">
                <p className="text-sm">
                  * Schedule subject to change. All students and parents will be notified of any modifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HolidayHours;