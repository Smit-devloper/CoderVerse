import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Gamepad2,
  Brain,
  BookOpen,
  Trophy,
  Clock,
  Star,
  Zap,
  Target,
  Users,
  TrendingUp,
  ChevronRight,
  Calendar,
  Award,
  Code,
  Timer
} from "lucide-react";
import { StaggerWrapper, HoverCard, FadeInWrapper } from "@/components/animations/MotionComponents";
import { motion } from "framer-motion";

export default function Dashboard() {
  const gameCards = [
    {
      id: 1,
      title: "Daily Games",
      description: "Challenge yourself with coding puzzles, typing speed tests, and debugging missions",
      icon: Gamepad2,
      color: "from-neon-purple to-purple-600",
      stats: "5 new challenges",
      href: "/games",
      items: ["Code Golf", "Debug Hunt", "Typing Speed", "Algorithm Race"]
    },
    {
      id: 2,
      title: "Quizzes",
      description: "Test your knowledge with AI-powered programming quizzes and concept challenges",
      icon: Brain,
      color: "from-neon-cyan to-blue-600",
      stats: "12 available",
      href: "/quizzes",
      items: ["JavaScript Basics", "Data Structures", "System Design", "Algorithms"]
    },
    {
      id: 3,
      title: "Learning Modules",
      description: "Structured courses and tutorials to level up your programming skills",
      icon: BookOpen,
      color: "from-neon-green to-green-600",
      stats: "3 in progress",
      href: "/learning",
      items: ["React Mastery", "Python Fundamentals", "Database Design", "DevOps Basics"]
    },
    {
      id: 4,
      title: "Leaderboards",
      description: "See how you rank against other developers and track your progress",
      icon: Trophy,
      color: "from-neon-pink to-pink-600",
      stats: "Rank #42",
      href: "/leaderboard",
      items: ["Daily Rankings", "All-Time Leaders", "Private Rooms", "Team Battles"]
    }
  ];

  const quickStats = [
    { label: "Current XP", value: "2,847", icon: Star, color: "text-neon-cyan" },
    { label: "Streak", value: "7 days", icon: Zap, color: "text-neon-purple" },
    { label: "Challenges Solved", value: "156", icon: Target, color: "text-neon-green" },
    { label: "Global Rank", value: "#42", icon: TrendingUp, color: "text-neon-pink" }
  ];

  const recentActivity = [
    { action: "Completed", task: "JavaScript Quiz", xp: "+50 XP", time: "2 hours ago", icon: Brain },
    { action: "Won", task: "Code Golf Challenge", xp: "+75 XP", time: "5 hours ago", icon: Code },
    { action: "Achieved", task: "7-day Streak", xp: "+100 XP", time: "1 day ago", icon: Calendar },
    { action: "Unlocked", task: "Speed Demon Badge", xp: "+25 XP", time: "2 days ago", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back, <span className="text-neon-cyan">Coder</span>! 🚀
          </h1>
          <p className="text-gray-400 text-lg">
            Ready to level up your skills? Check out today's challenges and continue your learning journey.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="gaming-card group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {stat.value}
                    </p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Game Cards Grid */}
            <StaggerWrapper className="grid md:grid-cols-2 gap-6 mb-8">
              {gameCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link key={card.id} to={card.href} className="group">
                    <HoverCard>
                      <motion.div
                        className="gaming-card h-full"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                      >
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color} group-hover:scale-110 transition-transform`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <span className="text-sm text-neon-cyan font-medium">{card.stats}</span>
                      </div>

                      {/* Card Content */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {card.description}
                      </p>

                      {/* Items List */}
                      <div className="space-y-2 mb-6">
                        {card.items.slice(0, 3).map((item, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                        {card.items.length > 3 && (
                          <div className="text-sm text-gray-500">
                            +{card.items.length - 3} more...
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <Button 
                          variant="ghost" 
                          className="text-neon-cyan hover:text-white hover:bg-neon-purple/20 group-hover:translate-x-1 transition-all p-0"
                        >
                          Explore
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-neon-purple rounded-full group-hover:animate-bounce"></div>
                          <div className="w-2 h-2 bg-neon-cyan rounded-full group-hover:animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-neon-pink rounded-full group-hover:animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                      </motion.div>
                    </HoverCard>
                  </Link>
                );
              })}
            </StaggerWrapper>

            {/* Quick Actions */}
            <div className="gaming-card">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Timer className="mr-2 h-5 w-5 text-neon-cyan" />
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button className="btn-gradient h-12 text-sm">
                  Random Challenge
                </Button>
                <Button variant="outline" className="border-neon-purple/50 text-neon-cyan hover:bg-neon-purple/10 h-12 text-sm">
                  Practice Mode
                </Button>
                <Button variant="outline" className="border-neon-cyan/50 text-neon-purple hover:bg-neon-cyan/10 h-12 text-sm">
                  Join Tournament
                </Button>
                <Button variant="outline" className="border-gaming-border text-gray-300 hover:bg-gaming-card h-12 text-sm">
                  View Progress
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Activity */}
            <div className="gaming-card">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-neon-cyan" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gaming-darker transition-colors">
                      <div className="p-2 bg-neon-purple/20 rounded-lg">
                        <Icon className="h-4 w-4 text-neon-purple" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white">
                          <span className="text-gray-400">{activity.action}</span> {activity.task}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-neon-cyan font-medium">{activity.xp}</span>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Today's Challenge */}
            <div className="gaming-card">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="mr-2 h-5 w-5 text-neon-pink" />
                Today's Challenge
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 rounded-lg border border-neon-purple/30">
                  <h4 className="font-semibold text-white mb-2">Speed Coding: FizzBuzz</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    Implement FizzBuzz in under 60 seconds for bonus XP!
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neon-cyan">Reward: 150 XP</span>
                    <Button size="sm" className="btn-gradient">
                      Start
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="gaming-card">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Users className="mr-2 h-5 w-5 text-neon-green" />
                Community
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Online Coders</span>
                  <span className="text-neon-green font-semibold">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Active Challenges</span>
                  <span className="text-neon-cyan font-semibold">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Tournaments Today</span>
                  <span className="text-neon-purple font-semibold">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
