import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full py-6 bg-gray-100">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
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