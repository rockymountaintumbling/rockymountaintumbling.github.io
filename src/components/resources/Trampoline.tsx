import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Trampoline() {
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
                src="/tumble-tramp.jpg"
                alt="Competition Trampoline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                Competition Trampoline
              </h1>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What is a Competition Trampoline?</h2>
                <p className="text-gray-600 mb-6">
                  A competition trampoline is a highly engineered piece of gymnastics equipment designed for both training and competitive performance. It features a robust frame, specialized springs, and a high-performance bed that allows athletes to achieve significant height while maintaining precise control.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Key Components</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Heavy-duty frame</li>
                      <li>• Professional-grade springs</li>
                      <li>• Competition bed material</li>
                      <li>• Safety padding</li>
                      <li>• End decks</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Training Benefits</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Air awareness development</li>
                      <li>• Skill progression</li>
                      <li>• Core strength building</li>
                      <li>• Balance improvement</li>
                      <li>• Coordination enhancement</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Training Environment</h3>
                <p className="text-gray-600 mb-6">
                  Our facility's trampolines are set up with comprehensive safety features, including proper matting, spotting rigs, and certified instructors. Athletes progress through carefully structured skill development programs, ensuring safe and effective advancement in their abilities.
                </p>

                <div className="bg-[#FF1494]/5 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Safety Protocols</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Certified instructor supervision</li>
                    <li>• Progressive skill development</li>
                    <li>• Proper spotting techniques</li>
                    <li>• Safety equipment usage</li>
                    <li>• Regular maintenance checks</li>
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

export default Trampoline;