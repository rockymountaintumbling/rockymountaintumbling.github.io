import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function RecreationCheer() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-[300px]">
              <img 
                src="/classes/rec-cheer.jpg"
                alt="Recreation Cheer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                Recreation Cheer
              </h1>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <p className="text-gray-600 text-lg mb-8">
                  At Rocky Mountain Tumbling & Cheer, our Recreational Cheer program offers a dynamic introduction to cheerleading, focusing on foundational skills such as stunts, jumps, motions, and tumbling. Designed to build confidence and athleticism, this program prepares athletes for future cheer tryouts.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Program Focus</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Cheer stunts</li>
                      <li>• Kicks and jumps</li>
                      <li>• Arm positions and angles</li>
                      <li>• Tumbling</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Preparation For</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Jr. High cheerleading</li>
                      <li>• High School cheerleading</li>
                      <li>• All-Star cheerleading</li>
                      <li>• Competition teams</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#FF1494]/5 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Pricing</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Base Price: $65 per month</li>
                    <li>• Each additional hour: 25% off ($48.74/month)</li>
                    <li>• 2nd student: 10% off ($58.50/month)</li>
                    <li>• 3rd student: 40% off ($39/month)</li>
                  </ul>
                </div>

                <div className="text-center">
                  <a 
                    href="https://app.jackrabbitclass.com/regv2.asp?id=528475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF1494] text-white px-8 py-3 rounded-full text-lg hover:bg-[#D1127A] transition inline-block"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecreationCheer;