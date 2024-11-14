import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GraduationCap, Users, Globe, Info } from 'lucide-react'

const leaders = [
    {
        name: "Ranju & Sangy Vatsa",
        role: "Founder & Principal",
        avatar: "RS",
        imageUrl: "/",
        description: "Ranju and Sangy Vatsa bring a wealth of experience in education and business leadership. As the founders of CoYo, they are dedicated to empowering students to reach their full potential and achieve their academic and career goals."
    },
    {
        name: "Ramit Walia",
        role: "Chief Growth Enabler",
        avatar: "RW",
        imageUrl: "/",
        description: "Ramit Walia is an accomplished professional with a proven track record in fostering growth and innovation. As the Chief Growth Enabler, he plays a crucial role in expanding CoYo's reach and impact in the educational sector."
    },
    {
        name: "Monisha Gossain",
        role: "Chief Advisor & Counsellor",
        avatar: "MG",
        imageUrl: "/",
        description: "Monisha Gossain brings extensive experience in academic counseling and student development. As the Chief Advisor & Counsellor, she provides invaluable guidance to students navigating their educational journey and career aspirations."
    }
]

export function About() {
    return (
        <section className="w-full py-12 md:py-20 lg:py-28" id="about">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 flex items-center justify-center gap-2">
                    <Info className="h-8 w-8" />
                    About Us
                </h2>
                <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                    We are dedicated professionals with a mission to guide and support Middle and High School students, preparing them for successful admissions to top-tier US universities and shaping outstanding career paths.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                            <GraduationCap className="h-12 w-12 text-[#FF5722]" />
                            <h3 className="text-xl font-bold">Experienced Mentorship</h3>
                            <p className="text-muted-foreground">
                                Over several decades of combined experience in student development and career guidance across diverse industries
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                            <Users className="h-12 w-12 text-[#FF5722]" />
                            <h3 className="text-xl font-bold">Proven Success</h3>
                            <p className="text-muted-foreground">
                                100% success rate for enrolled students, empowering them to build exceptional career paths
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                            <Globe className="h-12 w-12 text-[#FF5722]" />
                            <h3 className="text-xl font-bold">Global Presence</h3>
                            <p className="text-muted-foreground">
                                Based in Michigan, USA, with active operations in Dubai, UAE and Nairobi, Kenya
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
                    Leadership
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {leaders.map((leader, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardContent className="p-6 flex-grow">
                                <div className="flex items-center space-x-4 mb-4">
                                    <Avatar className="w-16 h-16">
                                        <AvatarImage src={leader.imageUrl} alt={leader.name} />
                                        <AvatarFallback>{leader.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-xl font-bold">{leader.name}</h3>
                                        <p className="text-sm text-muted-foreground">{leader.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">{leader.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}