import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function CompetitionTumbling() {
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
                src="/classes/comp-team.jpg"
                alt="Competition Tumbling"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                Competition Tumbling
              </h1>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Be Apart Of The Team</h2>
                <p className="text-gray-600 mb-6">
                  Our Competition Tumbling program focuses on reinforcement of level 4 and above skills, preparing athletes for competitive success. This intensive program is designed for dedicated athletes ready to take their tumbling to the next level.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Program Features</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Advanced skill development</li>
                      <li>• Competition preparation</li>
                      <li>• Performance training</li>
                      <li>• Strength conditioning</li>
                      <li>• Mental preparation</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Training Schedule</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 5 hours/week program</li>
                      <li>• 7 hours/week program</li>
                      <li>• 9 hours/week program</li>
                      <li>• Competition schedule</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <p className="text-gray-600 mb-4">
                    Our comprehensive program helps athletes master advanced skills through systematic progression. Here are some of the skills you'll learn:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600">
                      <li>• Power round off whip</li>
                      <li>• Back-handspring whip</li>
                      <li>• Back-handspring tuck</li>
                      <li>• Whip combinations</li>
                      <li>• Back layout</li>
                      <li>• Back full</li>
                      <li>• Back full tumble out</li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Back full combinations</li>
                      <li>• Back double full</li>
                      <li>• Back double tuck</li>
                      <li>• Back double pike</li>
                      <li>• Back double straight</li>
                      <li>• ...and much more!</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#FF1494]/5 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Pricing</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Team 5 hours/week = $160/month</li>
                    <li>• Team 7 hours/week = $200/month</li>
                    <li>• Team 9 Hours/week = $250/month</li>
                    <li>• Additional fees apply for competitions</li>
                  </ul>
                </div>

                <div className="text-center">
                  <a 
                    href="https://app.jackrabbitclass.com/regv2.asp?id=528475"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF1494] text-white px-8 py-3 rounded-full text-lg hover:bg-[#D1127A] transition inline-block"
                  >
                    Join Our Team
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

export default CompetitionTumbling;