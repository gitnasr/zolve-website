"use client"

import { Book } from "lucide-react"
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
                    <Link href="/docs" rel="noopener noreferrer">
                        <Button 
                            variant="ghost" 
                            className="flex items-center gap-2 text-sm hover:bg-primary/10 transition-all"
                        >
                            <Book className="h-6 w-6 text-cyan-500" />
                            <span className="hidden sm:inline">How to Use</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar