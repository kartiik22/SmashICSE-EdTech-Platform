import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

import { Phone, Mail, BookOpen, Users } from "lucide-react";
// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];


const Footer = () => {
  return (
    <footer className="w-full bg-richblack-800 border-t border-richblack-700 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Founder Details */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2 text-richblack-5">
            <Users size={20} className="text-[#22c44c]" /> Founders
          </h2>
          <ul className="mt-2 space-y-1 text-richblack-300 text-sm">
            <li>Kartik</li>
            <li>Harshit</li>
          </ul>
        </div>

        {/* Class 11th & 12th Info */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2 text-richblack-5">
            <BookOpen size={20} className="text-[#22c44c]" /> Class 11th & 12th ICSE
          </h2>
          <p className="mt-2 text-richblack-300 text-sm leading-relaxed">
            High-quality video courses covering PCM with the latest syllabus updates.
          </p>
          <p className="mt-1 text-richblack-300 text-sm leading-relaxed">
            Learn with expert guidance and exam-focused content.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2 text-richblack-5">
            <Mail size={20} className="text-[#22c44c]" /> Contact Us
          </h2>
          <p className="mt-2 text-richblack-300 text-sm">
            📧 Email:{" "}
            <a href="mailto:support@smashicse.com" className="text-[#22c44c] hover:underline">
              support@smashicse.com
            </a>
          </p>
          <p className="mt-1 text-richblack-300 text-sm">
            📞 Helpline:{" "}
            <a href="tel:+919879827062" className="text-[#22c44c] hover:underline">
              +91 9879827062
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-richblack-400 text-xs sm:text-sm border-t border-richblack-700/60 pt-4 px-4">
        <p>© {new Date().getFullYear()} SmashICSE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
