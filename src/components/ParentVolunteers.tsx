import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, Calendar, Trophy, Quote, Clock } from 'lucide-react';

function ParentVolunteers() {
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
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="Parent Volunteers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                Parent Volunteers
              </h1>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <div className="text-center mb-8">
                  <Heart className="w-12 h-12 text-[#FF1494] mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Join Our Amazing Community</h2>
                  <p className="text-lg text-gray-600">
                    At Rocky Mountain Tumbling & Cheer, our parent volunteers are the heart of our community. 
                    We're always looking for dedicated parents to help make our events, competitions, and activities even more special.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-6 h-6 text-[#FF1494] mr-3" />
                      <h3 className="text-xl font-semibold">Events & Activities</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li>• End of Summer Party</li>
                      <li>• Holiday parties and celebrations</li>
                      <li>• Fundraising events</li>
                      <li>• End of Season Party</li>
                      <li>• Team building activities</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Trophy className="w-6 h-6 text-[#FF1494] mr-3" />
                      <h3 className="text-xl font-semibold">Competition Support</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Competition day assistance</li>
                      <li>• Travel coordination</li>
                      <li>• State Championship assistance</li>
                      <li>• Snack and meal coordination</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#FF1494]/5 rounded-xl p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-6 h-6 text-[#FF1494] mr-3" />
                    <h3 className="text-xl font-semibold">A Message from Leo & Janelle</h3>
                  </div>
                  <div className="text-gray-700 italic text-lg leading-relaxed">
                    <p className="mb-4">
                      "Being a parent volunteer at RMT isn't just about helping out, it's about becoming part of something truly special. 
                      When you get involved, you're not just supporting your own athlete; you're helping create magical moments for 
                      every child who walks through our doors."
                    </p>
                    <p className="mb-4">
                      "We've watched parent volunteers form lifelong friendships, discover hidden talents, and experience the pure 
                      joy that comes from seeing kids light up at our events. Whether you're decorating for a party, cheering from 
                      the sidelines at competitions, or simply lending a helping hand, you become part of the heartbeat of our gym family."
                    </p>
                    <p className="mb-4">
                      "The energy is contagious, the memories are priceless, and the impact you make extends far beyond what you might imagine. 
                      Come be part of the action and we promise you'll have as much fun as the kids do!"
                    </p>
                    <p className="text-right font-semibold text-[#FF1494] not-italic">
                      — Leo & Janelle Vettori, Owners
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-[#FF1494] mr-3" />
                    <h3 className="text-xl font-semibold">Flexible Commitment</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    We understand that every family has different schedules and availability. Whether you can help 
                    once a month or once a year, every contribution makes a difference. We'll work with your schedule 
                    to find volunteer opportunities that fit your lifestyle.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• One-time event assistance</li>
                    <li>• Ongoing committee participation</li>
                    <li>• Seasonal support</li>
                    <li>• Behind-the-scenes help</li>
                  </ul>
                </div>

                <div className="text-center bg-[#FF1494]/10 rounded-xl p-8">
                  <Users className="w-12 h-12 text-[#FF1494] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
                  <p className="text-gray-600 mb-6">
                    Join our incredible community of parent volunteers and help create amazing experiences 
                    for all our athletes. Fill out our volunteer form to get started!
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScFOE4Ai2XokRw-jc2Ilwg6L9obzNgoGv-zDX4hi4mLSiwaVw/viewform?pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF1494] text-white px-8 py-3 rounded-full text-lg hover:bg-[#D1127A] transition inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Sign Up to Volunteer
                  </a>
                </div>

                <div className="mt-8 text-center text-gray-600">
                  <p className="text-sm">
                    Questions about volunteering? Contact us at{' '}
                    <a href="mailto:support@rockymountaintumbling.com" className="text-[#FF1494] hover:text-[#D1127A]">
                      support@rockymountaintumbling.com
                    </a>{' '}
                    or text{' '}
                    <a href="sms:+18016866731?body=Hi! I'm interested in becoming a parent volunteer at Rocky Mountain Tumbling & Cheer. Can you please provide me with more information about volunteer opportunities?" className="text-[#FF1494] hover:text-[#D1127A]">
                      (801) 686-6731
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentVolunteers;