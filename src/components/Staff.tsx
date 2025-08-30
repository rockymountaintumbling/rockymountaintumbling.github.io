import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import OptimizedImage from './ImageOptimizer';

const staffMembers = [
  {
    name: "Janelle Vettori",
    role: "Owner | Head Coach | Tumbling & Trampoline Specialist",
    experience: "28+ years in tumbling & trampoline | 19 years in cheer | 24 years coaching",
    image: "/staff/vettori-jannelle.jpg",
    bio: "With nearly three decades of experience in tumbling and trampoline and 24 years as a coach, Janelle Vettori is a pillar of excellence, leadership, and heart in the sport. She has coached thousands of athletes—including national and world champions—and continues to be inspired by the journey of each individual athlete she works with. Janelle's coaching philosophy is rooted in joy, inclusion, and community. She loves the positivity and encouragement that fill the gym and believes RMT is a place where everyone belongs. Her passion is not only for perfecting skills, but for lifting spirits and building strong, confident individuals. As a USA Gymnastics professional coach, judge, and JumpStart judge, Janelle brings unmatched technical knowledge—but it's her deep care for her athletes and their families that sets her apart. Having once been an athlete herself, she knows the power of this sport to shape lives, and she considers it a true blessing to guide others through it. ",
    achievements: [
      "Sportsmanship of the Year Award",
      "USA Gymnastics Judge",
      "JumpStart Judge",
      "National & World Champion Coach"
    ]
  },
  {
    name: "Leo",
    role: "Owner | Coach Mentor",
    experience: "15+ years in business | 10 years coaching",
    image: "/staff/vettori-leo.jpg",
    bio: "With over 10 years of experience dedicated to coaching and 15 years leading transformational programs, Leo Vettori has built a career rooted in one powerful passion: making a meaningful difference in people's lives. Driven by a deep belief in human potential, Leo's work has impacted tens of thousands of individuals across multiple countries, sparking change that ripples far beyond the coaching room. Whether through one-on-one mentorship or large-scale workshops, Leo's approach blends wisdom, clarity, and heart. But ask Leo what he's most proud of, and the answer is simple: relationships. 'I consider myself rich—rich in relationships,'' he says. It's this relational depth that makes his coaching not only effective, but unforgettable."
  },
  {
    name: "Kym Jones",
    role: "Head Tumbling Coach",
    experience: "14+ years as an athlete | 15 years coaching",
    image: "/staff/jones-kym.jpg",
    bio: "Kym Jones has dedicated her life to tumbling—starting at age 4 and continuing through 14 years as a competitive athlete and 15 years as a coach. With experience in power tumbling, cheer, and dance-based tumbling, Kym brings a versatile and well-rounded approach to athlete development. Kym has coached national champions and helped countless athletes overcome mental blocks, build confidence, and find purpose in their progress. Her deep understanding of the sport—from competition to judging—makes her a trusted leader at every level. She's also a certified personal trainer, equipping her to strengthen athletes physically so they can safely and successfully meet the demands of their sport. What Kym loves most about RMT is the culture—one built on growth, grit, and heart. She's passionate about raising strong athletes who are not only technically skilled but mentally tough, determined, and inspired to chase their dreams. Whether an athlete's goal is competition, performance, or personal progress, Kym's coaching style meets them where they are—and helps them get where they want to go.",
    achievements: [
      "National Champion Coach",
      "CPR Certified",
      "USA Gymnastics Member & Judge"
    ]
  },
  {
    name: "Jerri Lynn",
    role: "Office Manager",
    experience: "8+ years as a gym mom | 5 years office manager | 8+ years certified judge with USA Gymnastics",
    image: "/staff/smith-jerriLynn.jpg",
    bio: "Jerri Lynn Smith has been part of the tumbling world for over eight years—and her impact goes far beyond the sidelines. What began with her daughter's love for tumbling quickly turned into a personal passion, leading her to become a USA Gymnastics Category 1 Tumbling Judge, a role she's held for over three years. For the past five years, Jerri Lynn has also served as RMT's Office Manager, working closely with gym leadership to create a warm, welcoming environment for athletes and their families. With her background as a long-time gym mom, she brings heart, understanding, and firsthand perspective to everything she does. To Jerri Lynn, RMT isn't just a gym—it's family. From the moment she stepped inside, she felt the love and support that defines this community. Today, she works to make sure every new athlete and family experiences that same sense of belonging and care."
  },
  {
    name: "Mike Fisher",
    role: "Team/Rec Tumbling Coach",
    experience: "13+ years in the sport | 7 years coaching",
    image: "/staff/fisher-mike.jpg",
    bio: "With over a decade of experience in the sport and seven years as a coach, Mike Fisher brings both knowledge and a sharp sense of humor to the gym. His love for the people, the sport, and the culture of RMT shines through in everything he does. Mike is known for creating a fun, relaxed, and engaging environment while still pushing athletes to be their best. He doesn't take himself too seriously—but he does take coaching seriously, especially when it comes to helping athletes grow in skill and confidence. As Mike puts it: \"Whatever I lack in coaching abilities, I make up for with sarcasm.\" Luckily, he brings plenty of both to the floor—earning laughs, trust, and progress from every athlete he works with."
  },
  {
    name: "Peyton Smith",
    role: "Team/Rec Tumbling Coach",
    experience: "13+ years as an athlete | Coaching for almost 3 years",
    image: "/staff/smith-peyton.jpg",
    bio: "Peyton Smith brings over a decade of experience in tumbling and nearly three years of coaching to the RMT family. A two-time national runner-up, Peyton knows what it takes to compete at a high level—and now shares that passion and knowledge with the next generation of athletes. What Peyton loves most about RMT is the supportive environment and the strong relationships formed within the gym. For Peyton, RMT isn't just a workplace—it's a second home. As a coach, Peyton is known for building meaningful connections with athletes and helping them understand skills on a deeper level. By sharing personal experiences and tailoring instruction to each individual, Peyton creates a positive and impactful learning environment where athletes can thrive.",
    achievements: [
      "2× National Championships Runner-Up"
    ]
  },
  {
    name: "Kaylee Overby",
    role: "Rec Tumbling/Cheer Coach",
    experience: "18 years in the sport | 10 years All-Star Cheer | 3 years High School Cheer | 5 years College Cheer | 2 years Jazz Stunt Team",
    image: "/staff/overby-kalee.jpg",
    bio: "Kaylee Overby brings nearly two decades of cheer and tumbling experience to the floor, with a decorated background that includes three NCA College National Championship titles. Her wide range of experience—from All-Star to college cheer and stunt—gives her a deep understanding of what it takes to succeed at every level. What Kaylee loves most about RMT is the family environment built by the coaches and athletes. It's a space where athletes feel supported, safe, and confident to push themselves—and Kaylee thrives on helping them do just that. She is passionate about developing not just strong skills, but strong mindsets. Her coaching focuses on goal-setting, self-belief, and stepping outside comfort zones. Kaylee believes that when athletes trust themselves and commit to the process, there's nothing they can't achieve.",
    achievements: [
      "3× NCA College National Champion"
    ]
  },
  {
    name: "Tayla Jones",
    role: "Team Tumbling Coach",
    experience: "11+ years in the sport | 2 years coaching",
    image: "/staff/jones-tayla.jpg",
    bio: "Tayla Jones brings high energy, big laughs, and a true love for tumbling to every class she coaches. With over a decade of experience in the sport and top-10 national rankings in power tumbling, she knows how to train hard while keeping the fun alive. Tayla sees RMT as more than just a gym—it's her family. That same loving, supportive vibe shines through in her coaching. Her outgoing personality makes her easy to connect with, and her coaching style is full of positivity, praise, and just the right amount of sass. Known for saying, \"I'm your friend, not your teacher… but do listen, lol,\" Tayla keeps things upbeat and effective. She helps athletes improve quickly by focusing on both fun and technique—building strong skills and strong relationships along the way.",
    achievements: [
      "Top-10 National Rankings (Power Tumbling)",
      "Early Childhood Education 1, 2, & 3",
      "Child Development"
    ]
  },
  {
    name: "Carley Jensen",
    role: "Rec Tumbling Coach",
    experience: "6+ years coaching tumbling | 3+ years overall coaching experience",
    image: "/staff/jensen-carley.jpg",
    bio: "Carley Jensen brings both passion and precision to her coaching. With six years of experience in tumbling and a background as both a coach and a parent, she has a unique perspective that helps her connect deeply with every athlete. Known for her calm demeanor and technical eye, Carley focuses on the small details that lead to big progress. What truly sets Carley apart is her heart. She lives the RMT spirit—celebrating each athlete's victories and offering unwavering support through challenges. Her love for the sport and dedication to her athletes shine in every class she teaches. For Carley, coaching isn't just about skills—it's about building confidence, resilience, and lifelong connections.",
    achievements: [
      "CPR Certified"
    ]
  },
  {
    name: "Brie Spencer",
    role: "Rec Tumbling Coach",
    experience: "Athlete from age 3 to 15 | Coaching since 2019",
    image: "/staff/spencer-brie.jpg",
    bio: "Brie Spencer's journey in tumbling began at just three years old with a \"Mommy and Me\" class—and she's been passionate about the sport ever since. After years of competition and cheering for Sunset Junior High, where she helped her team win State in 2017–2018, Brie transitioned into coaching in 2019. In December 2024, she returned to the gym to continue sharing her love for tumbling by coaching one night a week. For Brie, RMT is more than just a gym—it's home. Growing up in a similar environment, she deeply values the welcoming, supportive culture that RMT fosters. She believes in building more than just skills; she focuses on creating lasting connections with her athletes, celebrating their wins both in and out of the gym. Brie\'s coaching stands out because of her genuine care and joy in the work. She treats every athlete like one of her own, creating a fun, encouraging space where athletes feel valued, heard, and inspired to grow. To her, coaching isn't just about progression—it\'s about building confidence, relationships, and a lifelong love of the sport."
  },
  {
    name: "Kyara Palafox",
    role: "Rec Tumbling/Cheer Coach",
    experience: "4+ years as a cheerleader/tumbler | 2 years coaching experience",
    image: "/staff/palafox-kyara.jpg",
    bio: "Kyara Palafox is driven by a deep commitment to growth—both in her athletes and in herself. With a background in cheer and tumbling and two All-American honors, she brings experience, enthusiasm, and high standards to every class. Kyara thrives in RMT's family-like environment and works hard to contribute to the culture of constant improvement and support. Her coaching style is rooted in love, positivity, and structure. She helps athletes develop not just physical skills, but also discipline, emotional regulation, and confidence. What sets Kyara apart is her wholehearted investment in her athletes. She treats each one as her own, holding them to high expectations while always offering compassion and encouragement. Her mission is clear: to guide every athlete toward progress—with heart, hustle, and joy.",
    achievements: [
      "CPR Certified",
      "Health Screening Certified"
    ]
  },
  {
    name: "Karli Freeman",
    role: "Rec Tumbling Coach",
    experience: "13+ years in the sport | 2 years coaching experience",
    image: "/staff/freeman-karli.jpg",
    bio: "Karli Freeman brings over a decade of experience in the sport and a strong passion for athlete wellness. She believes in prioritizing not just skill progression, but also the mental happiness and personal growth of every athlete she works with. With a natural ability to connect with others, Karli creates a welcoming and supportive atmosphere in her classes. Her background in healthcare and people-first approach make her especially attuned to the needs of her athletes, both on and off the mat. Karli is committed to helping each athlete succeed in a way that's healthy, balanced, and empowering—and her positive energy makes her a valued part of the RMT team.",
    achievements: [
      "CNA (Certified Nursing Assistant)"
    ]
  },
  {
    name: "Kambree Kinghorn",
    role: "Rec Tumbling/Cheer Coach",
    experience: "7+ years tumbling | 5 years cheer | 1 year coaching",
    image: "/staff/kinghorn-kambree.jpg",
    bio: "Kambree Kinghorn brings a strong background in both tumbling and cheer, along with a fun, energetic presence that lights up every class. With seven years of tumbling and five years of cheer experience, she understands the sport from the inside out—and knows how to make it exciting and rewarding for her athletes. Kambree loves the positive, welcoming environment at RMT and works hard to reflect that same energy in her coaching. She's outgoing, encouraging, and knows how to connect with athletes to bring out their best. Her classes are full of enthusiasm, support, and just the right amount of challenge. Whether she's helping athletes build skills or boost their confidence, Kambree leads with heart and always makes sure her athletes are having fun along the way."
  },
  {
    name: "Isaac Wright",
    role: "Rec Tumbling Coach",
    experience: "Athlete since 2020 | Coaching since December 2023",
    image: "/staff/wright-isaac.jpg",
    bio: "Isaac Wright started his tumbling journey at the age of 14 and quickly rose through the ranks, eventually competing at Nationals and earning 5th place in tumbling. Now, with a year and a half of coaching experience, he's passionate about giving back to the sport that shaped him. What Isaac loves most about RMT is the strong sense of community. He remembers starting out as a shy athlete and being welcomed with open arms—and now he strives to create that same supportive environment for his athletes. Isaac is a thoughtful and adaptable coach. He listens closely to each athlete's needs and learning style, always ready to adjust his approach to help them succeed. Whether it's breaking down a skill in a new way or offering just the right encouragement, Isaac is committed to helping every athlete grow in both skill and confidence.",
    achievements: [
      "5th place at Nationals for Tumbling & Tramp"
    ]
  },
  {
    name: "Tiyanna Doxey",
    role: "Rec Tumbling/Cheer Coach",
    experience: "13+ years tumbling | 5+ years cheer | 1 year coaching ",
    image: "/staff/doxey-tiyanna.jpg",
    bio: "Tiyanna Doxey brings a powerful blend of experience, leadership, and heart to her role as a coach at RMT. With 13 years in tumbling and 5 years in cheer, she understands the athlete journey from every angle—and uses that insight to connect with and inspire her athletes. As a former captain of both her junior high and high school cheer teams, Tiyanna knows how to lead with confidence and purpose. She brings that same energy to her coaching, focusing on building trust, encouraging growth, and creating a strong, supportive team dynamic. What Tiyanna loves most about RMT is the culture—the kindness, encouragement, and sense of community that makes it feel like a second home. She's passionate about helping athletes feel seen, supported, and celebrated, no matter where they are in their journey. For her, every win—big or small—is worth cheering for.",
    achievements: [
      "Former Junior High & High School Cheer Captain"
    ]
  },
  {
    name: "Sophia Jensen",
    role: "Rec Tumbling Coach",
    experience: "6+ years in the sport | 2+ years coaching experience",
    image: "/staff/jensen-sophia.jpg",
    bio: "Sophia Jensen brings energy, empathy, and a deep love for the sport to every class she teaches. Her passion is infectious, and she strives to create a supportive and uplifting environment where every athlete feels seen, heard, and valued. Sophia focuses her coaching on both technique and emotional growth. She encourages her athletes to reach their full potential while also giving them the space to process and express their emotions—whether it's excitement, nerves, or anything in between. Her attention to detail and emphasis on fundamentals help her athletes build strong, clean skills with confidence. Sophia's genuine care and enthusiasm make her a positive force in the gym, and it shows in the smiles and progress of every athlete she works with."
  },
  {
    name: "Nilo Da Silva",
    role: "Rec Tumbling Coach",
    experience: "7+ years as an athlete | 1 year coaching experience",
    image: "/staff/dasilva-nilo.jpg",
    bio: "Nilo Da Silva brings firsthand experience and a deep understanding of the sport to his coaching. With seven years as an athlete, he knows what it takes to learn and master skills—and now brings that knowledge to the next generation of athletes. Nilo is passionate about creating a positive, encouraging environment where every athlete feels supported. He values the strong sense of community at RMT and works hard to contribute to that culture of care and positivity. With a solid foundation in technique and a relatable coaching style, Nilo helps athletes improve both their confidence and their skills—one class at a time."
  },
  {
    name: "Mya Campbell",
    role: "Rec Tumbling/Cheer Coach",
    experience: "13+ years in Cheer | 4 years High School Cheer | 4 years College Cheer",
    image: "/staff/campbell-mya.jpg",
    bio: "With nearly 13 years of cheerleading experience, Mya brings passion, energy, and a championship mindset to every class. She is a proud NCA Collegiate National and Grand National Champion with Weber State, and has been coaching on and off for the past three years. Currently pursuing a degree in Business Administration with a minor in Psychology, Mya blends her academic background with her love for cheer to create a fun, encouraging, and engaging environment for athletes of all levels. At RMT, she feels right at home: \"It feels like family, and there's always something new to work on—you never get bored!\" Known for her upbeat personality and love for connecting with athletes, Mya keeps her classes exciting with creative games and plenty of laughter. Her goal? To help every athlete grow, have fun, and feel like they're part of something special.",
    achievements: [
      "Grand NCA College National Champion"
    ]
  },
  {
    name: "Kai Copperfield",
    role: "Tumbling/Cheer Coach",
    experience: "18+ years in the sport | 9 years coaching experience",
    image: "/staff/copperfield-kai.png",
    bio: "With nearly two decades in the sport and two NCA Grand National titles under his belt, Kai Copperfield brings both elite experience and unmatched energy to the gym. His passion for tumbling is contagious, and he's known for blending fun and focus in every class. What makes Kai stand out is his ability to balance creativity and technical coaching. He brings high energy and humor to the floor, making each session engaging and uplifting—while also pushing athletes to refine their skills and reach their full potential. To Kai, RMT is more than a gym—it's a family. He values the warm, supportive environment and takes pride in contributing to a culture where athletes feel welcome, empowered, and ready to grow. Whether he's making someone laugh or helping them nail a new skill, Kai is all in for his athletes and the future of the sport."
  },
  {
    name: "Taylor Smith",
    role: "Rec Tumbling Coach",
    experience: "16+ Years competing Tumbling and Tramp",
    image: "/staff/smith-taylor.png",
    bio: "Taylor Smith began gymnastics at the age of 3 and spent 16 years training and competing, eventually earning the title of Provincial Champion in Canada. Her athletic career took her across the country and built a strong foundation of discipline, skill, and love for the sport. Now in her 10th year of coaching, Taylor brings a wealth of personal experience and professional training to her role. She holds multiple certifications through Gymnastics Canada and has trained under the guidance of international coaches and judges. Her coaching focuses on technical skill development, athlete progress, and sport psychology. Taylor's coaching journey is uniquely shaped by the opportunity she had to grow in the sport alongside her mom, who later became her coach. That experience taught her the importance of mental and emotional support, which she now brings to her own athletes. She is passionate about helping athletes not only improve in the gym but also build confidence and life skills they can carry with them beyond the sport. Taylor is proud to be part of a positive, supportive gymnastics community and is dedicated to creating a fun and encouraging environment for every athlete she coaches.",
    achievements: [
      "Provincial Champion in Canada"
    ]
  }
];

const funPhotos = [
  {
    url: "/staff/carousel/coaches-1.jpg",
    caption: "Team Building Event"
  },
  {
    url: "/staff/carousel/coaches-2.jpg",
    caption: "Staff Training Day"
  },
  {
    url: "/staff/carousel/coaches-3.jpg",
    caption: "Competition Day"
  },
  {
    url: "/staff/carousel/coaches-5.jpg",
    caption: "Staff Meeting"
  }
];

function Staff() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackToHome = () => {
    window.history.replaceState(
      { from: location.pathname, scrollY: window.scrollY },
      ''
    );
    navigate('/');
  };

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 16,
        },
      },
      '(max-width: 1024px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
    },
  });

  return (
    <div className="min-h-screen bg-white">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our experienced coaches are passionate about helping athletes reach their full potential
            through personalized instruction and positive encouragement.
          </p>
          <a 
            href="https://docs.google.com/forms/d/1ki0rrQv_9RWzs8nhXt-PFLcP83hlUVpAvnK1XrjWGnA/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#FF1494] text-white px-8 py-3 rounded-full text-lg hover:bg-[#D1127A] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Join Our Team
          </a>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {staffMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="w-full aspect-[5/7]">
                <OptimizedImage
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-contain bg-gray-50"
                  width={400}
                  height={560}
                />
              </div>
              <div className="p-6">
                <div className="uppercase tracking-wide text-sm text-[#FF1494] font-semibold">
                  {member.role}
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {member.experience}
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">
                  {member.name}
                </h2>
                <p className="mt-3 text-gray-600">
                  {member.bio}
                </p>
                {member.achievements && member.achievements.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-[#FF1494] mb-2 flex items-center">
                      🏆 Achievements & Certifications
                    </h3>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-600 text-sm flex items-start">
                          <span className="text-[#FF1494] mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Photos Carousel */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Life at Rocky Mountain</h2>
          <div ref={sliderRef} className="keen-slider">
            {funPhotos.map((photo, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
                  <OptimizedImage
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                    width={600}
                    height={338}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;