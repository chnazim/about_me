
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaStackOverflow, FaMoon, FaSun } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const skillsData = [
  { name: "Flutter", level: 90 },
  { name: "Kotlin", level: 95 },
  { name: "Firebase", level: 85 },
  { name: "Dart", level: 80 },
  { name: "Java", level: 95 },
];

const projectPlaceholders = [
   {
    name: "Swoop Car Wash App",
    description: "An app providing eco-friendly, expert car cleaning at your doorstep with hassle-free monthly plans and real-time tracking.",
    image: "/images/swoop_logo.png",
    link: "https://swoopcarwash.com/",
  },
   {
    name: "AccyCloud",
    description: "A cloud-based accounting and inventory management platform designed for GCC businesses.",
    image: "/images/accycloud_logo.png",
    link: "https://accycloud.com/",
  },
  {
    name: "Visitor Log App",
    description: "A visitor logging solution using Emirates ID scanning and token printing for multi-gate access.",
    image: "/images/visitor_logo.png",
    link:"https://www.bennellin.com/index.html"
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-tr from-purple-100 via-blue-100 to-teal-100 text-gray-800"} min-h-screen transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-end mb-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-white shadow hover:scale-110 transition">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <div className={`bg-white/90 ${darkMode ? "bg-opacity-10" : "bg-opacity-90"} backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-blue-200`}>
          <section className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 dark:text-white">Ahamed Nazim Chelakkattuthodi</h1>
            <p className="text-xl text-gray-600 mt-2 dark:text-gray-300">Team Leader | Senior Mobile App Developer</p>
            <a
              href="/resume.pdf"
              className="inline-block mt-6 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
              download
            >
              📄 Download Resume
            </a>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-l-4 border-blue-500 pl-4 dark:text-white">👨‍💻 About Me</h2>
            <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              Hi, I'm Ahamed Nazim, a seasoned Mobile Application Developer with over 8 years of hands-on experience in building scalable and high-performance mobile solutions. I specialize in Flutter, Kotlin, and Java, with deep expertise in state management (BLoC, Provider), clean architecture, and MVVM patterns.
              Throughout my career, I’ve successfully led and contributed to numerous projects involving Firebase integration (Auth, Firestore, Messaging, Crashlytics), real-time communication via STOMP/WebSocket, RESTful API and GraphQL handling, and advanced SDK integrations like Google Maps SDK, NFC-based Emirates ID reading, and QR/Barcode scanning.
              I'm also well-versed in payment gateway integrations including Stripe, Razorpay, and PayTabs, as well as push notifications, local/remote data storage (SQLite, Hive), cloud functions, and automated CI/CD pipelines.
              Currently, I lead the mobile app team at Appcom Solution Technologies LLC, Dubai, where I focus on delivering robust, user-centric applications that solve real-world problems. I'm passionate about crafting clean UIs, optimizing app performance, and continuously learning the evolving landscape of mobile tech.  </p>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-l-4 border-blue-500 pl-4 dark:text-white">📊 Skills Chart</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={skillsData} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis type="category" dataKey="name" width={100} />
                <Tooltip />
                <Bar dataKey="level" fill="#3b82f6" radius={[0, 10, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </section>

          <section className="mb-14">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-l-4 border-blue-500 pl-4 dark:text-white">🚀 Projects</h2>
            <Slider {...settings}>
              {projectPlaceholders.map((project, index) => (
                <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 hover:scale-[1.02] transition-transform">
                <img src={project.image} alt={project.name} className="rounded-2xl shadow-lg w-full h-64 object-cover border border-gray-300" />
                <h3 className="text-xl font-semibold text-center mt-4 dark:text-white">{project.name}</h3>
                <p className="text-center text-gray-700 dark:text-gray-300 mt-2 text-sm">{project.description}</p>
                </a>
                ))}
            </Slider>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 border-l-4 border-blue-500 pl-4 text-left dark:text-white">📬 Contact</h2>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              📧 Email: <a href="mailto:ahamednazimch@gmail.com" className="text-blue-600 underline">ahamednazimch@gmail.com</a>
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
              📞 Phone: <a href="tel:+971502197585" className="text-blue-600 underline">+971502197585</a>
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="https://github.com/chnazim" target="_blank" rel="noreferrer">
                <FaGithub size={30} className="hover:text-black dark:hover:text-white transition-transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/nazim-ch/" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} className="hover:text-blue-800 transition-transform hover:scale-110" />
              </a>
              <a href="https://stackoverflow.com/users/6887226/nazim-ch" target="_blank" rel="noreferrer">
                <FaStackOverflow size={30} className="hover:text-orange-500 transition-transform hover:scale-110" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
