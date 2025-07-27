import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Share2,
  Search,
  Calendar,
  MessageCircle,
  TrendingUp,
  FileText,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  BarChart3,
  Mail,
  Phone,
  Database,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Home,
    title: "Real Estate Virtual Assistance",
    description: "Comprehensive support tailored specifically for real estate professionals",
    features: [
      "Lead generation and qualification",
      "Property research and market analysis",
      "Client communication and follow-up",
      "Listing management and updates",
      "Transaction coordination",
      "CRM management and data entry",
      "Social media marketing for properties",
      "Appointment scheduling and calendar management",
    ],
    pricing: "Starting at $15/hour",
    popular: true,
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Professional management across all major social platforms",
    features: [
      "Content creation and curation",
      "Instagram, Facebook, LinkedIn management",
      "Social media strategy development",
      "Community engagement and response",
      "Analytics and performance reporting",
      "Hashtag research and optimization",
      "Influencer outreach coordination",
      "Social media advertising support",
    ],
    pricing: "Starting at $12/hour",
    popular: false,
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Complete SEO services to improve your search engine rankings",
    features: [
      "On-page SEO optimization",
      "Off-page link building strategies",
      "Technical SEO audits and fixes",
      "Keyword research and analysis",
      "Content optimization",
      "Local SEO for businesses",
      "SEO performance reporting",
      "Competitor analysis",
    ],
    pricing: "Starting at $18/hour",
    popular: false,
  },
  {
    icon: Calendar,
    title: "Email & Calendar Management",
    description: "Efficient management of your communications and scheduling",
    features: [
      "Email organization and response",
      "Calendar scheduling and coordination",
      "Meeting preparation and follow-up",
      "Travel planning and booking",
      "Appointment confirmation and reminders",
      "Email template creation",
      "Priority inbox management",
      "Integration with existing tools",
    ],
    pricing: "Starting at $10/hour",
    popular: false,
  },
  {
    icon: MessageCircle,
    title: "Customer Support",
    description: "Professional customer service across multiple channels",
    features: [
      "Live chat support",
      "Email customer service",
      "Ticketing system management",
      "FAQ creation and maintenance",
      "Customer feedback collection",
      "Order processing and tracking",
      "Returns and refunds handling",
      "Multi-language support available",
    ],
    pricing: "Starting at $13/hour",
    popular: false,
  },
  {
    icon: TrendingUp,
    title: "Lead Generation & CRM",
    description: "Strategic lead generation and customer relationship management",
    features: [
      "Lead research and qualification",
      "CRM setup and management",
      "Sales pipeline optimization",
      "Contact database building",
      "Email marketing campaigns",
      "Follow-up sequence automation",
      "Lead scoring and segmentation",
      "Sales reporting and analytics",
    ],
    pricing: "Starting at $16/hour",
    popular: false,
  },
  {
    icon: FileText,
    title: "Admin Tasks & Data Entry",
    description: "Reliable administrative support for your daily operations",
    features: [
      "Data entry and database management",
      "Document creation and formatting",
      "Invoice and billing management",
      "Research and information gathering",
      "File organization and management",
      "Online form submissions",
      "Inventory tracking and updates",
      "General administrative support",
    ],
    pricing: "Starting at $8/hour",
    popular: false,
  },
]

const processSteps = [
  {
    step: "1",
    title: "Consultation",
    description: "We discuss your needs and create a customized service plan",
    icon: MessageCircle,
  },
  {
    step: "2",
    title: "Team Assignment",
    description: "We match you with the perfect virtual assistant for your requirements",
    icon: Users,
  },
  {
    step: "3",
    title: "Onboarding",
    description: "Quick setup and integration with your existing tools and processes",
    icon: Zap,
  },
  {
    step: "4",
    title: "Execution",
    description: "Your dedicated VA starts working on your tasks with regular updates",
    icon: BarChart3,
  },
]

export default function ServicesPage() {
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
                <Link href="/services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Services
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  Pricing
                </Link>
                <Link href="/testimonials" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
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
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Virtual Assistant
              <span className="text-blue-600"> Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From real estate support to social media management, we provide specialized virtual assistant services
              tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm transform hover:scale-105 animate-fade-in ${service.popular ? "ring-2 ring-blue-500" : ""}`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-blue-600 text-white">Most Popular</Badge>
                )}
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg mr-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      <p className="text-blue-600 font-semibold mt-1">{service.pricing}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our Process Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting started with our virtual assistant services is simple and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: "24/7 Availability",
                    description: "Round-the-clock support across different time zones to meet your business needs.",
                  },
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Skilled professionals with industry-specific experience and proven track records.",
                  },
                  {
                    icon: Database,
                    title: "Secure & Reliable",
                    description: "Enterprise-grade security and reliable service delivery you can count on.",
                  },
                  {
                    icon: BarChart3,
                    title: "Scalable Solutions",
                    description: "Services that grow with your business, from startup to enterprise level.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Virtual Assistant Services"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose the services that best fit your needs and let our expert virtual assistants help you scale your
            business efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/pricing">View Pricing Plans</Link>
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
