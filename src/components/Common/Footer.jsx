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
<footer className="bg-gray-600 text-white py-10">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 bg-color:white">
        {/* Founder Details */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Users size={20} /> Founders
          </h2>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Kartik <a href="tel:+91062" className="hover:text-blue-400"></a></li>
            <li>Harshit <a href="tel:+917982" className="hover:text-blue-400"></a></li>
            
          </ul>
        </div>

        {/* Class 11th & 12th Info */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <BookOpen size={20} /> Class 11th & 12th ICSE
          </h2>
          <p className="mt-2 text-gray-300">
            High-quality video courses covering **PCM** with latest syllabus updates.
          </p>
          <p className="text-gray-300">
            Learn with **expert guidance** and **exam-focused** content.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Mail size={20} /> Contact Us
          </h2>
          <p className="mt-2 text-gray-300">
            📧 Email: <a href="mailto:support@smashicse.com" className="hover:text-blue-400">support@smashicse.com</a>
          </p>
          <p className="text-gray-300">
            📞 Helpline: <a href="tel:+91XXXXXXXXXX" className="hover:text-blue-400">+91 9879827062</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} SmashICSE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
