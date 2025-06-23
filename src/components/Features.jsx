import React from "react";
import {
  FaHome,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaRobot,
  FaPlusCircle,
  FaCompass,
  FaClock,
  FaComments,
  FaTools,
} from "react-icons/fa";

const featData = [
  {
    title: "Home",
    description:
      "Your personalized dashboard for quick updates, announcements, and shortcuts to everything you need. Result ,Sem Registration ,Notices, Syllabus ,Examfees ,Sem Feedback ,Back Exam Registration, Attendance, and more...",
    icon: <FaHome className="text-blue-600 text-3xl" />,
  },
  {
    title: "Google Classroom",
    description:
      "Google Classroom integrated in the app to access your classroom materials, notes, assignments, and schedules shared by faculty.",
    icon: <FaChalkboardTeacher className="text-green-600 text-3xl" />,
  },
  {
    title: "IET Classroom",
    description:
      "Collaborative space tailored for IET DAVV students & Faculty. Where Faculty can share notes, assignments, and schedules.",
    icon: <FaTools className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Explore",
    description:
      "Discover useful student applications, helpful links, clubs, library, contact list and opportunities beyond academics.",
    icon: <FaCompass className="text-purple-600 text-3xl" />,
  },
  {
    title: "Events",
    description:
      "Stay up-to-date with upcoming college events, workshops, and hackathons at IET DAVV.",
    icon: <FaCalendarAlt className="text-pink-600 text-3xl" />,
  },
  // {
  //   title: "Add Events",
  //   description: "Organizing an event? Easily post it on the app so students never miss out!",
  //   icon: <FaPlusCircle className="text-indigo-600 text-3xl" />,
  // },
  {
    title: "Student Apps",
    description:
      "Access curated tools and resources tailored for IET students — attendance, ERP, and more.",
    icon: <FaComments className="text-teal-500 text-3xl" />,
  },
  {
    title: "Schedule",
    description:
      "View and manage your class and exam schedules in a clean and intuitive layout.",
    icon: <FaClock className="text-orange-500 text-3xl" />,
  },
  {
    title: "Smart Chatbot",
    description:
      "Get instant answers to your college-related queries with our AI-powered assistant.",
    icon: <FaRobot className="text-gray-700 text-3xl" />,
  },
];

const Features = () => {
  return (
    <div id="feat" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl text-center font-bold mb-16">Features</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featData.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 items-start bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <div className="min-w-[3rem]">{item.icon}</div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
