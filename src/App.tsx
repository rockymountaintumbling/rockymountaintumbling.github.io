import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Award, Calendar, MapPin, Phone, Mail, Facebook, Instagram, Clock, Medal, Shield, Star, ArrowUp, Menu, X, ChevronDown, Quote } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Staff from './components/Staff';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import OpenGym from './components/OpenGym';
import RecreationCheer from './components/classes/RecreationCheer';
import CompetitionTumbling from './components/classes/CompetitionTumbling';
import PrivateLessons from './components/classes/PrivateLessons';
import PrivateStunting from './components/classes/PrivateStunting';
import TumblingLevels from './components/classes/TumblingLevels';
import HolidayHours from './components/HolidayHours';
import RodFloor from './components/resources/RodFloor';
import DoubleMini from './components/resources/DoubleMini';
import Trampoline from './components/resources/Trampoline';
import ParentAssisted from './components/classes/levels/ParentAssisted';
import Level2_5 from './components/classes/levels/Level2-5';
import Level3 from './components/classes/levels/Level3';
import Level3_5 from './components/classes/levels/Level3-5';
import Level4 from './components/classes/levels/Level4';
import Level4_5 from './components/classes/levels/Level4-5';
import Level5 from './components/classes/levels/Level5';
import Level6 from './components/classes/levels/Level6';
import Level7 from './components/classes/levels/Level7';
import Level8 from './components/classes/levels/Level8';
import Adults from './components/classes/levels/Adults';

