import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function DoubleMini() {
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
                src="/double-mini.jpg"
                alt="Double Mini Trampoline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                Double Mini Trampoline
              </h1>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">What is a Double Mini Trampoline?</h2>
                <p className="text-gray-600 mb-6">
                  A Double Mini Trampoline (DMT) is a specialized piece of gymnastics equipment that combines elements of traditional trampolining with dynamic tumbling. It features two small trampoline beds set at different angles, allowing athletes to perform complex aerial maneuvers with precision landings.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Equipment Features</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Two trampoline sections</li>
                      <li>• Angled mounting platform</li>
                      <li>• Safety padding</li>
                      <li>• Landing area</li>
                      <li>• Stable frame construction</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Skills Developed</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Spatial awareness</li>
                      <li>• Body control</li>
                      <li>• Power generation</li>
                      <li>• Landing mechanics</li>
                      <li>• Complex combinations</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">How It's Used</h3>
                <p className="text-gray-600 mb-6">
                  Athletes approach the Double Mini with a running start, performing their first skill on the mounting bed, followed by a transfer skill on the second bed, before executing a dismount onto the landing area. This dynamic progression allows for the development of complex aerial sequences while maintaining controlled, safe landings.
                </p>

                <div className="bg-[#FF1494]/5 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Safety Considerations</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional spotting required</li>
                    <li>• Proper progression of skills</li>
                    <li>• Regular equipment maintenance</li>
                    <li>• Certified instructor supervision</li>
                    <li>• Safety mat configuration</li>
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

export default DoubleMini;