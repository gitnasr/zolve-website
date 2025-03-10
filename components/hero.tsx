'use client'

import { ChromeIcon, GithubIcon, Sparkles } from "lucide-react"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

const HeroSection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 overflow-hidden">
            <motion.div 
                className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/15 via-transparent to-orange-500/15"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    backgroundSize: '200% 200%'
                }}
            />
            
            <motion.div 
                className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.4, 0.6],
                    x: [0, 30, 0],
                    y: [0, -20, 0]
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                }}
            />
            <motion.div 
                className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-r from-pink-500/20 to-orange-600/20 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.3, 0.5],
                    x: [0, -30, 0],
                    y: [0, 20, 0]
                }}
                transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.2, 0.3],
                    rotate: [0, 45, 0]
                }}
                transition={{ 
                    duration: 15, 
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="text-base font-medium text-gray-200">AI-Powered Solutions</span>
                </motion.div>

                <motion.h4 
                    className="max-w-3xl mb-6 text-3xl font-bold leading-tight tracking-tight text-center text-white scroll-m-20 sm:text-4xl md:text-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    A Browser Extension that will use AI to Solve Your Online Exams
                </motion.h4>

                <motion.h1 
                    className="inline-block mb-10 text-6xl font-black tracking-tight text-transparent uppercase transition-all scroll-m-20 sm:text-7xl lg:text-8xl"
                    style={{
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundImage: 'linear-gradient(90deg, #FF512F, #DD2476, #FF512F)',
                        backgroundSize: '200% 100%',
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
                    }}
                    transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    Zolve
                </motion.h1>

                <motion.div 
                    className="flex flex-col items-center w-full mt-6 mb-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:w-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                >
                    <Button 
                        className="w-full px-8 py-8 text-lg text-white transition-all border-0 shadow-lg sm:w-auto bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-blue-500/30 hover:scale-105"
                        onClick={() => window.open("https://chromewebstore.google.com/detail/fcejfbaichedmmnejemkpdofjjelbgkp?utm_source=item-share-cb", "_blank")}
                    >
                        <ChromeIcon className="w-5 h-5 mr-3" /> Get it From Chrome Web Store
                    </Button>
                    
                    <Button 
                        className="w-full px-8 py-8 text-lg text-white transition-all border shadow-lg sm:w-auto backdrop-blur-sm bg-white/15 border-white/30 hover:bg-white/25 shadow-white/5 hover:scale-105"
                        onClick={() => window.open("https://github.com/gitnasr/zolve", "_blank")}
                        variant="outline"
                    >
                        <GithubIcon className="w-5 h-5 mr-3" /> From GitHub
                    </Button>
                </motion.div>

                <motion.div
                    className="max-w-sm px-5 py-2 border rounded-md bg-white/10 backdrop-blur-sm border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <p className="text-base font-medium text-center text-gray-200">
                        * Supported Platforms: <span className="text-blue-400">Microsoft Forms</span>
                    </p>
                </motion.div>
            </div>

        
        </div>
    )
}

export default HeroSection