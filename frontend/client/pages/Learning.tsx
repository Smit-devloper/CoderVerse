import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { BookOpen, Code, Smartphone, Server, Database, Globe } from "lucide-react";

export default function Learning() {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-16">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Learning Modules Coming Soon!</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Dive deep into structured learning paths designed to take you from beginner to expert. 
              Interactive tutorials, hands-on projects, and real-world applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="gaming-card">
              <Code className="h-12 w-12 text-neon-cyan mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">React Mastery</h3>
              <p className="text-gray-400 text-sm">From basics to advanced patterns</p>
            </div>
            <div className="gaming-card">
              <Server className="h-12 w-12 text-neon-purple mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Python Fundamentals</h3>
              <p className="text-gray-400 text-sm">Backend development and automation</p>
            </div>
            <div className="gaming-card">
              <Database className="h-12 w-12 text-neon-pink mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Database Design</h3>
              <p className="text-gray-400 text-sm">SQL, NoSQL, and optimization</p>
            </div>
            <div className="gaming-card">
              <Globe className="h-12 w-12 text-neon-green mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">DevOps Basics</h3>
              <p className="text-gray-400 text-sm">CI/CD, Docker, and deployment</p>
            </div>
            <div className="gaming-card">
              <Smartphone className="h-12 w-12 text-neon-cyan mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Mobile Development</h3>
              <p className="text-gray-400 text-sm">React Native and Flutter</p>
            </div>
            <div className="gaming-card">
              <Code className="h-12 w-12 text-neon-purple mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Algorithms & DS</h3>
              <p className="text-gray-400 text-sm">Problem-solving techniques</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient">Back to Dashboard</Button>
            <Button variant="outline" className="border-neon-purple/50 text-neon-cyan hover:bg-neon-purple/10">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
