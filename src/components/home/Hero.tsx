import { Button } from "@/components/ui/button"
import Link from "next/link";

export function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-30 bg-gradient-to-r from-[#1a237e] via-[#4a148c] to-[#311b92] text-white flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Decoding the Path to Success
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl py-4">
                        CoYo empowers middle and high school students to excel academically and personally, paving the way for admissions to top universities and successful careers.
                    </p>
                    <p className="text-2xl pb-4 font-semibold text-[#FF5722]">Own Your Future</p>
                    <Link href="/contact">
                        <Button className="bg-[#FF5722] hover:bg-[#F4511E]" size="lg">
                            Start Your Journey
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}