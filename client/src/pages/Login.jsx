import React, { useState, useEffect } from 'react';
import {
  Code,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Github,
  Chrome,
  ArrowLeft
} from 'lucide-react';

export default function HackTopiaLogin() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative flex items-center justify-center">
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

      {/* Back to Home Button */}
      <button className={`fixed top-6 left-6 z-50 flex items-center space-x-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </button>

      {/* Main Login Container */}
      <div className={`relative z-10 w-full max-w-5xl mx-auto px-6 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col md:flex-row bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 space-y-8 md:space-y-0 md:space-x-8">

          {/* Social Login */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Code className="h-10 w-10 text-cyan-400" />
                <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  HackTopia
                </span>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-gray-400">Continue with a provider</p>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 hover:border-purple-500/50 transition-all duration-300 group">
                <Github className="h-5 w-5 group-hover:text-white" />
                <span className="group-hover:text-white">Continue with GitHub</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 hover:border-purple-500/50 transition-all duration-300 group">
                <Chrome className="h-5 w-5 group-hover:text-white" />
                <span className="group-hover:text-white">Continue with Google</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center w-px bg-gray-700"></div>

          {/* Email Login */}
          <div className="w-full md:w-1/2 space-y-4">
            {/* Email Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-gray-700/80 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-gray-700/80 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2 text-purple-600"
                />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-cyan-700"
            >
              Sign In
            </button>

            {/* Sign Up */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
