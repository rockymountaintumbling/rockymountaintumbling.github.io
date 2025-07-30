import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, ChevronDown } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What should my athlete wear to class?",
      answer: "Athletes should wear fitted athletic wear or a leotard. Loose clothing is not permitted for safety reasons. Hair must be secured away from the face, and no jewelry is allowed. Athletes tumble barefoot."
    },
    {
      question: "Do you offer trial classes?",
      answer: "Yes! We offer a free trial class for new students to experience our program and meet our coaches. Contact us to schedule your trial class."
    },
    {
      question: "How do I know which class level is right for my child?",
      answer: "Our experienced coaches will evaluate your child's current skill level and place them in the appropriate class. We ensure each athlete is placed where they will be both challenged and successful."
    },
    {
      question: "Are there registration fees?",
      answer: "Yes, there is an annual registration fee of $30 due every September (non-refundable and not prorated). Family registration discounts are available."
    },
    {
      question: "How does billing work?",
      answer: "Monthly tuition is due on the 1st class of each month. A late fee of $10 applies after the 14th of the month. We offer various family discounts and multi-class discounts."
    },
    {
      question: "Can parents watch classes?",
      answer: "Yes! We have a designated viewing area where parents can watch their athletes train. We encourage parents to be part of their athlete's journey while maintaining a distraction-free training environment."
    },
    {
      question: "What is a rod floor?",
      answer: (
        <>
          A rod floor, also known as a spring floor, uses fiberglass rods or springs underneath the surface to provide extra bounce and shock absorption. This specialized equipment helps athletes perform skills safely while reducing impact on their joints.
          
          <div className="mt-4">
            <Link to="/resources/rod-floor" className="text-[#FF1494] hover:text-[#D1127A] font-semibold">
              Learn more about our rod floor
            </Link>
          </div>
        </>
      )
    },
    {
      question: "What is a Double Mini?",
      answer: (
        <>
          A Double Mini is a specialized piece of gymnastics equipment that combines a trampoline and dismount area. It's shorter than a traditional trampoline and allows athletes to perform consecutive skills with controlled landings.
          
          <div className="mt-4">
            <Link to="/resources/double-mini" className="text-[#FF1494] hover:text-[#D1127A] font-semibold">
              Learn more about our Double Mini
            </Link>
          </div>
        </>
      )
    },
    {
      question: "What is a trampoline?",
      answer: (
        <>
          A competition trampoline is a highly engineered piece of equipment that uses a strong fabric bed attached to a frame by springs. It provides consistent bounce and is used for both training and competition. Our facility uses professional-grade trampolines with proper safety equipment and spotting.
          
          <div className="mt-4">
            <Link to="/resources/trampoline" className="text-[#FF1494] hover:text-[#D1127A] font-semibold">
              Learn more about our trampolines
            </Link>
          </div>
        </>
      )
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B6009E]/5 to-gray-50">
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#FF1494] mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our programs and facility.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left p-6 focus:outline-none"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-[#FF1494]">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-[#FF1494] transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div
                    className={`mt-2 text-gray-600 overflow-hidden transition-all duration-200 ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white rounded-xl shadow-md p-8">
            <p className="text-lg text-gray-600 mb-4">
              Have additional questions? We're here to help!
            </p>
            <a 
              href="tel:+18016866731"
              className="inline-flex items-center text-[#FF1494] hover:text-[#D1127A] text-xl font-semibold"
            >
              <Phone className="w-6 h-6 mr-2" />
              (801) 686-6731
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;