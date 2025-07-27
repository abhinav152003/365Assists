import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ArrowRight, TrendingUp, Users, Clock, CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Agent",
    company: "Johnson Properties",
    location: "Austin, Texas",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "VirtueAssist has been a game-changer for my real estate business. My virtual assistant handles all my lead generation, social media, and client follow-ups. My conversion rate has increased by 40% and I can focus on what I do best - closing deals. The team is professional, reliable, and truly understands the real estate industry.",
    results: ["40% increase in conversion rate", "300% growth in social media engagement", "50+ hours saved per month"],
    service: "Real Estate Virtual Assistance",
  },
  {
    name: "Michael Chen",
    role: "E-commerce Owner",
    company: "TechGear Plus",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "I was drowning in customer support tickets and administrative tasks. VirtueAssist provided me with a dedicated team that handles customer inquiries, order processing, and inventory management. Our customer satisfaction scores have improved dramatically, and I've been able to focus on growing the business instead of managing daily operations.",
    results: ["95% customer satisfaction score", "60% reduction in response time", "200% business growth in 6 months"],
    service: "Customer Support & Admin",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Bloom Digital Agency",
    location: "Miami, Florida",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The SEO and social media management services from VirtueAssist have transformed our online presence. Our organic traffic has doubled, and our clients are seeing incredible results. The team stays up-to-date with the latest trends and algorithms, which is crucial in our fast-paced industry. I couldn't be happier with the partnership.",
    results: [
      "100% increase in organic traffic",
      "250% growth in social media followers",
      "85% improvement in search rankings",
    ],
    service: "SEO & Social Media Management",
  },
  {
    name: "David Thompson",
    role: "Financial Advisor",
    company: "Thompson Wealth Management",
    location: "Chicago, Illinois",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "Managing client communications and appointments was taking up most of my day. My VirtueAssist virtual assistant now handles my calendar, email management, and client onboarding process. This has freed up 30+ hours per week that I can dedicate to serving my clients better. The ROI has been incredible.",
    results: ["30+ hours saved weekly", "50% increase in client meetings", "Improved client satisfaction"],
    service: "Email & Calendar Management",
  },
  {
    name: "Lisa Park",
    role: "Restaurant Owner",
    company: "Park's Bistro",
    location: "Seattle, Washington",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "Running a restaurant means wearing many hats, but social media marketing was something I just couldn't keep up with. VirtueAssist took over our Instagram, Facebook, and Google My Business management. Our online orders have increased by 70%, and we're constantly getting new customers who found us through social media.",
    results: ["70% increase in online orders", "500% growth in social media engagement", "150+ new customers monthly"],
    service: "Social Media Management",
  },
  {
    name: "Robert Williams",
    role: "Consultant",
    company: "Williams Business Solutions",
    location: "Denver, Colorado",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "As a solo consultant, I needed help with lead generation and CRM management. VirtueAssist provided me with a skilled virtual assistant who has helped me build a robust sales pipeline. My monthly revenue has increased by 80% since we started working together. The service is professional, efficient, and cost-effective.",
    results: ["80% increase in monthly revenue", "300+ qualified leads generated", "Streamlined sales process"],
    service: "Lead Generation & CRM",
  },
]

const stats = [
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "99%", label: "Satisfaction Rate", icon: Star },
  { number: "50+", label: "Countries Served", icon: TrendingUp },
  { number: "24/7", label: "Support Available", icon: Clock },
]

const industries = [
  "Real Estate",
  "E-commerce",
  "Healthcare",
  "Legal Services",
  "Marketing Agencies",
  "Financial Services",
  "Restaurants",
  "Consulting",
  "Technology",
  "Education",
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  VirtueAssist
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Services
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Pricing
                </Link>
                <Link href="/testimonials" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Testimonials
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Client Success Stories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results from
              <span className="text-blue-600"> Real Clients</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how businesses across various industries have transformed their operations and achieved
              remarkable growth with our virtual assistant services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories from Every Industry</h2>
            <p className="text-xl text-gray-600">
              See how our virtual assistant services have helped businesses like yours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm transform hover:scale-105 animate-scale-in"
              >
                <CardContent className="p-8">
                  <div className="flex items-start mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.company} • {testimonial.location}
                      </p>
                    </div>
                    <Quote className="h-8 w-8 text-blue-200 flex-shrink-0" />
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                  <div className="mb-4">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {testimonial.service}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Results:</h4>
                    {testimonial.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">Our virtual assistants have experience across diverse industries</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-200"
              >
                <span className="text-gray-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hear Directly from Our Clients</h2>
            <p className="text-xl text-gray-600">Watch video testimonials from satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Adams",
                role: "CEO, Adams Marketing",
                thumbnail: "/placeholder.svg?height=200&width=300",
                duration: "2:15",
              },
              {
                name: "Mark Stevens",
                role: "Real Estate Broker",
                thumbnail: "/placeholder.svg?height=200&width=300",
                duration: "1:45",
              },
              {
                name: "Amanda Foster",
                role: "Restaurant Owner",
                thumbnail: "/placeholder.svg?height=200&width=300",
                duration: "2:30",
              },
            ].map((video, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={`${video.name} testimonial`}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-t-lg">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <div className="w-0 h-0 border-l-[20px] border-l-blue-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-black bg-opacity-70 text-white">{video.duration}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">{video.name}</h3>
                  <p className="text-sm text-gray-600">{video.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-blue-500 text-white">Featured Case Study</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How TechStart Inc. Scaled 300% in 6 Months</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Discover how our comprehensive virtual assistant services helped a tech startup streamline operations,
                  improve customer satisfaction, and achieve remarkable growth.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">300%</div>
                    <div className="text-sm text-blue-200">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-blue-200">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">60hrs</div>
                    <div className="text-sm text-blue-200">Weekly Time Saved</div>
                  </div>
                </div>
                <Button variant="secondary" size="lg">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Case Study Success"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results. Start your journey with a free consultation and discover how our
            virtual assistant services can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Start Your Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">VirtueAssist</h3>
              <p className="text-gray-300 mb-6 max-w-md">
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
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/services" className="hover:text-blue-400">
                    Real Estate VA
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-blue-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-blue-400">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400">
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
