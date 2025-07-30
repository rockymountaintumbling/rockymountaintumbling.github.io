import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ClassTemplateProps {
  title: string;
  heroImage: string;
  description: string;
  ageRange: string;
  prerequisites?: string[];
  objectives: string[];
  skills: string[];
  duration: string;
  classSize: string;
  attire: string[];
  equipment: string[];
  nextLevel?: {
    name: string;
    path: string;
  };
  previousLevel?: {
    name: string;
    path: string;
  };
}

function ClassTemplate({
  title,
  heroImage,
  description,
  ageRange,
  prerequisites,
  objectives,
  skills,
  duration,
  classSize,
  attire,
  equipment,
  nextLevel,
  previousLevel
}: ClassTemplateProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/tumbling/levels" className="flex items-center space-x-2 text-[#FF1494] hover:text-[#D1127A] transition">
                <ArrowLeft className="w-6 h-6" />
                <span>Back to Tumbling Levels</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <img 
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
              <div className="bg-[#FF1494] text-white px-4 py-1 rounded-full inline-block">
                {ageRange}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Information */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">About This Class</h2>
                <p className="text-gray-600 mb-6">{description}</p>
                
                {prerequisites && prerequisites.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      {prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Learning Objectives</h3>
                  <ul className="list-disc pl-5 text-gray-600">
                    {objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Skills Covered</h3>
                  <ul className="list-disc pl-5 text-gray-600">
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Related Classes */}
              {(previousLevel || nextLevel) && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">Related Classes</h2>
                  <div className="grid gap-4">
                    {previousLevel && (
                      <Link 
                        to={previousLevel.path}
                        className="block p-4 border rounded-lg hover:border-[#FF1494] transition"
                      >
                        <div className="text-sm text-gray-500">Previous Level</div>
                        <div className="font-semibold text-[#FF1494]">{previousLevel.name}</div>
                      </Link>
                    )}
                    {nextLevel && (
                      <Link 
                        to={nextLevel.path}
                        className="block p-4 border rounded-lg hover:border-[#FF1494] transition"
                      >
                        <div className="text-sm text-gray-500">Next Level</div>
                        <div className="font-semibold text-[#FF1494]">{nextLevel.name}</div>
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Class Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Duration</h3>
                    <p className="text-gray-600">{duration}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Class Size</h3>
                    <p className="text-gray-600">{classSize}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Required Attire</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      {attire.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Safety Equipment</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      {equipment.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href="https://app.jackrabbitclass.com/regv2.asp?id=528475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF1494] text-white px-8 py-3 rounded-full text-lg hover:bg-[#D1127A] transition inline-block w-full"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassTemplate;