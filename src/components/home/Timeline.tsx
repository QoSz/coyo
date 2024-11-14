import { History } from 'lucide-react'

export function Timeline() {
    return (
        <section className="w-full py-12 md:py-20 bg-gray-100" id="timeline">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 flex items-center justify-center gap-2">
                    <History className="h-8 w-8" />
                    Our Journey
                </h2>
                <div className="max-w-3xl mx-auto">
                    <ol className="relative border-l border-[#FF5722]">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-[#FF5722] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2012-2015</time>
                            <h3 className="text-lg font-semibold text-gray-900">Piloted the initial offering</h3>
                            <p className="mb-4 text-base font-normal text-gray-500">Started with our own children</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-[#FF5722] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2016</time>
                            <h3 className="text-lg font-semibold text-gray-900">Formally launched the CoYo Model</h3>
                            <p className="mb-4 text-base font-normal text-gray-500">Achieved initial successes</p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-[#FF5722] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2018</time>
                            <h3 className="text-lg font-semibold text-gray-900">The CoYo Playbook launched</h3>
                            <p className="mb-4 text-base font-normal text-gray-500">For students and parents</p>
                        </li>
                        <li className="ml-4">
                            <div className="absolute w-3 h-3 bg-[#FF5722] rounded-full mt-1.5 -left-1.5 border border-white animate-pulse shadow-[0_0_0_3px_rgba(255,87,34,0.3)]"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">2024</time>
                            <h3 className="text-lg font-semibold text-gray-900">Ready to scale globally</h3>
                            <p className="text-base font-normal text-gray-500">Expanding across global locations</p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}