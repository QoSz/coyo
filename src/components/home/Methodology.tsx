import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, ArrowDown, ArrowUp, Compass } from 'lucide-react'

export function Methodology() {
    return (
        <section className="w-full py-12 md:py-20" id="methodology">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 flex items-center justify-center gap-2">
                    <Compass className="h-8 w-8" />
                    The CoYo 360-degree Preparation Model
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    <Card className="w-full md:w-[40%] bg-[#4a148c] text-white">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-center">VIP Framework</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {['VALUES', 'INITIATIVE', 'PASSION'].map((item, index) => (
                                    <li key={index} className="bg-[#7e57c2] p-3 rounded-md text-center font-semibold">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Desktop version */}
                    <div className="hidden md:flex flex-col gap-4 w-[20%]">
                        <div className="flex items-center justify-center">
                            <div className="bg-white border-2 border-[#4a148c] rounded-full px-4 py-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-[#4a148c]">Dependencies</span>
                                    <ArrowRight className="h-4 w-4 text-[#4a148c]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="bg-white border-2 border-[#4a148c] rounded-full px-4 py-1">
                                <div className="flex items-center gap-2">
                                    <ArrowLeft className="h-4 w-4 text-[#4a148c]" />
                                    <span className="text-sm font-semibold text-[#4a148c]">Enablers</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile version */}
                    <div className="flex md:hidden justify-center gap-4 w-full">
                        <div className="flex items-center justify-center">
                            <div className="bg-white border-2 border-[#4a148c] rounded-full px-4 py-1">
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-sm font-semibold text-[#4a148c]">Dependencies</span>
                                    <ArrowDown className="h-4 w-4 text-[#4a148c]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="bg-white border-2 border-[#4a148c] rounded-full px-4 py-1">
                                <div className="flex flex-col items-center gap-1">
                                    <ArrowUp className="h-4 w-4 text-[#4a148c]" />
                                    <span className="text-sm font-semibold text-[#4a148c]">Enablers</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="w-full md:w-[40%] bg-[#4a148c] text-white">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-center">Top 5 Key Factors for College Admissions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li>1. Academic Excellence</li>
                                <li>2. Extracurricular Activities</li>
                                <li>3. Standardized Test Scores</li>
                                <li>4. Personal Essays</li>
                                <li>5. Letters of Recommendation</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Playbook Card remains the same */}
                <div className="mt-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">The CoYo Playbook</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <li>• Best Practices</li>
                                <li>• VIP Framework</li>
                                <li>• Top Factors for College Admissions</li>
                                <li>• Dependencies and Enablers</li>
                                <li>• 5-Step roadmap to planning success</li>
                                <li>• Timeline and Key Milestones</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}