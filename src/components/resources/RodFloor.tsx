import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function RodFloor() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/faq" className="flex items-center space-x-2 text-[#FF1494] hover:text-[#D1127A] transition">
                <ArrowLeft className="w-6 h-6" />
                <span>Back to FAQ</span>
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
                src="/rod-floor.jpg"
                alt="Rod Floor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                Rod Floor
              </h1>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What is a Rod Floor?</h2>
                <p className="text-gray-600 mb-6">
                  A rod floor, also known as a spring floor, is a specialized gymnastics surface that combines layers of materials to create an optimal training and performance environment. It consists of several components working together to provide controlled bounce and shock absorption.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Key Components</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Fiberglass rods or springs</li>
                      <li>• Foam blocks for support</li>
                      <li>• Plywood layers</li>
                      <li>• Carpet top layer</li>
                      <li>• Shock-absorbing padding</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Enhanced rebound</li>
                      <li>• Reduced impact on joints</li>
                      <li>• Improved performance</li>
                      <li>• Consistent surface response</li>
                      <li>• Increased safety</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                <p className="text-gray-600 mb-6">
                  When an athlete lands on a rod floor, the force is distributed across the surface and absorbed by the fiberglass rods or springs underneath. These components flex and compress, storing energy that is then released back into the athlete's movement, providing a controlled bounce that enhances performance while reducing strain on the body.
                </p>

                <div className="bg-[#FF1494]/5 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Safety Features</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Even force distribution</li>
                    <li>• Controlled rebound</li>
                    <li>• Non-slip surface</li>
                    <li>• Impact absorption</li>
                    <li>• Professional-grade construction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RodFloor;