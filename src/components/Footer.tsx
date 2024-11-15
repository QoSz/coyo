import Link from "next/link"
import { Waypoints, Trophy, History, UserIcon, Phone, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

export function Footer() {
    const socialMediaLinks = [
        { href: "/", key: "facebook", icon: <Facebook className="h-6 w-6 text-[#3b5998]" /> },
        { href: "/", key: "X.com", icon: <Twitter className="h-6 w-6 text-[#1DA1F2]" /> },
        { href: "/", key: "linkedin", icon: <Linkedin className="h-6 w-6 text-[#0077B5]" /> },
    ];

    const quickLinks = [
        { href: "/#methodology", icon: <Waypoints className="h-4 w-4" />, label: "Methodology" },
        { href: "/#success-stories", icon: <Trophy className="h-4 w-4" />, label: "Success Stories" },
        { href: "/#timeline", icon: <History className="h-4 w-4" />, label: "Journey" },
        { href: "/#about", icon: <UserIcon className="h-4 w-4" />, label: "About" },
        { href: "/contact", icon: <Phone className="h-4 w-4" />, label: "Contact" },
    ];

    return (
        <footer className="w-full bg-gray-100">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <Link href="/" className="flex justify-center md:justify-start">
                            <div className="bg-[#FF5722] px-3 py-2 rounded flex items-center">
                                <div className="font-bold text-white text-xl tracking-tight flex flex-col">
                                    <span>CO</span>
                                    <span className="ml-6 -mt-3">YO</span>
                                </div>
                            </div>
                        </Link>
                        <div className="mt-4">
                            <p className="py-4 flex items-center gap-2">
                                <Mail className="h-4 w-4 text-[#FF5722]" />
                                <a href="mailto:info@coyo.edu" className="hover:text-[#FF5722]">info@coyo.edu</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-[#FF5722]" />
                                <a href="tel:+11234567890" className="hover:text-[#FF5722]">+1 (123) 456-7890</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
                        <ul>
                            {quickLinks.map(link => (
                                <li key={link.label} className="text-sm hover:text-[#FF5722] flex items-center gap-2 py-2">
                                    {link.icon}
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Connect With Us</h3>
                        <div className="flex justify-center md:justify-start gap-4">
                            {socialMediaLinks.map(link => (
                                <Link href={link.href} key={link.key} className="hover:text-[#FF5722]">
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row mt-8">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#FF5722] p-2 rounded">
                            <span className="font-bold text-white">CoYo</span>
                        </div>
                        <p className="text-sm text-gray-500">© 2024 CoYo: Own Your Future. All rights reserved.</p>
                    </div>
                    <nav className="flex gap-4">
                        <Link className="text-sm hover:text-[#FF5722]" href="#">
                            Privacy Policy
                        </Link>
                        <Link className="text-sm hover:text-[#FF5722]" href="#">
                            Terms of Service
                        </Link>
                        <Link className="text-sm hover:text-[#FF5722]" href="#">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}