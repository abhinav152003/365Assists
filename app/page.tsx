import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Share2,
  Search,
  Calendar,
  MessageCircle,
  TrendingUp,
  FileText,
  Star,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Shield,
  Zap,
  Target,
  Users,
  Award,
  Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Home,
    title: "Real Estate Virtual Assistance",
    description:
      "Comprehensive support for realtors including lead management, property research, and client communication.",
    gradient: "from-blue-600 to-blue-700",
    delay: "0",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Professional management of Instagram, Facebook, LinkedIn, and other social platforms to boost your online presence.",
    gradient: "from-sky-600 to-cyan-600",
    delay: "100",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Complete SEO services including on-page, off-page, and technical optimization to improve your search rankings.",
    gradient: "from-emerald-600 to-teal-600",
    delay: "200",
  },
  {
    icon: Calendar,
    title: "Email & Calendar Management",
    description: "Efficient management of your email communications and calendar scheduling to keep you organized.",
    gradient: "from-amber-600 to-orange-600",
    delay: "300",
  },
  {
    icon: MessageCircle,
    title: "Customer Support",
    description:
      "Professional customer support through chat, email, and ticketing systems to enhance client satisfaction.",
    gradient: "from-indigo-600 to-blue-600",
    delay: "400",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation & CRM",
    description:
      "Strategic lead generation and CRM management to help grow your business and maintain client relationships.",
    gradient: "from-violet-600 to-purple-600",
    delay: "500",
  },
  {
    icon: FileText,
    title: "Admin Tasks & Data Entry",
    description: "Reliable administrative support and accurate data entry services to streamline your operations.",
    gradient: "from-slate-600 to-gray-600",
    delay: "600",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Agent",
    content:
      "The virtual assistant services have transformed my business. My social media presence has grown 300% and I can focus on closing deals.",
    rating: 5,
    gradient: "from-blue-600 to-blue-700",
  },
  {
    name: "Michael Chen",
    role: "E-commerce Owner",
    content:
      "Outstanding customer support and lead generation. Our conversion rates improved significantly within the first month.",
    rating: 5,
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    content: "Professional, reliable, and results-driven. The SEO optimization work has doubled our organic traffic.",
    rating: 5,
    gradient: "from-sky-600 to-cyan-600",
  },
]

const stats = [
  { number: "500+", label: "Happy Clients", icon: Users, gradient: "from-blue-600 to-blue-700" },
  { number: "50+", label: "Countries Served", icon: Target, gradient: "from-emerald-600 to-teal-600" },
  { number: "99%", label: "Client Satisfaction", icon: Award, gradient: "from-amber-600 to-orange-600" },
  { number: "24/7", label: "Support Available", icon: Clock, gradient: "from-indigo-600 to-blue-600" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-navy-blue via-royal-blue to-sky-blue bg-clip-text text-transparent">
                  VirtueAssist
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Services
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Pricing
                </Link>
                <Link
                  href="/testimonials"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 py-20 overflow-hidden">
        {/* Professional background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-sky-200 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-10 animate-glow-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-sky-100 text-blue-800 hover:from-blue-200 hover:to-sky-200 border-0 animate-bounce-subtle">
                <Shield className="w-4 h-4 mr-2" />
                Trusted by 500+ Businesses Worldwide
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Scale Your Business with
                <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}
                  Professional
                </span>{" "}
                Virtual Assistants
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Focus on what matters most while our expert virtual assistants handle your administrative tasks, social
                media, SEO, customer support, and more. Serving clients across the U.S. and internationally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-glow-pulse"
                >
                  <Link href="/contact">
                    <Zap className="mr-2 h-5 w-5" />
                    Start Your Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 animate-float">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full animate-bounce-subtle"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-bounce-subtle"
                  style={{ animationDelay: "1s" }}
                ></div>
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Professional+Virtual+Assistant"
                  alt="Professional Virtual Assistant"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-emerald-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${stat.gradient} p-4 rounded-full w-fit mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-sky-200 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Virtual Assistant
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent"> Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From real estate support to social media management, we provide the expertise you need to grow your
              business efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-sky-50 rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="flex items-center mb-4 relative z-10">
                    <div
                      className={`bg-gradient-to-r ${service.gradient} p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  {" "}
                  VirtueAssist?
                </span>
              </h2>
              <div className="space-y-4">
                {[
                  "Experienced professionals with proven track records",
                  "24/7 availability across different time zones",
                  "Customized solutions for your specific business needs",
                  "Cost-effective alternative to hiring full-time staff",
                  "Seamless integration with your existing tools and processes",
                  "Regular reporting and transparent communication",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start group animate-slide-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl opacity-10 blur-lg animate-glow-pulse"></div>
              <Image
                src="/placeholder.svg?height=400&width=500&text=Virtual+Assistant+Team"
                alt="Virtual Assistant Team"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-sky-200 rounded-full opacity-10 animate-float"></div>
          <div
            className="absolute bottom-10 left-20 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${testimonial.gradient} rounded-full -mr-12 -mt-12 opacity-10`}
                  ></div>
                  <div className="flex mb-4 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-amber-400 fill-current animate-bounce-subtle"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic relative z-10">"{testimonial.content}"</p>
                  <div className="relative z-10">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-blue via-royal-blue to-sky-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-16 h-16 bg-white/20 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/20 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have scaled efficiently with our virtual assistant services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-blue-700 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  <Shield className="mr-2 h-5 w-5" />
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white/50 hover:bg-white/10 hover:border-white bg-transparent backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-blue/20 via-transparent to-royal-blue/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 animate-slide-in-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent mb-4">
                VirtueAssist
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Professional virtual assistant services helping businesses scale efficiently across the U.S. and
                internationally.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>hello@virtueassist.com</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right" style={{ animationDelay: "200ms" }}>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-200">
                    Real Estate VA
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-200">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-200">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-400 transition-colors duration-200">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="animate-slide-in-right" style={{ animationDelay: "400ms" }}>
              <h4 className="text-lg font-semibold mb-4 text-sky-400">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-sky-400 transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-sky-400 transition-colors duration-200">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-sky-400 transition-colors duration-200">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-sky-400 transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <p>&copy; 2024 VirtueAssist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