function MoreDropdown({ isMobile = false, onItemClick = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (url) => {
    onItemClick();
    setIsOpen(false);
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      navigate(url);
    }
  };

  const items = [
    { label: 'Our Staff', url: '/staff' },
    { label: 'Pricing', url: '/pricing' },
    { label: 'Pro Shop', url: 'https://rmtwear.com/' },
    { label: 'Holiday Hours', url: '/holiday-hours' },
    { label: 'FAQ', url: '/faq' },
    { label: 'Open Gym', url: '/open-gym' },
    { label: 'Preschool', url: 'https://www.rockymountainlearningacademy.com/' },
  ];

  if (isMobile) {
    return (
      <div className="w-full text-center">
        <button
          onClick={toggleDropdown}
          className="text-xl text-gray-700 hover:text-[#FF1494] flex items-center justify-center w-full"
        >
          <span>More</span>
          <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="mt-2 space-y-4">
            {items.map((item, index) => (
              <a
                key={index}
                onClick={() => handleItemClick(item.url)}
                className="block text-xl text-gray-700 hover:text-[#FF1494] text-center"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 hover:text-[#FF1494] focus:outline-none"
      >
        <span>More</span>
        <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          {items.map((item, index) => (
            <a
              key={index}
              onClick={() => handleItemClick(item.url)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#FF1494] cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top fixed bottom-8 right-8 bg-[#FF1494]/80 hover:bg-[#FF1494] text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? 'visible' : ''
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}

function ReviewCard({ review, onSlideChange }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const shouldTruncate = review.text.length > maxLength;
  const displayText = shouldTruncate && !isExpanded 
    ? `${review.text.slice(0, maxLength)}...` 
    : review.text;

  useEffect(() => {
    setIsExpanded(false);
  }, [onSlideChange]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-[#FF1494] fill-current" />
        ))}
      </div>
      <div className="flex-grow">
        <p className="text-gray-700 text-center mb-4 italic">{displayText}</p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#FF1494] hover:text-[#D1127A] text-sm font-medium text-center w-full"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
      <p className="text-center text-gray-900 font-semibold mt-4">— {review.name}</p>
    </div>
  );
}

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuRef, setMenuRef] = useState<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 16 }
      },
      '(max-width: 1024px)': {
        slides: { perView: 2, spacing: 16 }
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (to: string) => {
    window.history.replaceState(
      { from: location.pathname, scrollY: window.scrollY },
      ''
    );
    navigate(to);
  };

  useEffect(() => {
    const state = window.history.state;
    if (state?.from && state.scrollY) {
      window.scrollTo(0, state.scrollY);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef && !menuRef.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, menuRef]);

  const reviews = [
    {
      name: "Kaitlin Starr",
      text: "I have been tumbling here for several years!! All the coaches are so amazing and care about all of their athletes. They all work so hard on helping each and everyone improve, and push themselves to their best ability. They are such great examples to all of the athletes. Being on the tumbling team, I've made so many amazing friendships and learned so many new skills. I couldn't recommend this gym more!!"
    },
    {
      name: "Em Harrison",
      text: "My two daughters have been tumbling here for almost four years. The coaches are great! The owners are friendly and kind. Coaches Kaylee, Kylee, Mike and Mark were wonderful with my kids. The rest of the coaches are just as great. My daughters have progressed over the years more than I could have imagined. Great environment for your children!"
    },
    {
      name: "Amy Barnes",
      text: "This place is great and the owners are the absolute best!"
    },
    {
      name: "Ryan Drysdale",
      text: "Great place for tumbling and cheer. My daughter loves it!!"
    },
    {
      name: "Keara Naisbitt",
      text: "If you are looking for a great place for your kids to learn and have fun, this is the place! We love all of the coaches! They are amazing! My daughters confidence is soaring and I love watching her interact with everyone. She's never been happier! 100% recommend everyone to come to Rocky Mountain!"
    },
    {
      name: "Roger Cuellar",
      text: "Open gym is fun to go to good coaches that give you advice and good service."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                <img src="/logo.png" alt="Rocky Mountain Tumbling" className="h-12 w-auto mr-3" />
                <h1 className="text-2xl font-bold text-[#FF1494]">
                  <span className="md:hidden">RMT</span>
                  <span className="hidden md:inline">Rocky Mountain Tumbling</span>
                </h1>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#FF1494]">Home</a>
              <a href="#classes" className="text-gray-700 hover:text-[#FF1494]">Classes</a>
              <a href="#contact" className="text-gray-700 hover:text-[#FF1494]">Contact</a>
              <MoreDropdown />
              <a 
                href="https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgId=528475"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF1494] text-white px-6 py-2 rounded-full hover:bg-[#D1127A] transition"
              >
                Parent Portal
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-[#B6009E] focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div 
            ref={setMenuRef}
            className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <a 
                href="#home" 
                onClick={(e) => {
                  closeMenu();
                  setTimeout(() => {
                    const element = document.getElementById('home');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }} 
                className="text-xl text-gray-700 hover:text-[#FF1494]"
              >
                Home
              </a>
              <a 
                href="#classes" 
                onClick={(e) => {
                  closeMenu();
                  setTimeout(() => {
                    const element = document.getElementById('classes');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }} 
                className="text-xl text-gray-700 hover:text-[#FF1494]"
              >
                Classes
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  closeMenu();
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }} 
                className="text-xl text-gray-700 hover:text-[#FF1494]"
              >
                Contact
              </a>
              <MoreDropdown isMobile={true} onItemClick={closeMenu} />
              <a 
                href="https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgId=528475"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="bg-[#FF1494] text-white px-6 py-3 rounded-full hover:bg-[#D1127A] transition text-xl w-4/5 text-center"
              >
                Parent Portal
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-20">
        <div className="relative h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/30 z-10" />
          <img 
            src="/hero.jpg"
            alt="Gymnast performing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <h2 className="text-5xl font-bold mb-4">Where Champions Begin!</h2>
              <p className="text-xl mb-8">Join Utah's premier tumbling family.</p>
              <a 
                href="https://app.jackrabbitclass.com/regv2.asp?id=528475"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF1494] text-white px-8 py-3 rounded-full text-lg hover:bg-[#D1127A] transition inline-block"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Rocky Mountain Tumbling & Cheer, we are committed to providing top-tier tumbling and cheerleading instruction within our expansive 19,000+ square foot facility in Clearfield, Utah. As a USA Gymnastics certified club, our experienced coaches deliver personalized training that fosters both skill development and personal growth. We pride ourselves on cultivating an inclusive and supportive environment where every athlete feels valued and inspired to achieve their best.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/about-us.jpg"
                  alt="Our Facility"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-700">Check us out on:</p>
                <a href="https://www.facebook.com/profile.php?id=100056898385231#" target="_blank" rel="noopener noreferrer" className="text-[#FF1494] hover:text-[#D1127A] transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/rockymountaintumbling/" target="_blank" rel="noopener noreferrer" className="text-[#FF1494] hover:text-[#D1127A] transition">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <div className="text-center">
                <Link to="/staff" className="bg-[#FF1494] text-white px-6 py-2 rounded-full hover:bg-[#D1127A] transition inline-block">
                  Meet Our Expert Staff
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                    <Medal className="w-6 h-6 text-[#FF1494]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professionally Certified</h3>
                    <p className="text-gray-600">
                      As a USA Gymnastics certified club, our experienced coaches are dedicated to nurturing each athlete's growth and performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-[#FF1494]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Training</h3>
                    <p className="text-gray-600">
                      Our 8:1 student-to-coach ratio allows for tailored instruction, helping each athlete thrive within a collaborative and supportive team environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF1494]/10 p-3 rounded-lg">
                    <Star className="w-6 h-6 text-[#FF1494]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Elite Equipment</h3>
                    <p className="text-gray-600">
                      Train on professional-grade equipment including Russian rod floor, rod floors, tumble tracks, dead mats, trampolines, and double mini tramps - everything you need to perfect your skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="classes" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Classes</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We offer a diverse range of classes tailored to meet the needs of every athlete, from beginners just starting to elite competitors striving for excellence. Our programs are designed to develop fundamental skills, enhance techniques, and build confidence in a supportive and dynamic environment.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Recreation Tumbling",
                image: "/classes/rec-tumbling.jpg",
                description: "Whether you're just starting out or looking to refine advanced techniques, our tumbling classes offer a supportive environment to develop and enhance your skills.",
                link: "/tumbling/levels"
              },
              {
                title: "Recreation Cheer",
                image: "/classes/rec-cheer.jpg",
                description: "Dynamic introduction to cheerleading, focusing on foundational skills such as stunts, jumps, motions, and tumbling.",
                link: "/classes/recreation-cheer"
              },
              {
                title: "Competition Tumbling",
                image: "/classes/comp-team.jpg",
                description: "Designed for athletes ready to push their limits, our advanced program focuses on mastering complex techniques across multiple disciplines, building a strong foundation for competitive success.",
                link: "/classes/competition-tumbling"
              },
              {
                title: "Private Lessons",
                image: "/classes/private-lessons.jpg",
                description: "Dedicated one-on-one coaching tailored to an athlete's specific goals, providing focused instruction that enhances skill development and builds confidence.",
                link: "/classes/private-tumbling"
              },
              {
                title: "Private Stunting",
                image: "/classes/private-stunting.jpg",
                description: "Our private stunting sessions offer focused, one-on-one instruction to help you master partner stunts and improve your technique.",
                link: "/classes/private-stunting"
              },
              {
                title: "Preschool",
                image: "/classes/class-preschool.jpg",
                description: "Our preschool program combines hands-on educational activities with play-based learning to foster creativity, imagination, and problem-solving skills.",
                link: "https://www.rockymountainlearningacademy.com/"
              }
            ].map((className, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
                <img 
                  src={className.image} 
                  alt={className.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{className.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{className.description}</p>
                  <div className="text-center">
                    {className.title === "Preschool" ? (
                      <a 
                        href={className.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FF1494] text-white px-6 py-2 rounded-full hover:bg-[#D1127A] transition inline-block"
                      >
                        Learn More
                      </a>
                    ) : (
                      <Link 
                        to={className.link}
                        className="bg-[#FF1494] text-white px-6 py-2 rounded-full hover:bg-[#D1127A] transition inline-block"
                      >
                        Learn More
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Community Says</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our amazing community has to say about their experience at Rocky Mountain Tumbling & Cheer.
            </p>
          </div>
          <div ref={sliderRef} className="keen-slider">
            {reviews.map((review, index) => (
              <div key={index} className="keen-slider__slide">
                <ReviewCard review={review} onSlideChange={currentSlide} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 flex flex-col items-center gap-4">
            <a 
              href="https://www.google.com/search?sca_esv=d41d77eb53f75a2f&biw=1670&bih=1306&sxsrf=AHTn8zqz3p5q0MsZ7VprG8mbfI7-4l4MCw:1746975578149&q=rocky+mountain+cheer+and+tumbling&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBkzPWUS0OtApxR2914vrjk7XZXfnfKsaRZouQANLhmphGHpLxjA1Sl8GeNmsvSfKf8qmSAGXZ1tKaO78Wqyn2C8pebgEZf3bnZ5uqHts-cTYLy79MwL6B-Ls9h3ee2Krmi5qxUEUUfjBOzkizzubydNtmEkZe4TSXFo9nLT-F1G7ujPE8XPOsTe94hE1WN3JN7WRiv8&sa=X&ved=2ahUKEwirhZGW15uNAxU4OEQIHYrHAAEQ0pQJegQIDxAB#lrd=0x87530495183e2001:0x3ea95ef9c79295ea,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#FF1494] hover:text-[#D1127A] font-semibold"
            >
              Read More Reviews on Google
              <ChevronDown className="w-4 h-4 ml-1 transform -rotate-90" />
            </a>
            <a 
              href="https://www.google.com/search?sca_esv=d41d77eb53f75a2f&biw=1670&bih=1306&sxsrf=AHTn8zqz3p5q0MsZ7VprG8mbfI7-4l4MCw:1746975578149&q=rocky+mountain+cheer+and+tumbling&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBkzPWUS0OtApxR2914vrjk7XZXfnfKsaRZouQANLhmphGHpLxjA1Sl8GeNmsvSfKf8qmSAGXZ1tKaO78Wqyn2C8pebgEZf3bnZ5uqHts-cTYLy79MwL6B-Ls9h3ee2Krmi5qxUEUUfjBOzkizzubydNtmEkZe4TSXFo9nLT-F1G7ujPE8XPOsTe94hE1WN3JN7WRiv8&sa=X&ved=2ahUKEwirhZGW15uNAxU4OEQIHYrHAAEQ0pQJegQIDxAB#lrd=0x87530495183e2001:0x3ea95ef9c79295ea,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#FF1494] hover:text-[#D1127A] font-semibold"
            >
              Share Your Experience
              <ChevronDown className="w-4 h-4 ml-1 transform -rotate-90" />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <Phone className="w-5 h-5 text-[#FF1494] mr-2" />
                  <a href="tel:+18016866731" className="hover:text-[#FF1494] transition">(801) 686-6731</a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 text-[#FF1494] mr-2" />
                  <a href="mailto:support@rockymountaintumbling.com" className="hover:text-[#FF1494] transition">support@rockymountaintumbling.com</a>
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#FF1494] mr-2" />
                  <a href="https://maps.google.com/?q=269+E.+200+S.+Clearfield,+UT+84015" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF1494] transition">269 E. 200 S. Clearfield, UT 84015</a>
                </p>
                <div className="flex space-x-4 mt-6">
                  <a href="https://www.facebook.com/profile.php?id=100056898385231#" target="_blank" rel="noopener noreferrer" className="text-[#FF1494] hover:text-[#D1127A]">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/rockymountaintumbling/" target="_blank" rel="noopener noreferrer" className="text-[#FF1494] hover:text-[#D1127A]">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF1494] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF1494] focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#FF1494] focus:border-transparent h-32"></textarea>
                </div>
                <button className="bg-[#FF1494] text-white px-6 py-2 rounded-full hover:bg-[#D1127A] transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Rocky Mountain Tumbling</h3>
              <p className="text-gray-400">Empowering athletes since 2005</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li>
                  <a 
                    href="#classes" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('classes');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Classes
                  </a>
                </li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Open Desk Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday: 6pm - 8pm</li>
                <li>Tuesday: 6pm - 8pm</li>
                <li>Wednesday: 5pm - 7pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Rocky Mountain Tumbling. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/open-gym" element={<OpenGym />} />
      <Route path="/holiday-hours" element={<HolidayHours />} />
      <Route path="/classes/recreation-cheer" element={<RecreationCheer />} />
      <Route path="/classes/competition-tumbling" element={<CompetitionTumbling />} />
      <Route path="/classes/private-tumbling" element={<PrivateLessons />} />
      <Route path="/classes/private-stunting" element={<PrivateStunting />} />
      <Route path="/tumbling/levels" element={<TumblingLevels />} />
      <Route path="/resources/rod-floor" element={<RodFloor />} />
      <Route path="/resources/double-mini" element={<DoubleMini />} />
      <Route path="/resources/trampoline" element={<Trampoline />} />
      <Route path="/classes/levels/parent-assisted" element={<ParentAssisted />} />
      <Route path="/classes/levels/level-2-5" element={<Level2_5 />} />
      <Route path="/classes/levels/level-3" element={<Level3 />} />
      <Route path="/classes/levels/level-3-5" element={<Level3_5 />} />
      <Route path="/classes/levels/level-4" element={<Level4 />} />
      <Route path="/classes/levels/level-4-5" element={<Level4_5 />} />
      <Route path="/classes/levels/level-5" element={<Level5 />} />
      <Route path="/classes/levels/level-6" element={<Level6 />} />
      <Route path="/classes/levels/level-7" element={<Level7 />} />
      <Route path="/classes/levels/level-8" element={<Level8 />} />
      <Route path="/classes/levels/adults" element={<Adults />} />
    </Routes>
  );
}

export default App;