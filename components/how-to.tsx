"use client"

import { motion } from "framer-motion"

const HowToUse = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold text-center relative">
                    <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                        How It Works
                    </span>
                    <motion.div 
                        className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-20 rounded-full bg-gradient-to-r from-violet-600 to-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    />
                </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-gradient-to-b from-background to-background/70 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg hover:shadow-xl hover:border-violet-500/20 transition-all duration-300 p-6 flex flex-col items-center text-center"
                    whileHover={{ y: -5 }}
                >
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-400/20 to-violet-500/20 flex items-center justify-center mb-6 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">1. Install Extension</h3>
                    <p className="text-muted-foreground">Download and install the ZolveAI extension from your browser&apos;s extension store.</p>
                </motion.div>
            
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-b from-background to-background/70 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg hover:shadow-xl hover:border-violet-500/20 transition-all duration-300 p-6 flex flex-col items-center text-center"
                    whileHover={{ y: -5 }}
                >
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center mb-6 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">2. Navigate to Exam</h3>
                    <p className="text-muted-foreground">Open your exam or assessment page where you need assistance.</p>
                </motion.div>
            
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gradient-to-b from-background to-background/70 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg hover:shadow-xl hover:border-violet-500/20 transition-all duration-300 p-6 flex flex-col items-center text-center"
                    whileHover={{ y: -5 }}
                >
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green-400/20 to-teal-500/20 flex items-center justify-center mb-6 shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">3. Get Results</h3>
                    <p className="text-muted-foreground">Right-Click any where on the page and choose Zolve from context menu and you will have the results on right bottom corner.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default HowToUse