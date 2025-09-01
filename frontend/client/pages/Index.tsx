import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  Code2,
  Zap,
  Trophy,
  Users,
  Star,
  Play,
  UserPlus,
  ArrowRight
} from "lucide-react";
import {
  FadeInWrapper,
  StaggerWrapper,
  HoverCard,
  GlowingElement,
  FloatingElement
} from "@/components/animations/MotionComponents";
import { motion } from "framer-motion";

export default function Index() {
  // Animated code snippets for background
  const codeSnippets = [
    "function solve() { return 'Hello World'; }",
    "const answer = 42;",
    "if (code === 'perfect') return true;",
    "for (let i = 0; i < infinity; i++) { learn(); }",
    "console.log('Level Up!');",
    "while (gaming) { improve(); }",
    "class Coder extends Gamer { }",
    "return victory ? 'GG' : 'retry';",
  ];

  return (
    <div className="min-h-screen bg-gaming-dark relative overflow-hidden">
      <Navbar />
      
      {/* Animated Code Background */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        {codeSnippets.map((code, index) => (
          <div
            key={index}
            className="absolute text-neon-cyan font-mono text-sm whitespace-nowrap animate-code-flow"
            style={{
              top: `${(index * 12) + 10}%`,
              animationDelay: `${index * 2}s`,
              animationDuration: `${15 + (index * 3)}s`,
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Main Logo/Icon */}
          <FadeInWrapper className="flex justify-center mb-8">
            <div className="relative">
              <FloatingElement>
                <GlowingElement className="p-6 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-3xl">
                  <Code2 className="h-16 w-16 text-white" />
                </GlowingElement>
              </FloatingElement>
            </div>
          </FadeInWrapper>

          {/* Hero Text */}
          <FadeInWrapper delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                CoderVerse
              </span>
            </h1>
          </FadeInWrapper>

          <FadeInWrapper delay={0.4}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-8">
              Play. Code. Compete.
            </h2>
          </FadeInWrapper>

          <FadeInWrapper delay={0.6}>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Level up your coding skills through interactive games, daily challenges, and competitive programming.
              Join thousands of developers in the ultimate gamified learning experience.
            </p>
          </FadeInWrapper>

          {/* CTA Buttons */}
          <FadeInWrapper delay={0.8} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/dashboard">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button className="btn-gradient text-lg px-8 py-4 group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Play as Guest
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                className="text-lg px-8 py-4 border-neon-purple/50 text-neon-cyan hover:bg-neon-purple/10 hover:border-neon-purple group"
              >
                <UserPlus className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Login / Sign Up
              </Button>
            </motion.div>
          </FadeInWrapper>

          {/* Feature Cards */}
          <StaggerWrapper className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <HoverCard>
              <motion.div
                className="gaming-card group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex justify-center mb-4">
                  <Zap className="h-12 w-12 text-neon-cyan group-hover:text-neon-purple transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Daily Challenges</h3>
                <p className="text-gray-400">
                  Solve coding puzzles, debug challenges, and speed typing tests to earn XP and climb the ranks.
                </p>
              </motion.div>
            </HoverCard>

            <HoverCard>
              <motion.div
                className="gaming-card group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex justify-center mb-4">
                  <Trophy className="h-12 w-12 text-neon-cyan group-hover:text-neon-purple transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Leaderboards</h3>
                <p className="text-gray-400">
                  Compete with developers worldwide. Track your progress and celebrate your victories.
                </p>
              </motion.div>
            </HoverCard>

            <HoverCard>
              <motion.div
                className="gaming-card group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-neon-cyan group-hover:text-neon-purple transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Learning Community</h3>
                <p className="text-gray-400">
                  Join study groups, share solutions, and learn from experienced developers in our community.
                </p>
              </motion.div>
            </HoverCard>
          </StaggerWrapper>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-cyan mb-2">10K+</div>
              <div className="text-gray-400">Active Coders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">50K+</div>
              <div className="text-gray-400">Challenges Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-cyan mb-2">100+</div>
              <div className="text-gray-400">Daily Games</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">24/7</div>
              <div className="text-gray-400">Competition</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gaming-border bg-gaming-darker/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="h-6 w-6 text-neon-purple" />
              <span className="text-white font-semibold">CoderVerse</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-neon-cyan transition-colors">Privacy</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Terms</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Support</a>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Star className="h-4 w-4 text-neon-pink" />
                <span>for developers</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
