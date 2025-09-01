import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Medal, 
  Crown, 
  Star, 
  TrendingUp,
  Users,
  Calendar,
  Globe,
  Shield,
  Award
} from "lucide-react";

export default function Leaderboard() {
  const leaderboardTabs = [
    { id: 'daily', name: 'Daily', icon: Calendar, active: true },
    { id: 'alltime', name: 'All-Time', icon: Globe, active: false },
    { id: 'private', name: 'Private Room', icon: Shield, active: false }
  ];

  const mockLeaders = [
    { rank: 1, name: "CodeNinja", xp: 15847, streak: 45, icon: Crown, color: "text-yellow-400" },
    { rank: 2, name: "DevMaster", xp: 14592, streak: 32, icon: Medal, color: "text-gray-300" },
    { rank: 3, name: "ScriptKid", xp: 13258, streak: 28, icon: Award, color: "text-amber-600" },
    { rank: 4, name: "ByteHunter", xp: 12847, streak: 24, icon: Star, color: "text-neon-purple" },
    { rank: 5, name: "LogicLord", xp: 11955, streak: 19, icon: Star, color: "text-neon-cyan" }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-neon-purple">Leaderboard</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            See how you stack up against other developers. Compete in daily challenges, 
            climb the all-time rankings, or create private rooms with friends.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="gaming-card p-1 flex space-x-1">
            {leaderboardTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                    tab.active 
                      ? 'bg-neon-purple text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gaming-card'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current User Position */}
        <div className="gaming-card mb-8 bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 border-neon-purple/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold">#42</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Your Position</h3>
                <p className="text-neon-cyan">CodeMaster2024 • 2,847 XP</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-neon-purple">7</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="gaming-card mb-12">
          <h3 className="text-xl font-bold text-white mb-6">Top Players - Daily Rankings</h3>
          <div className="space-y-4">
            {mockLeaders.map((leader) => {
              const Icon = leader.icon;
              return (
                <div 
                  key={leader.rank}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-gaming-darker transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-6 w-6 ${leader.color}`} />
                      <span className="text-2xl font-bold text-white">#{leader.rank}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{leader.name}</h4>
                      <p className="text-sm text-gray-400">
                        {leader.xp.toLocaleString()} XP • {leader.streak} day streak
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-neon-cyan font-semibold">
                      {leader.xp.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">Total XP</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-16">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Full Leaderboards Coming Soon!</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We're building comprehensive leaderboards with real-time updates, detailed statistics, 
              and exciting competitions to make your coding journey more engaging.
            </p>
          </div>

          {/* Feature Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="gaming-card">
              <TrendingUp className="h-12 w-12 text-neon-cyan mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Rankings</h3>
              <p className="text-gray-400 text-sm">Real-time position updates as you play</p>
            </div>
            <div className="gaming-card">
              <Users className="h-12 w-12 text-neon-purple mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Private Rooms</h3>
              <p className="text-gray-400 text-sm">Compete with friends and colleagues</p>
            </div>
            <div className="gaming-card">
              <Award className="h-12 w-12 text-neon-pink mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Achievements</h3>
              <p className="text-gray-400 text-sm">Unlock badges and special titles</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Track your progress across multiple categories and time periods!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient">
              Back to Dashboard
            </Button>
            <Button variant="outline" className="border-neon-purple/50 text-neon-cyan hover:bg-neon-purple/10">
              Create Private Room
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
