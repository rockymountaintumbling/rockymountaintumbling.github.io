import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, DollarSign, FileText, CreditCard } from 'lucide-react';

function OpenGym() {
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
            <div className="relative h-[400px]">
              <img 
                src="/open-gym.jpg"
                alt="Open Gym"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                Open Gym
              </h1>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <p className="text-gray-600 text-lg mb-8">
                  Experience the freedom to train on your terms with our Open Gym sessions at Rocky Mountain Tumbling & Cheer. Whether you're an individual athlete refining your skills or a group working on routines, our facility offers a flexible environment to suit your needs.
                </p>

                <p className="text-gray-600 mb-8">
                  During Open Gym hours, participants have access to our state-of-the-art equipment without a structured schedule, allowing you to focus on tumbling, stunting, or any specific areas you'd like to improve. Our experienced coaches are on hand to provide guidance, answer questions, and ensure a safe training atmosphere.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-[#FF1494]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Schedule</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Tuesdays: 8:00 PM - 9:00 PM</li>
                          <li>• Thursdays: 8:00 PM - 9:00 PM</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                        <Users className="w-6 h-6 text-[#FF1494]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Requirements</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Ages 5 and up</li>
                          <li>• Signed waiver required</li>
                          <li>• Proper athletic attire</li>
                          <li>• No jewelry</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-[#FF1494]/5 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                        <DollarSign className="w-6 h-6 text-[#FF1494]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                        <p className="text-gray-600">$5 per athlete</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FF1494]/5 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                        <CreditCard className="w-6 h-6 text-[#FF1494]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Payment Methods</h3>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Cash</li>
                          <li>• Venmo</li>
                          <li>• Charge to RMTC account</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FF1494]/5 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-[#FF1494]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Required Waiver</h3>
                      <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfPAuG-RUqmsHdhGgQQl4tzr8ohpZ0EwWZy6wDrEHnSXV3ZSQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF1494] hover:text-[#D1127A] font-semibold"
                      >
                        Complete Waiver Form
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• First-time participants must complete the waiver before participating</li>
                    <li>• Schedule subject to change during holidays or special events</li>
                    <li>• Limited spots available - first come, first served</li>
                    <li>• Coaches reserve the right to group athletes by skill level for safety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpenGym;