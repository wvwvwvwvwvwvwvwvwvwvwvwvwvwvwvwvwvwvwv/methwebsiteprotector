import { ParticleBackground } from "@/components/ui/particle-background";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Zap, Lock, MessageSquare, AlertTriangle, Command, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import logo from "@assets/generated_images/gothic_metallic_letter_m_logo.png";

export default function Docs() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen relative overflow-x-hidden text-foreground font-mono">
      <ParticleBackground />
      
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Meth Logo" className="h-8 w-8 object-contain" />
            <span className="font-gothic text-xl text-primary tracking-widest font-bold">𝖒𝖊𝖍</span>
          </div>
          <Button 
            variant="outline" 
            className="border-white/20 hover:bg-white/5 text-white cursor-pointer"
            onClick={() => setLocation('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Documentation</h1>
            <p className="text-xl text-gray-400">Complete guide to 𝖒𝖊𝖍 Protector</p>
          </motion.div>

          {/* Features Overview */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Feature Overview
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <DocCard 
                title="Anti-Spam"
                description="Prevents channel flooding through heuristic analysis. Configurable sensitivity thresholds to match your server's activity level."
              />
              <DocCard 
                title="Anti-Link"
                description="Prevents users from sending any links."
              />
              <DocCard 
                title="Bad Word Filter"
                description="Automatically detects and deletes messages containing prohibited words. Customizable word lists for different server contexts."
              />
              <DocCard 
                title="Auto Warnings"
                description="Intelligent tracking system that records violations and automatically enforces penalties based on configurable thresholds."
              />
              <DocCard 
                title="Auto Mute"
                description="Automatically mutes users after they reach the configured warning threshold through /setup_warnings."
              />
              <DocCard 
                title="Moderation Channel"
                description="Centralized logging of all moderation actions and violations. Audit trail for server administrators."
              />
            </div>
          </motion.section>

          {/* Slash Commands */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Command className="w-8 h-8 text-primary" />
              Slash Commands
            </h2>
            
            <div className="space-y-4">
              <CommandDoc 
                cmd="/setup"
                description="Initialize Protector configuration for your server. Run this first after inviting the bot."
              />
              <CommandDoc 
                cmd="/setup_antispam"
                description="Configure anti-spam detection sensitivity and response actions. Set threshold levels that match your server's activity."
              />
              <CommandDoc 
                cmd="/setup_warnings"
                description="Configure the auto-warning system. Set warning thresholds and penalties (mute, kick, ban)."
              />
              <CommandDoc 
                cmd="/antispam_status"
                description="Check the current status of anti-spam protection. View detection metrics and activity logs."
              />
              <CommandDoc 
                cmd="/check_config"
                description="View your server's complete configuration. See all enabled modules and their settings."
              />
              <CommandDoc 
                cmd="/check_warnings"
                description="View warnings for a specific user. Shows violation history and warning count."
              />
              <CommandDoc 
                cmd="/user_history"
                description="View complete moderation history for a user. Includes all infractions, warnings, and actions taken."
              />
              <CommandDoc 
                cmd="/reset_warnings"
                description="Reset warnings for a user. Use to give users a fresh start after they improve behavior."
              />
              <CommandDoc 
                cmd="/debug_mod_logs"
                description="Access detailed moderation logs for debugging and auditing purposes. Admin-only command."
              />
            </div>
          </motion.section>

          {/* Setup Guide */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Getting Started</h2>
            
            <div className="space-y-6">
              <SetupStep 
                number="1"
                title="Invite the Bot"
                description="Click 'Invite Protector Bot' and authorize it on your Discord server. The bot requires message management and moderation permissions."
              />
              <SetupStep 
                number="2"
                title="Run /setup"
                description="Execute /setup in your server to initialize Protector. This creates the necessary roles and channels for the bot to function."
              />
              <SetupStep 
                number="3"
                title="Configure Modules"
                description="Use /setup_antispam and /setup_warnings to enable and configure each protection module for your specific needs."
              />
              <SetupStep 
                number="4"
                title="Enable Moderation Channel"
                description="Designate a private channel where all moderation logs will be posted. Use /debug_mod_logs to view activity."
              />
              <SetupStep 
                number="5"
                title="Monitor and Adjust"
                description="Check /antispam_status and /check_config regularly. Adjust sensitivity levels based on your server's needs."
              />
            </div>
          </motion.section>


          <footer className="text-center text-gray-600 text-sm border-t border-white/5 pt-12">
            <p className="flex items-center justify-center gap-2">Made by <span className="text-primary font-bold">@611v</span> <MessageCircle className="w-4 h-4" /></p>
          </footer>
        </div>
      </main>
    </div>
  );
}

function DocCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-colors group">
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

function CommandDoc({ cmd, description }: { cmd: string; description: string }) {
  return (
    <div className="bg-black/40 border border-white/10 rounded-lg p-6 hover:border-primary/50 transition-colors">
      <div className="font-mono text-primary font-bold text-lg mb-2">{cmd}</div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function SetupStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 border border-primary/50">
          <span className="text-primary font-bold">{number}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
