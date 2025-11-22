import React from 'react';
import { DollarSign, Users, Clock, Award, ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function PriceCard({ title, price, description, features, icon: Icon, highlight = false }) {
  return (
    <div className={`rounded-2xl p-6 ${highlight ? 'bg-[#FF1494] text-white' : 'bg-white'} shadow-xl`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg ${highlight ? 'bg-white/10' : 'bg-[#FF1494]/10'}`}>
          <Icon className={`w-6 h-6 ${highlight ? 'text-white' : 'text-[#FF1494]'}`} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="mb-6">
        <div className="text-3xl font-bold mb-2">{price}</div>
        <p className={`${highlight ? 'text-white/90' : 'text-gray-600'}`}>{description}</p>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className={`mt-1 block w-2 h-2 rounded-full ${highlight ? 'bg-white' : 'bg-[#FF1494]'}`} />
            <span className={highlight ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackToHome = () => {
    window.history.replaceState(
      { from: location.pathname, scrollY: window.scrollY },
      ''
    );
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={handleBackToHome}
                className="flex items-center space-x-2 text-[#FF1494] hover:text-[#D1127A] transition"
              >
                <ArrowLeft className="w-6 h-6" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Choose the perfect program that fits your needs. All classes are taught by our expert coaches in our state-of-the-art facility.
          </p>
        </div>
      </div>

      {/* Main Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PriceCard
            title="Recreation Classes"
            price="$65/month"
            description="Perfect for beginners and intermediate athletes"
            icon={Users}
            features={[
              "Each additional hour: 25% off ($48.75/month)",
              "2nd student: 10% off ($58.50/month)",
              "3rd student: 40% off ($39/month)",
              "Flexible class schedules",
              "Expert instruction",
              "Safe and supportive environment"
            ]}
          />

          <PriceCard
            title="Competition Team"
            price="$160-$250/month"
            description="For dedicated athletes ready to compete"
            icon={Award}
            highlight={true}
            features={[
              "5 hours/week: $160/month",
              "7 hours/week: $200/month",
              "9 hours/week: $250/month",
              "Professional coaching",
              "Competition preparation",
              "Additional yearly fees apply"
            ]}
          />

          <PriceCard
            title="Personal Lessons"
            price="From $40/session"
            description="One-on-one instruction for rapid improvement"
            icon={Clock}
            features={[
              "Tumbling 30 minutes: $40",
              "Tumbling 60 minutes: $80",
              "Partner Stunting 30 min: $50",
              "Partner Stunting 60 min: $100",
              "Personalized attention",
              "No discounts applied"
            ]}
          />
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Payment Policies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Monthly tuition is due on the 1st class of each month</li>
                <li>• Late fees apply after the 14th of the month ($10)</li>
                <li>• Registration fee: $30 (annual every September)</li>
                <li>• Family registration discounts available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Class Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Classes run monthly</li>
                <li>• Two week cancellation policy</li>
                <li>• Student-to-coach ratio: 8:1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;