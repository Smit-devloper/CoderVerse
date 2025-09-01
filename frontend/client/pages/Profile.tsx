import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Star, 
  Zap, 
  Target, 
  Calendar,
  Trophy,
  Badge,
  Settings,
  Camera
} from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="gaming-card mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center">
                <User className="h-16 w-16 text-white" />
              </div>
              <button className="absolute bottom-2 right-2 p-2 bg-gaming-card border border-gaming-border rounded-full hover:bg-neon-purple/20 transition-colors">
                <Camera className="h-4 w-4 text-neon-cyan" />
              </button>
              <div className="absolute -top-2 -right-2 bg-neon-green p-1 rounded-full">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-ping"></div>
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-white mb-2">CodeMaster2024</h1>
              <p className="text-neon-cyan mb-4">Level 15 Developer</p>
              
              {/* XP Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Experience</span>
                  <span className="text-sm text-neon-cyan">2,847 / 3,000 XP</span>
                </div>
                <div className="w-full bg-gaming-darker rounded-full h-2">
                  <div className="bg-gradient-to-r from-neon-cyan to-neon-purple h-2 rounded-full" style={{ width: "94.9%" }}></div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-cyan">7</div>
                  <div className="text-sm text-gray-400">Day Streak</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple">156</div>
                  <div className="text-sm text-gray-400">Challenges</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-pink">#42</div>
                  <div className="text-sm text-gray-400">Global Rank</div>
                </div>
              </div>

              <Button className="btn-gradient">
                <Settings className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Coming Soon Content */}
        <div className="text-center py-16">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Profile Page Coming Soon!</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We're working on an amazing profile experience where you can view your achievements, 
              track your progress, customize your avatar, and much more.
            </p>
          </div>

          {/* Feature Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="gaming-card">
              <Badge className="h-12 w-12 text-neon-purple mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Achievement Badges</h3>
              <p className="text-gray-400 text-sm">Collect and display your coding achievements</p>
            </div>
            <div className="gaming-card">
              <Star className="h-12 w-12 text-neon-cyan mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Skill Tracking</h3>
              <p className="text-gray-400 text-sm">Monitor your progress across different technologies</p>
            </div>
            <div className="gaming-card">
              <Trophy className="h-12 w-12 text-neon-pink mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Leaderboard Stats</h3>
              <p className="text-gray-400 text-sm">See your ranking and competition history</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Want to help shape this feature? Continue exploring and give us feedback!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient">
              Back to Dashboard
            </Button>
            <Button variant="outline" className="border-neon-purple/50 text-neon-cyan hover:bg-neon-purple/10">
              Explore Other Features
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
