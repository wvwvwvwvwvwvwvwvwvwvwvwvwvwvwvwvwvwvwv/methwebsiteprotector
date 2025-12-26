import { ParticleBackground } from "@/components/ui/particle-background";
import { motion, Variants } from "framer-motion";
import { Shield, Zap, Lock, Skull, Check, X, Server, MessageSquare, AlertTriangle, Command, MessageCircle, Clock, StickyNote, ShoppingBag, Terminal, ZapOff, Star, CreditCard, Gamepad2, Coins, Crown } from "lucide-react";
import logo from "@assets/generated_images/gothic_metallic_letter_m_logo.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  const [activeTab, setActiveTab] = useState("protector");

  return (
    <div className="min-h-screen relative overflow-x-hidden text-foreground font-mono">
      <ParticleBackground />
      
      {/* Navigation - Minimalist */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <img src={logo} alt="Meth Logo" className="h-8 w-8 object-contain flex-shrink-0" />
            <span className="font-gothic text-sm sm:text-xl text-primary tracking-widest font-bold truncate">𝖒𝖊𝖙𝖍</span>
          </div>
          <div className="flex gap-2 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <button onClick={() => window.open('https://discord.gg/UfnBFCZav2', '_blank')} className="hover:text-primary transition-colors cursor-pointer bg-none border-none p-0 whitespace-nowrap">Support</button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-20 text-center">
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
              <span className="text-primary text-shadow-neon">𝖒𝖊𝖙𝖍</span>
            </motion.h1>
          </motion.div>
        </section>

        {/* Bots Tabs Section */}
        <section className="container mx-auto px-4 sm:px-6">
          <Tabs defaultValue="protector" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white/5 border border-white/10 h-auto p-1 grid grid-cols-2 md:grid-cols-4 gap-1">
                <TabsTrigger value="sticky" className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-3 text-xs sm:text-sm font-bold">sticky dora the fedora</TabsTrigger>
                <TabsTrigger value="protector" className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-3 text-xs sm:text-sm font-bold">𝖒𝖊𝖙𝖍 𝕻𝖗𝖔𝖙𝖊𝖈𝖙𝖔𝖗</TabsTrigger>
                <TabsTrigger value="buyit" className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-3 text-xs sm:text-sm font-bold">BuyIT</TabsTrigger>
                <TabsTrigger value="meth" className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-3 text-xs sm:text-sm font-bold uppercase">𝖒𝖊𝖙𝖍</TabsTrigger>
              </TabsList>
            </div>

            {/* Sticky Dora Section */}
            <TabsContent value="sticky" className="space-y-16 animate-in fade-in duration-500">
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
                  <StickyNote className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold">sticky dora the fedora</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  aka. <span className="text-primary font-bold">StickyBot</span> is a bot where you can stick a message into every channel, and yes, it's a "StickyBot" copy but completely free.
                </p>
                <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-bold h-14 px-8" onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1426993140446925010', '_blank')}>
                  Invite sticky dora the fedora
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { cmd: '/list', desc: 'List all active sticky messages' },
                  { cmd: '/remove', desc: 'Remove sticky message from a channel' },
                  { cmd: '/setup', desc: 'Set up a sticky message in a channel' },
                ].map((command, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-colors group">
                    <div className="font-mono text-primary text-xl font-bold mb-2 group-hover:text-white transition-colors">{command.cmd}</div>
                    <div className="text-gray-400">{command.desc}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Protector Section (Current) */}
            <TabsContent value="protector" className="space-y-16 animate-in fade-in duration-500">
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold">𝖒𝖊𝖙𝖍 𝕻𝖗𝖔𝖙𝖊𝖈𝖙𝖔𝖗</h2>
                <p className="text-xl text-gray-400">
                  <span className="text-primary font-bold">You suck at protecting your own server?</span><br/>
                  Just add this bot and mind your business.
                </p>
                <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-bold h-14 px-8" onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1428375851069866005', '_blank')}>
                  Invite Protector Bot
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <FeatureCard icon={<Skull className="w-8 h-8 text-primary" />} title="Anti-Spam" description="Heuristic analysis prevents channel flooding." />
                <FeatureCard icon={<Lock className="w-8 h-8 text-primary" />} title="Anti-Link" description="Prevents users from sending any links." />
                <FeatureCard icon={<MessageSquare className="w-8 h-8 text-primary" />} title="Bad Word Filter" description="Automatically detects and deletes prohibited words." />
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Command className="text-primary" /> Commands
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { cmd: '/setup', desc: 'Initialize Protector configuration' },
                    { cmd: '/setup_antispam', desc: 'Configure anti-spam settings' },
                    { cmd: '/setup_warnings', desc: 'Configure warning system' },
                    { cmd: '/antispam_status', desc: 'Check anti-spam status' },
                    { cmd: '/check_config', desc: 'View current configuration' },
                    { cmd: '/check_warnings', desc: 'View user warnings' },
                  ].map((command, idx) => (
                    <div key={idx} className="bg-black/40 border border-white/10 rounded-lg p-4">
                      <div className="font-mono text-primary font-bold">{command.cmd}</div>
                      <div className="text-sm text-gray-400">{command.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* BuyIT Section */}
            <TabsContent value="buyit" className="space-y-16 animate-in fade-in duration-500">
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
                  <ShoppingBag className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold">BuyIT</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  BuyIT is a bot where you can add to your server and use it as like <span className="text-primary font-bold">shop manager</span>, where people use command and you get a message to your webhook.
                </p>
                <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-bold h-14 px-8" onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1435649084210937856', '_blank')}>
                  Invite BuyIT
                </Button>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { cmd: '/accept-request', desc: 'Accept buy request' },
                  { cmd: '/add-item', desc: 'Add item to shop' },
                  { cmd: '/buy', desc: 'Initiate purchase' },
                  { cmd: '/remove-item', desc: 'Remove from shop' },
                  { cmd: '/setup', desc: 'Configure shop manager' },
                ].map((command, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="font-mono text-primary font-bold mb-1">{command.cmd}</div>
                    <div className="text-xs text-gray-500">{command.desc}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Meth Bot Section */}
            <TabsContent value="meth" className="space-y-16 animate-in fade-in duration-500">
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
                  <Terminal className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold uppercase">𝖒𝖊𝖙𝖍</h2>
                <p className="text-xl text-gray-400">
                  <span className="text-primary font-bold">𝖒𝖊𝖙𝖍</span> is a no-admin needed raid bot.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-bold h-14 px-8" onClick={() => window.open('https://discord.gg/UfnBFCZav2', '_blank')}>
                    Get 𝖒𝖊𝖙𝖍
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Free Version */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">Free Version</h3>
                      <p className="text-gray-400">Basic features for everyone</p>
                    </div>
                    <Zap className="text-gray-600 w-8 h-8" />
                  </div>
                  <ul className="space-y-4 mb-8">
                    {['Free spam', 'Fast spam', 'Bypass text (bypass automods)'].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <Check className="text-primary w-5 h-5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Commands</p>
                    <div className="flex flex-wrap gap-2">
                      {['/play', '/spam', '/bypass', '/rob', '/leaderboard', '/shop', '/shop-buy', '/rob-bank'].map((cmd) => (
                        <span key={cmd} className="text-xs font-mono bg-black/50 px-2 py-1 rounded border border-white/5">{cmd}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Premium Version */}
                <div className="bg-primary/5 border border-primary/30 rounded-2xl p-8 relative overflow-hidden group hover:border-primary/50 transition-all shadow-[0_0_40px_rgba(220,20,60,0.1)]">
                  <div className="absolute top-0 right-0 p-4">
                    <Crown className="text-primary w-8 h-8 animate-pulse" />
                  </div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        Premium Version
                        <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">Pro</span>
                      </h3>
                      <p className="text-primary/70">Maximum power and speed</p>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {['Custom message spam', 'Faster than free version', 'Automod bypass in our server'].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-white">
                        <Star className="text-primary w-5 h-5 fill-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-8 p-4 bg-black/40 rounded-xl border border-primary/20">
                    <p className="text-xs text-primary font-bold uppercase mb-2">Pricing & Access</p>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-primary" /> $5 via PayPal (Friends & Family)
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" /> Server Boost (Key lasts while boosting)
                      </div>
                      <div className="flex items-center gap-2">
                        <Gamepad2 className="w-4 h-4 text-primary" /> Play games for fake money keys
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest">Premium Commands</p>
                    <div className="flex flex-wrap gap-2">
                      {['/custom'].map((cmd) => (
                        <span key={cmd} className="text-xs font-mono bg-primary text-white px-2 py-1 rounded shadow-lg">{cmd}</span>
                      ))}
                      <span className="text-[10px] text-primary/60 italic">...more coming soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <footer className="container mx-auto px-4 sm:px-6 py-12 text-center text-gray-600 text-xs sm:text-sm border-t border-white/5 mt-20">
          <p className="flex items-center justify-center gap-2 tracking-tighter">
            Made by <span className="text-primary font-bold">@611v</span> aka. <span className="text-primary font-bold">corex</span> 
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5 fill-primary ml-1" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2758-3.68-.2758-5.4876 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.419-2.157 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
            </svg>
          </p>
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

