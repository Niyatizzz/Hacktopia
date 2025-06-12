import React, { useState, useEffect } from 'react';
import { 
  Code, Users, Trophy, Calendar, Zap, Github, Globe, Rocket, 
  Bell, Search, Settings, User, Plus, Filter, Clock, Star,
  TrendingUp, Award, Target, Activity, ChevronRight, Play,
  MessageSquare, GitBranch, Flame, Eye, Heart, Loader
} from 'lucide-react';

export default function HackTopiaDashboard() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  // State for backend data
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [hackathons, setHackathons] = useState([]);
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Load data on mount
    loadDashboardData();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Backend integration functions
  const loadDashboardData = async () => {
    try {
      setLoading(true);
      await Promise.all([
        loadUserProfile(),
        loadUserStats(),
        loadHackathons(),
        loadUserProjects(),
        loadNotifications()
      ]);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadUserProfile = async () => {
    try {
      // Replace with your API endpoint
      // const response = await fetch('/api/user/profile');
      // const userData = await response.json();
      // setUser(userData);
      
      // Placeholder - remove when connecting to backend
      setUser({ name: 'Loading...', avatar: null, rank: 0 });
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

  const loadUserStats = async () => {
    try {
      // Replace with your API endpoint
      // const response = await fetch('/api/user/stats');
      // const statsData = await response.json();
      // setStats(statsData);
      
      // Placeholder - remove when connecting to backend
      setStats({
        activeProjects: 0,
        teamMembers: 0,
        hackathonsWon: 0,
        totalPoints: 0,
        rank: 0
      });
    } catch (error) {
      console.error('Error loading user stats:', error);
    }
  };

  const loadHackathons = async () => {
    try {
      // Replace with your API endpoint
      // const response = await fetch('/api/hackathons/live');
      // const hackathonData = await response.json();
      // setHackathons(hackathonData);
      
      // Placeholder - remove when connecting to backend
      setHackathons([]);
    } catch (error) {
      console.error('Error loading hackathons:', error);
    }
  };

  const loadUserProjects = async () => {
    try {
      // Replace with your API endpoint
      // const response = await fetch('/api/user/projects');
      // const projectData = await response.json();
      // setProjects(projectData);
      
      // Placeholder - remove when connecting to backend
      setProjects([]);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  };

  const loadNotifications = async () => {
    try {
      // Replace with your API endpoint
      // const response = await fetch('/api/user/notifications/unread');
      // const notificationData = await response.json();
      // setNotifications(notificationData.count);
      
      // Placeholder - remove when connecting to backend
      setNotifications(0);
    } catch (error) {
      console.error('Error loading notifications:', error);
    }
  };

  const joinHackathon = async (hackathonId) => {
    try {
      // Replace with your API endpoint
      // const response = await fetch(`/api/hackathons/${hackathonId}/join`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' }
      // });
      // if (response.ok) {
      //   loadHackathons(); // Refresh data
      // }
      
      console.log('Joining hackathon:', hackathonId);
    } catch (error) {
      console.error('Error joining hackathon:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      // Replace with your API endpoint
      // const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      // const results = await response.json();
      // Handle search results
      
      console.log('Searching for:', query);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-12 w-12 text-cyan-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

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

      {/* Header */}
      <header className="relative z-10 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className={`flex items-center space-x-2 transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <Code className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              HackTopia
            </span>
          </div>

          <div className={`flex-1 max-w-2xl mx-8 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search hackathons, projects, or developers..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-all duration-300"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>

          <div className={`flex items-center space-x-4 transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <button className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <Bell className="h-6 w-6" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {notifications}
                </span>
              )}
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300">
              <Settings className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium">{user?.name || 'User'}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex relative z-10">
        {/* Sidebar */}
        <aside className={`w-64 bg-gray-800/30 backdrop-blur-sm border-r border-gray-700 min-h-screen p-6 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: Activity },
              { id: 'hackathons', label: 'Hackathons', icon: Rocket },
              { id: 'projects', label: 'My Projects', icon: Code },
              { id: 'teams', label: 'Teams', icon: Users },
              { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
              { id: 'achievements', label: 'Achievements', icon: Award },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-xl text-left transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-purple-600/50 to-cyan-600/50 border border-purple-500/50 text-white'
                    : 'hover:bg-gray-700/50 text-gray-400 hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {stats && (
            <div className="mt-12 p-4 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-xl">
              <h3 className="font-semibold mb-2 text-purple-300">Quick Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Rank</span>
                  <span className="text-cyan-400 font-medium">#{stats.rank || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Points</span>
                  <span className="text-purple-400 font-medium">{stats.totalPoints?.toLocaleString() || '0'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wins</span>
                  <span className="text-pink-400 font-medium">{stats.hackathonsWon || '0'}</span>
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div className={`transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    Welcome back, <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{user?.name || 'Hacker'}</span>
                  </h1>
                  <p className="text-gray-400">Ready to hack the future?</p>
                </div>
                <button 
                  onClick={() => setActiveTab('hackathons')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Plus className="h-5 w-5" />
                  <span>Join Hackathon</span>
                </button>
              </div>

              {/* Stats Cards */}
              {stats && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[
                    { label: 'Active Projects', value: stats.activeProjects || 0, icon: Code, color: 'from-purple-600 to-purple-400' },
                    { label: 'Team Members', value: stats.teamMembers || 0, icon: Users, color: 'from-cyan-600 to-cyan-400' },
                    { label: 'Hackathons Won', value: stats.hackathonsWon || 0, icon: Trophy, color: 'from-pink-600 to-pink-400' },
                    { label: 'Total Points', value: stats.totalPoints?.toLocaleString() || '0', icon: Star, color: 'from-yellow-600 to-yellow-400' }
                  ].map((stat, i) => (
                    <div key={i} className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <stat.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Live Hackathons */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center space-x-2">
                    <Flame className="h-6 w-6 text-orange-500" />
                    <span>Live Hackathons</span>
                  </h2>
                  <button 
                    onClick={() => setActiveTab('hackathons')}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                  >
                    <span>View All</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                
                {hackathons.length === 0 ? (
                  <div className="text-center py-12 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl">
                    <Rocket className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-400">No active hackathons</h3>
                    <p className="text-gray-500 mb-4">Check back soon for new challenges!</p>
                    <button 
                      onClick={() => setActiveTab('hackathons')}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Browse All Events
                    </button>
                  </div>
                ) : (
                  <div className="grid gap-6">
                    {hackathons.map((hackathon) => (
                      <div key={hackathon.id} className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                        {/* Hackathon content will be populated from backend */}
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{hackathon.title}</h3>
                            <p className="text-gray-400">{hackathon.description}</p>
                          </div>
                          <button 
                            onClick={() => joinHackathon(hackathon.id)}
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                          >
                            Join Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Projects */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center space-x-2">
                    <Code className="h-6 w-6 text-cyan-500" />
                    <span>Recent Projects</span>
                  </h2>
                  <button 
                    onClick={() => setActiveTab('projects')}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center space-x-1"
                  >
                    <span>View All</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                
                {projects.length === 0 ? (
                  <div className="text-center py-12 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl">
                    <Code className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-gray-400">No projects yet</h3>
                    <p className="text-gray-500 mb-4">Start building something amazing!</p>
                    <button 
                      onClick={() => setActiveTab('hackathons')}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Join a Hackathon
                    </button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                      <div key={project.id} className="group p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                        {/* Project content will be populated from backend */}
                        <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                        <p className="text-gray-400">{project.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Other tabs */}
          {activeTab !== 'overview' && (
            <div className={`transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                <p className="text-gray-400 max-w-md mx-auto">
                  Connect your backend to populate this section with real data.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-ping"
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