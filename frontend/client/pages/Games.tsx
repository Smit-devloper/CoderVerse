import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Zap, 
  Clock, 
  Code, 
  Keyboard,
  Bug,
  Target,
  Trophy,
  Play,
  Star,
  Timer
} from "lucide-react";

export default function Games() {
  const upcomingGames = [
    {
      title: "Typing Speed Challenge",
      description: "Test your typing speed with code snippets",
      icon: Keyboard,
      difficulty: "Easy",
      timeEstimate: "5 min",
      xpReward: "50 XP",
      color: "from-neon-cyan to-blue-600"
    },
    {
      title: "Debug Hunt",
      description: "Find and fix bugs in broken code",
      icon: Bug,
      difficulty: "Medium",
      timeEstimate: "10 min",
      xpReward: "100 XP",
      color: "from-neon-purple to-purple-600"
    },
    {
      title: "Algorithm Race",
      description: "Solve algorithmic challenges against the clock",
      icon: Zap,
      difficulty: "Hard",
      timeEstimate: "15 min",
      xpReward: "150 XP",
      color: "from-neon-pink to-red-600"
    },
    {
      title: "Code Golf",
      description: "Write the shortest code to solve the problem",
      icon: Target,
      difficulty: "Medium",
      timeEstimate: "12 min",
      xpReward: "120 XP",
      color: "from-neon-green to-green-600"
    },
    {
      title: "AI Quiz Battle",
      description: "Answer programming questions powered by AI",
      icon: Code,
      difficulty: "Easy",
      timeEstimate: "8 min",
      xpReward: "75 XP",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Daily <span className="text-neon-cyan">Games</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Challenge yourself with rotating daily games designed to improve your coding skills, 
            speed, and problem-solving abilities.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-cyan">5</div>
              <div className="text-sm text-gray-400">Games Today</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-purple">24h</div>
              <div className="text-sm text-gray-400">Reset Timer</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-pink">495</div>
              <div className="text-sm text-gray-400">Max XP Today</div>
            </div>
          </div>
        </div>

        {/* Game Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {upcomingGames.map((game, index) => {
            const Icon = game.icon;
            return (
              <div key={index} className="gaming-card group hover:scale-105 transition-all duration-300">
                {/* Game Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${game.color}`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-neon-cyan font-medium">{game.xpReward}</div>
                    <div className="text-xs text-gray-400">{game.timeEstimate}</div>
                  </div>
                </div>

                {/* Game Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {game.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {game.description}
                </p>

                {/* Difficulty Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    game.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    game.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {game.difficulty}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{game.timeEstimate}</span>
                  </div>
                </div>

                {/* Play Button */}
                <Button 
                  disabled
                  className="w-full bg-gray-600 text-gray-400 cursor-not-allowed"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-16">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <Gamepad2 className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Games Coming Soon!</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We're developing an exciting collection of coding games that will challenge your skills 
              and make learning fun. Each game is designed to improve specific programming abilities.
            </p>
          </div>

          {/* Feature Preview */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
            <div className="gaming-card">
              <Timer className="h-10 w-10 text-neon-cyan mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Timed Challenges</h3>
              <p className="text-gray-400 text-sm">Race against the clock</p>
            </div>
            <div className="gaming-card">
              <Trophy className="h-10 w-10 text-neon-purple mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Leaderboards</h3>
              <p className="text-gray-400 text-sm">Compete with others</p>
            </div>
            <div className="gaming-card">
              <Star className="h-10 w-10 text-neon-pink mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">XP Rewards</h3>
              <p className="text-gray-400 text-sm">Earn experience points</p>
            </div>
            <div className="gaming-card">
              <Zap className="h-10 w-10 text-neon-green mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Skill Building</h3>
              <p className="text-gray-400 text-sm">Improve coding abilities</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Each game will have multiple difficulty levels and real-time multiplayer support!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient">
              Back to Dashboard
            </Button>
            <Button variant="outline" className="border-neon-purple/50 text-neon-cyan hover:bg-neon-purple/10">
              Notify Me When Ready
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
