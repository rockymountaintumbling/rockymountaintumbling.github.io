import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, DollarSign, FileText, Users, Gift, Star } from 'lucide-react';
import SEOHead from './SEOHead';

function BirthdayPartyRentals() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Birthday Party Rentals | Rocky Mountain Tumbling & Cheer | Clearfield UT"
        description="Host an unforgettable birthday party at Rocky Mountain Tumbling & Cheer! $150 for 2 hours of fun with access to all our professional tumbling equipment. Perfect venue for active kids' parties in Clearfield, Utah."
        keywords="birthday party rentals Utah, gymnastics birthday parties, tumbling birthday parties, party rentals Clearfield, kids birthday party venue, gymnastics party venue Utah, active birthday parties, tumbling party rentals, cheer birthday parties, Clearfield party venue"
        url="https://rockymountaintumbling.com/birthday-party-rentals"
      />
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
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Birthday Party"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
                Birthday & Party Rentals
              </h1>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <p className="text-gray-600 text-lg mb-8">
                  Make your child's special day unforgettable with a birthday party at Rocky Mountain Tumbling & Cheer! 
                  Our facility provides the perfect setting for an active, fun-filled celebration that your child and 
                  their friends will remember forever.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                        <DollarSign className="w-6 h-6 text-[#FF1494]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                        <p className="text-gray-600 text-2xl font-bold text-[#FF1494]">$150</p>
                        <p className="text-gray-600">for 2 hours of fun!</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-[#FF1494]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Duration</h3>
                        <p className="text-gray-600">2 full hours of facility access</p>
                        <p className="text-gray-600 text-sm">Perfect for parties of all sizes</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FF1494]/5 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                      <Gift className="w-6 h-6 text-[#FF1494]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <Star className="w-4 h-4 text-[#FF1494] mr-2" />
                          Access to all tumbling equipment
                        </li>
                        <li className="flex items-center">
                          <Star className="w-4 h-4 text-[#FF1494] mr-2" />
                          Spring floors and tumble tracks
                        </li>
                        <li className="flex items-center">
                          <Star className="w-4 h-4 text-[#FF1494] mr-2" />
                          Trampolines and foam pits
                        </li>
                        <li className="flex items-center">
                          <Star className="w-4 h-4 text-[#FF1494] mr-2" />
                          Party area for cake and presents
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-yellow-800">Important Requirement</h3>
                      <p className="text-yellow-700 mb-3">
                        <strong>All participants must fill out a waiver before the party.</strong>
                      </p>
                      <p className="text-yellow-700 text-sm">
                        Please ensure all guests complete their waivers in advance to maximize party time!
                      </p>
                      <div className="mt-4 flex flex-col md:flex-row items-center gap-4">
                        <div className="text-center">
                          <img 
                            src="/misc-waver-qr-code.png" 
                            alt="Scan QR code for party rental waiver" 
                            className="w-24 h-24 mx-auto mb-2"
                          />
                          <p className="text-yellow-700 text-sm font-medium">Scan for Quick Access</p>
                        </div>
                        <div className="text-center md:text-left">
                          <p className="text-yellow-700 text-sm mb-2">Or complete online:</p>
                          <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfxa8NM6J8t1-TIbT_ttqihX5I9T-K0t9BhnHtIIpoAjzAI_g/viewform?usp=sf_link&fce_id=3682678b-c201-47a3-ac71-be842ff53fe0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-600 hover:text-yellow-800 font-semibold underline"
                          >
                            Party Rental Waiver Form
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-[#FF1494]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Party Guidelines</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Comfortable athletic wear required for all participants</li>
                        <li>• No shoes on equipment (socks or bare feet only)</li>
                        <li>• Adult supervision required at all times</li>
                        <li>• Food and drinks allowed in designated party area only</li>
                        <li>• Clean-up assistance with trash & food</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-[#FF1494]/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#FF1494]">Ready to Book Your Party?</h3>
                  <p className="text-gray-600 mb-6">
                    Fill out our rental request form and we'll get back to you with availability and details!
                  </p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe8ju43hpu6lxPY6Mp4CejSkdyHgZQWJToY8CZ1RT_9SAraTQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF1494] text-white px-8 py-3 rounded-full text-lg hover:bg-[#D1127A] transition inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Request Your Party Rental
                  </a>
                </div>

                <div className="mt-8 text-center text-gray-600">
                  <p className="text-sm">
                    Questions about party rentals? Contact us at{' '}
                    <a href="tel:+18016866731" className="text-[#FF1494] hover:text-[#D1127A]">
                      (801) 686-6731
                    </a>{' '}
                    or{' '}
                    <a href="mailto:support@rockymountaintumbling.com" className="text-[#FF1494] hover:text-[#D1127A]">
                      support@rockymountaintumbling.com
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

export default BirthdayPartyRentals;