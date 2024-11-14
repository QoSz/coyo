import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { School, Award, BookOpen, Trophy } from 'lucide-react'

const successStories = [
    {
        name: "Sarah Johnson",
        achievements: [
            "Accepted to Stanford University",
            "National Merit Scholar",
            "GPA: 4.0",
            "SAT: 1580",
            "AP Scholar with Distinction",
        ],
        extracurriculars: [
            "President of Debate Club",
            "Volunteer at local animal shelter",
            "Varsity Soccer Team Captain",
        ],
        quote: "CoYo helped me discover my passion for environmental science and guided me towards research opportunities that set my application apart."
    },
    {
        name: "Michael Chen",
        achievements: [
            "Accepted to MIT",
            "Intel Science Talent Search Finalist",
            "GPA: 4.2 (weighted)",
            "ACT: 36",
            "11 AP classes (all 5's)",
        ],
        extracurriculars: [
            "Robotics Team Lead",
            "Math Olympiad State Champion",
            "Developed a mobile app for local food bank",
        ],
        quote: "The VIP framework from CoYo encouraged me to align my tech skills with community service, creating projects that made a real impact."
    },
    {
        name: "Aisha Patel",
        achievements: [
            "Accepted to Yale University",
            "Coca-Cola Scholar",
            "GPA: 3.98",
            "SAT: 1540",
            "Published author in teen literary magazine",
        ],
        extracurriculars: [
            "Founder of school's cultural awareness club",
            "Lead actress in school plays",
            "Intern at local newspaper",
        ],
        quote: "CoYo's guidance helped me weave my passion for writing and cultural advocacy into a compelling personal narrative for my applications."
    }
]

export function SuccessStories() {
    return (
        <section className="w-full py-12 md:py-24 bg-gray-100" id="success-stories">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 flex items-center justify-center gap-2">
                    <Trophy className="h-8 w-8" />
                    Success Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {successStories.map((story, index) => (
                        <Card key={index} className="flex flex-col h-full">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <School className="h-6 w-6 text-[#FF5722]" />
                                    {story.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="mb-4">
                                    <h4 className="font-semibold flex items-center gap-2 mb-2">
                                        <Award className="h-5 w-5 text-[#FF5722]" /> Achievements
                                    </h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {story.achievements.map((achievement, i) => (
                                            <li key={i} className="text-sm">{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-semibold flex items-center gap-2 mb-2">
                                        <BookOpen className="h-5 w-5 text-[#FF5722]" /> Extracurriculars
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {story.extracurriculars.map((activity, i) => (
                                            <Badge key={i} variant="secondary">{activity}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <blockquote className="border-l-4 border-[#FF5722] pl-4 italic text-sm">
                                    &ldquo;{story.quote}&rdquo;
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}