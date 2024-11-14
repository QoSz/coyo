import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Globe, MapPin } from 'lucide-react'

interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

export default function ContactUs() {
    return (
        <section className="w-full py-12" id="contact">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                    Contact Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <ContactCard icon={<Mail className="h-6 w-6" />} title="Email" content="info@coyo.edu" />
                    <ContactCard icon={<Phone className="h-6 w-6" />} title="Phone" content="+1 (123) 456-7890" />
                    <ContactCard icon={<Globe className="h-6 w-6" />} title="Website" content="www.coyo.edu" />
                    <ContactCard icon={<MapPin className="h-6 w-6" />} title="Location" content="123 Education Lane, Ann Arbor, MI 48104, USA" />
                </div>

                <Card className="w-full mx-auto m-0">
                    <CardContent className="p-6">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <Input id="firstName" placeholder="John" required />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <Input id="lastName" placeholder="Doe" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <Input id="email" type="email" placeholder="johndoe@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <Input id="phone" type="tel" placeholder="+1 (123) 456-7890" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <Input id="subject" placeholder="Inquiry about CoYo program" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <Textarea id="message" placeholder="Your message here..." className="min-h-[100px]" required />
                            </div>
                            <Button type="submit" className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white">
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

function ContactCard({ icon, title, content }: ContactCardProps) {
    return (
        <Card className="flex flex-col items-center text-center h-full">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="mb-4 text-[#FF5722] flex items-center justify-center w-12 h-12 rounded-full bg-[#FBE9E7]">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{content}</p>
            </CardContent>
        </Card>
    )
}