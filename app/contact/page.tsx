import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our team",
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri, 9AM-6PM EST",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    contact: "hello@virtueassist.com",
    availability: "Response within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available on website",
    availability: "Mon-Fri, 9AM-6PM EST",
  },
  {
    icon: Globe,
    title: "WhatsApp",
    description: "Message us on WhatsApp",
    contact: "+1 (555) 123-4567",
    availability: "24/7 for urgent matters",
  },
]

const offices = [
  {
    city: "New York",
    address: "123 Business Ave, Suite 100",
    zipcode: "New York, NY 10001",
    phone: "+1 (555) 123-4567",
  },
  {
    city: "Los Angeles",
    address: "456 Innovation Blvd, Floor 5",
    zipcode: "Los Angeles, CA 90210",
    phone: "+1 (555) 987-6543",
  },
  {
    city: "London",
    address: "789 Global Street, Office 200",
    zipcode: "London, UK EC1A 1BB",
    phone: "+44 20 1234 5678",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="text-2xl font-extrabold text-blue-700 hover:text-blue-900 transition-colors duration-300"
                >
                  VirtueAssist
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Services
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Pricing
                </Link>
                <Link
                  href="/testimonials"
                  className="text-gray-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-700 font-semibold px-3 py-2 rounded-md text-sm transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-colors duration-300"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-purple-200 text-purple-800 hover:bg-purple-300 transition-colors duration-300">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
              Let's Start Your
              <span className="text-blue-700"> Success Story</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to scale your business with professional virtual assistant services? Get in touch for a free
              consultation and custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600">Choose the method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-fit mx-auto mb-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  <p className="text-blue-700 font-medium mb-3">{method.contact}</p>
                  <p className="text-gray-500 text-xs">{method.availability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Send Us a Message</h2>
              <p className="text-gray-600 mb-10">
                Fill out the form below and we'll get back to you within 24 hours with a personalized proposal for your
                virtual assistant needs.
              </p>

              <Card className="shadow-2xl rounded-2xl">
                <CardContent className="p-10">
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" className="mt-2 rounded-md" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" className="mt-2 rounded-md" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" className="mt-2 rounded-md" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" className="mt-2 rounded-md" />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Your Company" className="mt-2 rounded-md" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="services">Services Interested In *</Label>
                      <select className="w-full mt-2 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select a service</option>
                        <option value="real-estate">Real Estate Virtual Assistance</option>
                        <option value="social-media">Social Media Management</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="email-calendar">Email & Calendar Management</option>
                        <option value="customer-support">Customer Support</option>
                        <option value="lead-generation">Lead Generation & CRM</option>
                        <option value="admin-tasks">Admin Tasks & Data Entry</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="budget">Monthly Budget Range</Label>
                      <select className="w-full mt-2 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select budget range</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2000">$1,000 - $2,000</option>
                        <option value="2000-5000">$2,000 - $5,000</option>
                        <option value="over-5000">Over $5,000</option>
                        <option value="hourly">Prefer hourly rates</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="timeline">When do you need to start?</Label>
                      <select className="w-full mt-2 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select timeline</option>
                        <option value="immediately">Immediately</option>
                        <option value="within-week">Within a week</option>
                        <option value="within-month">Within a month</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="just-exploring">Just exploring options</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Tell us about your needs *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your business, current challenges, and how you envision a virtual assistant helping you..."
                        className="mt-2 min-h-[140px] rounded-md"
                      />
                    </div>

                    <div className="flex items-start">
                      <input type="checkbox" id="newsletter" className="mt-1 mr-3" />
                      <Label htmlFor="newsletter" className="text-sm text-gray-600">
                        I'd like to receive updates about VirtueAssist services and industry insights
                      </Label>
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-colors duration-300"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <Card className="shadow-2xl rounded-2xl animate-slide-in-right">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg font-semibold">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">We Review Your Request</p>
                        <p className="text-sm text-gray-600">Our team analyzes your needs within 2 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Free Consultation Call</p>
                        <p className="text-sm text-gray-600">30-minute strategy session to understand your goals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Custom Proposal</p>
                        <p className="text-sm text-gray-600">Tailored service plan with transparent pricing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                        4
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Quick Onboarding</p>
                        <p className="text-sm text-gray-600">Start working with your VA within 24-48 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl rounded-2xl animate-slide-in-right delay-100">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg font-semibold">
                    <Clock className="h-6 w-6 text-blue-600 mr-2" />
                    Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email Response:</span>
                      <span className="font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone Calls:</span>
                      <span className="font-medium">Same day callback</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Live Chat:</span>
                      <span className="font-medium">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Urgent Matters:</span>
                      <span className="font-medium">Within 2 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl rounded-2xl bg-blue-50 border-blue-200 animate-slide-in-right delay-200">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Free Consultation Available</h3>
                  <p className="text-blue-800 mb-5">
                    Not sure which services you need? Book a free 30-minute consultation to discuss your business goals
                    and get personalized recommendations.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-colors duration-300">
                    Schedule Free Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Our Global Presence</h2>
            <p className="text-xl text-gray-600">Serving clients worldwide with local support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{office.city}</h3>
                  <p className="text-gray-600 mb-2">{office.address}</p>
                  <p className="text-gray-600 mb-4">{office.zipcode}</p>
                  <div className="flex items-center justify-center text-blue-700">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="font-medium">{office.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Common Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to help you get started</p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How quickly can I get started?",
                answer:
                  "After our initial consultation and agreement on services, you can typically start working with your dedicated virtual assistant within 24-48 hours.",
              },
              {
                question: "Do you offer a free trial?",
                answer:
                  "Yes, we offer a 7-day money-back guarantee for new clients. If you're not completely satisfied within the first week, we'll provide a full refund.",
              },
              {
                question: "What time zones do you work in?",
                answer:
                  "We have virtual assistants available across multiple time zones to match your business hours, including EST, PST, GMT, and others upon request.",
              },
              {
                question: "Can I scale my services up or down?",
                answer:
                  "Our services are designed to be flexible. You can adjust your package or hours based on your changing business needs.",
              },
              {
                question: "What tools and software do you use?",
                answer:
                  "We're experienced with most popular business tools including CRM systems, project management software, social media platforms, and can quickly adapt to your preferred tools.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-blue-700 shadow-md rounded-md">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">VirtueAssist</h3>
              <p className="text-gray-300 mb-8 max-w-md">
                Professional virtual assistant services helping businesses scale efficiently across the U.S. and
                internationally.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-center text-gray-300 mt-2">
                <Mail className="h-5 w-5 mr-2" />
                <span>hello@virtueassist.com</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                    Real Estate VA
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-blue-400 transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-blue-400 transition-colors duration-300">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-blue-400 transition-colors duration-300">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VirtueAssist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
