"use client"

import { YoutubeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-all duration-200">
            <div className="container mx-auto flex items-center justify-between py-4">
                {/* Empty div to balance the layout */}
                <div className="w-24"></div>
                
                {/* Centered logo */}
                <Link href="/" className="flex items-center transition-all hover:opacity-80 absolute left-1/2 transform -translate-x-1/2">
                    <Image alt="Zolve Logo" src="/logo.png" width={36} height={36} className="cursor-pointer" />
                </Link>
                
                <div className="flex items-center gap-4">
                    <Link href="https://www.youtube.com/watch?v=L_zWCIdVDsw" target="_blank" rel="noopener noreferrer">
                        <Button 
                            variant="ghost" 
                            className="flex items-center gap-2 text-sm hover:bg-primary/10 transition-all"
                        >
                            <YoutubeIcon className="h-4 w-4 text-red-500" />
                            <span className="hidden sm:inline">How to Use</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar