"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { LucideSquareGanttChart } from "lucide-react";
import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { x: "-100vw", opacity: 0 },
      {
        x: "0vw",
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { x: "100vw", opacity: 0 },
      {
        x: "0vw",
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        alert("✅ Message Sent Successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setLoading(false);
      alert("⚠️ An error occurred. Please check your connection.");
      console.error("Error:", error);
    }
  };

  return (
    <div ref={contactRef} className="w-full min-h-screen flex items-center justify-center px-4 md:px-10">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 border border-red-600 shadow-lg rounded-lg">
        {/* Left Section - Contact Info */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-red-600">Contact Me</h1>
          <p className="mt-4 text-lg md:text-xl text-black dark:text-gray-300">
            Let's connect! Feel free to reach out for collaborations or projects.
          </p>
          <div className="mt-6 space-y-4 text-lg">
            <Link href="mailto:negisameer72@gmail.com" className="flex items-center space-x-3 hover:text-blue-500 transition">
              <FaMailBulk size={22} />
              <span><b>Email:</b> negisameer72@gmail.com</span>
            </Link>
            <Link href="https://www.linkedin.com/in/sameer-negi-52a85b336/" className="flex items-center space-x-3 hover:text-blue-500 transition">
              <FaLinkedin size={22} />
              <span><b>LinkedIn:</b> linkedin.com/in/sameer-negi-52a85b336</span>
            </Link>
            <Link href="https://leetcode.com/u/Codesameer/" className="flex items-center space-x-3 hover:text-blue-500 transition">
              <LucideSquareGanttChart size={22} />
              <span><b>Leetcode:</b>{"Codesameer"}</span>
            </Link>
            <Link href="https://github.com/Sameer1311" className="flex items-center space-x-3 hover:text-blue-500 transition">
              <FaGithub size={22} />
              <span><b>GitHub:</b> github.com/Sameer1311</span>
            </Link>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div ref={formRef} className="p-6 rounded-lg dark:border-red-500 shadow-lg border-2 border-black">
          <h2 className="text-xl font-bold text-center mb-4  dark:text-white">Send a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg  dark:text-white placeholder-gray-400 border-2 border-red-600 focus:ring-2 focus:ring-red-500 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg  dark:text-white placeholder-gray-400 border-2 border-red-600 focus:ring-2 focus:ring-red-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg  dark:text-white placeholder-gray-400 border-2 border-red-600 focus:ring-2 focus:ring-red-500 outline-none h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={!name || !email || !message || loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
