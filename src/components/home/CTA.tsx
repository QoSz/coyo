import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Rocket } from 'lucide-react'

export function CTA() {
  return (
    <section className="w-full py-12 md:py-20 bg-[#FF5722]" id="contact">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl flex items-center gap-2">
            <Rocket className="h-8 w-8" />
            Ready to Own Your Future?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl py-4">
            Join the CoYo community and take the first step towards your dream college and a successful career.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#FF5722] hover:bg-gray-100" size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}