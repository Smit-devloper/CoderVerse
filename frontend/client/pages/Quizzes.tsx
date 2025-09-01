import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Brain, Code, Database, Server, Smartphone } from "lucide-react";

export default function Quizzes() {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">AI-Powered Quizzes Coming Soon!</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Test your programming knowledge with adaptive quizzes powered by AI. 
              Get personalized questions based on your skill level and learning progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="gaming-card">
              <Code className="h-12 w-12 text-neon-cyan mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">JavaScript</h3>
              <p className="text-gray-400 text-sm">ES6+, React, Node.js fundamentals</p>
            </div>
            <div className="gaming-card">
              <Database className="h-12 w-12 text-neon-purple mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Data Structures</h3>
              <p className="text-gray-400 text-sm">Arrays, Trees, Graphs, Hash Tables</p>
            </div>
            <div className="gaming-card">
              <Server className="h-12 w-12 text-neon-pink mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">System Design</h3>
              <p className="text-gray-400 text-sm">Scalability, Architecture, APIs</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient">Back to Dashboard</Button>
            <Button variant="outline" className="border-neon-purple/50 text-neon-cyan hover:bg-neon-purple/10">
              Notify Me When Ready
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
