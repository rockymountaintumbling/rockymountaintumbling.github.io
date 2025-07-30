import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const levels = [
  {
    name: "Parent Assisted",
    path: "/classes/levels/parent-assisted",
    image: "/classes/parent-assisted.jpg",
    ageRange: "Ages 3 & Under",
    description: "An introduction to basic movements and coordination for our youngest athletes. Focus on fundamental motor skills, balance, and body awareness in a fun, engaging environment."
  },
  {
    name: "Level 2.5",
    path: "/classes/levels/level-2-5",
    image: "/classes/level-2-5.jpg",
    ageRange: "Ages 3+",
    description: "Perfect for those just starting their tumbling journey. Learn basic skills like forward rolls, handstands, and cartwheels while building strength and flexibility."
  },
  {
    name: "Level 3",
    path: "/classes/levels/level-3",
    image: "/classes/level-3.jpg",
    ageRange: "Ages 3+",
    description: "Build upon basic skills to master more advanced techniques including back walkovers, front walkovers, and back handsprings. Prerequisites required."
  },
  {
    name: "Level 3.5",
    path: "/classes/levels/level-3-5",
    image: "/classes/level-3-5.jpg",
    ageRange: "Ages 6+",
    description: "Perfect Level 3 skills while preparing for advanced techniques. Focus on mastering back-handsprings and limber skills with excellent form and consistency."
  },
  {
    name: "Level 4",
    path: "/classes/levels/level-4",
    image: "/classes/level-4.jpg",
    ageRange: "Ages 6+",
    description: "Master fundamental skills independently while learning continuous back-handsprings. Focus on building strength and technique for advanced tumbling sequences."
  },
  {
    name: "Level 4.5",
    path: "/classes/levels/level-4-5",
    image: "/classes/level-4-5.jpg",
    ageRange: "Ages 6+",
    description: "Perfect continuous back-handsprings and begin tuck progressions on trampoline. Focus on mastering Level 4 skills while preparing for advanced techniques."
  },
  {
    name: "Level 5",
    path: "/classes/levels/level-5",
    image: "/classes/level-5.jpg",
    ageRange: "Ages 8+",
    description: "For experienced tumblers ready to perfect advanced skills like back tucks, layouts, and combination passes. Strong foundation in basic and intermediate skills required."
  },
  {
    name: "Level 6",
    path: "/classes/levels/level-6",
    image: "/classes/level-6.jpg",
    ageRange: "Ages 8+",
    description: "For experienced tumblers ready to perfect advanced skills like back tucks, layouts, and combination passes. Strong foundation in basic and intermediate skills required."
  },
  {
    name: "Level 7",
    path: "/classes/levels/level-7",
    image: "/classes/level-7.jpg",
    ageRange: "Ages 8+",
    description: "For experienced tumblers ready to perfect advanced skills like back tucks, layouts, and combination passes. Strong foundation in basic and intermediate skills required."
  },
  {
    name: "Level 8",
    path: "/classes/levels/level-8",
    image: "/classes/level-8.jpg",
    ageRange: "Ages 8+",
    description: "For experienced tumblers ready to perfect advanced skills like back tucks, layouts, and combination passes. Strong foundation in basic and intermediate skills required."
  },
  {
    name: "Adults Only",
    path: "/classes/levels/adults",
    image: "/classes/adults-only.jpg",
    ageRange: "Ages 18+",
    description: "Our Adults Only class provides a supportive and focused environment for adults to learn and progress in tumbling at their own pace."
  }
];

function TumblingLevels() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-2 text-gray-500">
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recreation Tumbling Programs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our recreation tumbling program offers progressive skill development for all ages and abilities. 
            Each level builds upon previous skills while introducing new challenges in a safe, supportive environment.
          </p>
        </div>

        {/* Level Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {levels.map((level, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="relative h-64">
                <img
                  src={level.image}
                  alt={level.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#FF1494] text-white px-3 py-1 rounded-full text-sm">
                  {level.ageRange}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{level.name}</h2>
                <p className="text-gray-600 mb-4">{level.description}</p>
                <Link
                  to={level.path}
                  className="inline-flex items-center text-[#FF1494] hover:text-[#D1127A] font-semibold"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">General Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comfortable athletic attire</li>
                <li>• Hair secured away from face</li>
                <li>• No jewelry</li>
                <li>• Water bottle</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Class Structure</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 55-minute classes</li>
                <li>• Maximum 8:1 student-to-coach ratio</li>
                <li>• Progressive skill development</li>
                <li>• Regular progress evaluations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <a 
            href="https://app.jackrabbitclass.com/regv2.asp?id=528475"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF1494] text-white px-8 py-3 rounded-full text-lg hover:bg-[#D1127A] transition inline-block"
          >
            Start Your Tumbling Journey
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TumblingLevels;