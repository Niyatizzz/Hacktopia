import React, { useState, useEffect } from 'react';
import { Code, Users, Trophy, Calendar, Zap, Github, Globe, Rocket, Twitter, Linkedin, Mail } from 'lucide-react';

export default function HackTopiaLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Mouse follower effect */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${
        scrolled ? 'bg-gray-900/70 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
      }`}>
        <div className={`flex items-center space-x-2 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <Code className="h-8 w-8 text-cyan-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            HackTopia
          </span>
        </div>
        
        <div className={`hidden md:flex items-center space-x-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">Events</a>
          <a href="#" className="hover:text-pink-400 transition-colors duration-300">Community</a>
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Resources</a>
        </div>

        <div className={`flex items-center space-x-4 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <button className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
            Dashboard
          </button>
          <button className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
            Login
          </button>
          <button className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-20 pt-32 text-center">
        <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-gray-300">Where</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              innovation
            </span>
            <br />
            <span className="text-gray-300">meets</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              collaboration.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join virtual hackathons, connect with brilliant minds, and build the future together. 
            Code, compete, and create in our immersive digital playground.
          </p>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <button className="group px-8 py-4 border-2 border-gray-600 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 flex items-center space-x-3">
            <Rocket className="h-6 w-6 group-hover:text-white" />
            <span className="text-lg font-semibold group-hover:text-white">Find Team</span>
          </button>
          
          <button className="group px-8 py-4 border-2 border-gray-600 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 flex items-center space-x-3">
            <Users className="h-6 w-6 group-hover:text-white" />
            <span className="text-lg font-semibold group-hover:text-white">Find Team</span>
          </button>
          
          <button className="group px-8 py-4 border-2 border-gray-600 rounded-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105 flex items-center space-x-3">
            <Trophy className="h-6 w-6 group-hover:text-white" />
            <span className="text-lg font-semibold group-hover:text-white">Host Event</span>
          </button>
        </div>

        {/* Feature Cards */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">24/7 Events</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Continuous hackathons across different time zones and skill levels.
            </p>
          </div>

          <div className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">Global Network</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Connect with developers, designers, and innovators worldwide.
            </p>
          </div>

          <div className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-pink-500 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors">Real-time Collab</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Advanced tools for seamless virtual collaboration and coding.
            </p>
          </div>

          <div className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Github className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">Open Source</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Build amazing projects and contribute to the open source community.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">50k+</div>
            <div className="text-gray-400">Active Hackers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">1,200+</div>
            <div className="text-gray-400">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">$2M+</div>
            <div className="text-gray-400">Prize Money</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent mb-2">150+</div>
            <div className="text-gray-400">Countries</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-800/50 backdrop-blur-sm border-t border-gray-700 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  HackTopia
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Connecting brilliant minds through virtual hackathons. Build, innovate, and shape the future of technology together.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Browse Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Create Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Host Hackathon</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Leaderboards</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 HackTopia. All rights reserved. Built with ❤️ for the developer community.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Made with</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}