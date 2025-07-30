import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PrivateLessons() {
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
                src="/classes/private-lessons.jpg"
                alt="Private Lessons"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                Private Lessons
              </h1>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Personalized Training Experience</h2>
                <p className="text-gray-600 mb-6">
                  Personal lesson offers dedicated one-on-one coaching tailored to an athlete's specific goals, providing focused instruction that enhances skill development and builds confidence.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Private Lessons?</h3>
                  <p className="text-gray-600">
                    Our one-on-one coaching sessions are tailored to each athlete's unique goals, whether it's refining a cheer routine, perfecting a tumbling pass, or building confidence for the next competitive level. These personalized lessons provide focused instruction in a supportive environment, accelerating skill development and boosting self-assurance.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Focus Areas</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Skill reinforcement at any level</li>
                      <li>• Level progression assistance</li>
                      <li>• Tumbling & Cheer cleaning</li>
                      <li>• Confidence building</li>
                      <li>• Technique refinement</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• One-on-one attention</li>
                      <li>• Personalized feedback</li>
                      <li>• Focused skill development</li>
                      <li>• Flexible scheduling</li>
                      <li>• Accelerated progress</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#FF1494]/5 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Pricing</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 30 minutes: $40</li>
                    <li>• 60 minutes: $80</li>
                    <li>• No discounts applied to personal lessons</li>
                  </ul>
                </div>

                <div className="text-center">
                  <a 
                    href="https://app.jackrabbitclass.com/regv2.asp?id=528475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF1494] text-white px-8 py-3 rounded-full text-lg hover:bg-[#D1127A] transition inline-block"
                  >
                    Schedule a Lesson
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

export default PrivateLessons;