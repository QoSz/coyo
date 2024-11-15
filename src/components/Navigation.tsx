'use client'

import Link from "next/link"
import { useState } from "react"
import { 
    Menu, 
    Waypoints, // for Methodology
    Trophy, // for Success Stories
    History, // for Journey
    UserIcon, // for About
    Phone // for Contact
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { href: "/#methodology", label: "Methodology", icon: <Waypoints className="h-4 w-4" /> },
        { href: "/#success-stories", label: "Success Stories", icon: <Trophy className="h-4 w-4" /> },
        { href: "/#timeline", label: "Journey", icon: <History className="h-4 w-4" /> },
        { href: "/#about", label: "About", icon: <UserIcon className="h-4 w-4" /> },
        { href: "/contact", label: "Contact", icon: <Phone className="h-4 w-4" /> },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8 w-full">
                <Link href="/" className="flex items-center">
                    <div className="bg-[#FF5722] px-3 py-2 rounded">
                        <div className="font-bold text-white text-xl tracking-tight flex flex-col">
                            <span>CO</span>
                            <span className="ml-6 -mt-3">YO</span>
                        </div>
                    </div>
                </Link>
                <nav className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <Link 
                            key={item.href} 
                            className="text-sm font-medium hover:text-[#FF5722] flex items-center gap-2" 
                            href={item.href}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle>
                                <div className="flex items-center">
                                    <div className="bg-[#FF5722] px-3 py-2 rounded">
                                        <div className="font-bold text-white text-xl tracking-tight flex flex-col">
                                            <span>CO</span>
                                            <span className="ml-6 -mt-3">YO</span>
                                        </div>
                                    </div>
                                </div>
                            </SheetTitle>
                            <SheetDescription>
                                Quick Links
                            </SheetDescription>
                        </SheetHeader>
                        <nav className="flex flex-col space-y-4 mt-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium hover:text-[#FF5722] flex items-center gap-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}