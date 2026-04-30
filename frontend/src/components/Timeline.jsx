import React, { useEffect, useRef, useState } from 'react';
import { Calendar, GraduationCap, BookOpen, Heart, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const timelineData = [
  {
    id: 1,
    title: "End of April",
    date: "Late April 2026",
    content: "This Friday is a holiday, so I won't work. Also, this Sunday, I am going to share a dinner with my soccer friends. We are celebrating Labor Day.",
    icon: Calendar,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "First Week of May",
    date: "Early May 2026",
    content: "This weekend, tomorrow exactly, I am planning to finish Intermediate 1 successfully. At work, I am going to have some presentations because I will present new features views and implementations. I am thinking about dedicating more time to an app development because I'm pretty sure it will be quite complex.",
    icon: GraduationCap,
    color: "bg-blue-600"
  },
  {
    id: 3,
    title: "Mid-May",
    date: "Mid-May 2026",
    content: "In two weeks, I am taking a machine learning midterm at my university, so I need to prepare for it.",
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    id: 4,
    title: "Second Sunday of May",
    date: "Mother's Day 2026",
    content: "For Mother's Day, my brother and I are planning to organize a lunch to celebrate with our mom. I'm sure it will be a great day.",
    icon: Heart,
    color: "bg-blue-600"
  },
  {
    id: 5,
    title: "June",
    date: "June 2026",
    content: "Finally, in June, I might apply for new jobs if I don't continue at my current one. I'm not sure, but I think I will find a good opportunity. Honestly, I am going to work really hard to have a great first half of the year!",
    icon: Briefcase,
    color: "bg-blue-500"
  }
];

const TimelineItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const Icon = item.icon;

  return (
    <div
      ref={itemRef}
      className={`timeline-item mb-16 flex items-center w-full ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      } ${isVisible ? 'timeline-item-visible' : 'timeline-item-hidden'}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateX(0)'
          : isLeft
          ? 'translateX(-50px)'
          : 'translateX(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <Card className="timeline-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-blue-100 bg-white">
          <CardHeader>
            <div className={`flex items-center gap-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
              <div className={`${item.color} p-3 rounded-full text-white icon-bounce`}>
                <Icon size={24} />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-blue-900">{item.title}</CardTitle>
                <p className="text-sm text-blue-600 font-medium mt-1">{item.date}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{item.content}</p>
          </CardContent>
        </Card>
      </div>

      <div className="w-2/12 flex justify-center relative">
        <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 pulse-animation"></div>
      </div>

      <div className="w-5/12"></div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 header-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4 tracking-tight">
            PLANS AND PREDICTIONS FOR THE FUTURE
          </h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-8 italic">
            "Hi everyone! Today, I'm going to share my timeline and my plans for the near future. Let's start with this month."
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-400 timeline-line"></div>

          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="text-center mt-20 footer-fade-in">
          <p className="text-gray-600 text-lg font-medium">Looking forward to an amazing 2026! 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;