import { ParticleBackground } from "@/components/ui/particle-background";
import { motion, Variants } from "framer-motion";
import { Shield, Zap, Lock, Skull, Check, X, Server, MessageSquare, AlertTriangle, Command, MessageCircle, Clock } from "lucide-react";
import logo from "@assets/generated_images/gothic_metallic_letter_m_logo.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Home() {
  const [, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden text-foreground font-mono">
      <ParticleBackground />
      
      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <img src={logo} alt="Meth Logo" className="h-8 w-8 object-contain flex-shrink-0" />
            <span className="font-gothic text-sm sm:text-xl text-primary tracking-widest font-bold truncate">𝖒𝖊𝖙𝖍 𝕻𝖗𝖔𝖙𝖊𝖈𝖙𝖔𝖗</span>
          </div>
          <div className="flex gap-2 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors cursor-pointer bg-none border-none p-0 whitespace-nowrap">Features</button>
            <button onClick={() => scrollToSection('protector')} className="hover:text-primary transition-colors cursor-pointer bg-none border-none p-0 whitespace-nowrap">Overview</button>
            <button onClick={() => window.open('https://discord.gg/UfnBFCZav2', '_blank')} className="hover:text-primary transition-colors cursor-pointer bg-none border-none p-0 whitespace-nowrap">Support</button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 min-h-[60vh] flex flex-col items-center justify-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="relative inline-block">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <img src={logo} alt="Meth Logo" className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(220,20,60,0.5)]" />
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-9xl font-gothic text-white tracking-widest mb-4">
              <span className="text-primary text-shadow-neon">𝖒𝖊𝖙𝖍 𝕻𝖗𝖔𝖙𝖊𝖈𝖙𝖔𝖗</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light space-y-2 px-4">
              <div><span className="text-primary font-bold">You suck at protecting your own server?</span></div>
              <div>just add this bot and mind your bussines.</div>
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-8 px-4 w-full sm:w-auto">
              <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-bold px-8 h-14 text-lg shadow-[0_0_20px_rgba(220,20,60,0.3)] cursor-pointer w-full sm:w-auto" onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1428375851069866005', '_blank')}>
                <Shield className="mr-2 h-5 w-5" /> Invite Protector Bot
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white h-14 px-8 text-lg cursor-pointer w-full sm:w-auto" onClick={() => setLocation('/docs')}>
                View Documentation
              </Button>
            </motion.div>
          </motion.div>
        </section>


        {/* Features Grid */}
        <section id="features" className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Features</h2>
            <p className="text-gray-400 text-sm sm:text-base">Configure your server's security level</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <FeatureCard 
              icon={<Skull className="w-8 h-8 text-primary" />}
              title="Anti-Spam"
              description="Heuristic analysis prevents channel flooding. Configurable sensitivity thresholds."
            />
            <FeatureCard 
              icon={<Lock className="w-8 h-8 text-primary" />}
              title="Anti-Link"
              description="Prevents users from sending any links."
            />
            <FeatureCard 
              icon={<MessageSquare className="w-8 h-8 text-primary" />}
              title="Bad Word Filter"
              description="Automatically detects and deletes messages containing prohibited words."
            />
            <FeatureCard 
              icon={<AlertTriangle className="w-8 h-8 text-primary" />}
              title="Auto Warnings"
              description="Intelligent warning system that tracks violations and auto-enforces penalties."
            />
            <FeatureCard 
              icon={<Clock className="w-8 h-8 text-primary" />}
              title="Auto Mute"
              description="Automatically mutes users after they reach the configured warning threshold."
            />
            <FeatureCard 
              icon={<MessageSquare className="w-8 h-8 text-primary" />}
              title="Moderation Channel"
              description="Centralized logging of all moderation actions and violations."
            />
          </div>
        </section>

        {/* Bot Commands Section */}
        <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2 sm:gap-3">
              <Command className="w-8 sm:w-10 h-8 sm:h-10 text-primary" />
              Slash Commands
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Full control via Discord commands</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 relative z-10">
              {[
                { cmd: '/setup', desc: 'Initialize Protector configuration' },
                { cmd: '/setup_antispam', desc: 'Configure anti-spam settings' },
                { cmd: '/setup_warnings', desc: 'Configure warning system' },
                { cmd: '/antispam_status', desc: 'Check anti-spam status' },
                { cmd: '/check_config', desc: 'View current configuration' },
                { cmd: '/check_warnings', desc: 'View user warnings' },
                { cmd: '/user_history', desc: 'View user moderation history' },
                { cmd: '/reset_warnings', desc: 'Reset user warnings' },
                { cmd: '/debug_mod_logs', desc: 'View moderation logs' },
              ].map((command, idx) => (
                <div key={idx} className="bg-black/40 border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-colors group">
                  <div className="font-mono text-primary font-bold mb-2 group-hover:text-white transition-colors">{command.cmd}</div>
                  <div className="text-sm text-gray-400">{command.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Protector Section */}
        <section id="protector" className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-2 sm:gap-3">
              <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-primary" />
              Protection Overview
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">How Protector keeps your Discord server safe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg mt-1">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-Time Detection</h3>
                  <p className="text-gray-400">Instantly detects and removes harmful content before it impacts your community.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg mt-1">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Smart Filtering</h3>
                  <p className="text-gray-400">Advanced algorithms learn your server's rules and enforce them consistently.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg mt-1">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Detailed Logging</h3>
                  <p className="text-gray-400">Comprehensive moderation logs help you understand what's happening in your server.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-primary/20 via-transparent to-transparent border border-primary/30 rounded-2xl p-8 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Protector?</h3>
              <ul className="space-y-3">
                {[
                  "Almost unbypassable protection against spam and abuse",
                  "Easy setup with /setup command",
                  "Fully configurable for your community",
                  "24/7 active monitoring",
                  "Instant response to threats"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <footer className="container mx-auto px-4 sm:px-6 py-12 text-center text-gray-600 text-xs sm:text-sm border-t border-white/5 mt-12">
          <p className="flex items-center justify-center gap-2">Made by <span className="text-primary font-bold">@611v</span> <MessageCircle className="w-4 h-4" /></p>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-card border border-white/5 p-6 rounded-xl hover:border-primary/50 transition-colors group"
    >
      <div className="flex justify-start items-start mb-4">
        <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function StatCard({ number, label }: { number: string, label: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-4 rounded text-center hover:bg-white/10 transition-colors">
      <div className="text-2xl font-bold text-white mb-1">{number}</div>
      <div className="text-xs text-gray-500 uppercase tracking-widest">{label}</div>
    </div>
  );
}
