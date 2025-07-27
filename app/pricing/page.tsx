import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, ArrowRight, Clock, Users, Zap, Shield, Phone, Mail } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Starter",
    price: "$399",
    period: "/month",
    description: "Perfect for small businesses and entrepreneurs",
    hours: "20 hours/month",
    features: [
      "Dedicated virtual assistant",
      "Email and calendar management",
      "Basic administrative tasks",
      "Data entry and research",
      "Standard response time (24 hours)",
      "Monthly progress reports",
      "Email support",
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$799",
    period: "/month",
    description: "Ideal for growing businesses with diverse needs",
    hours: "40 hours/month",
    features: [
      "Everything in Starter",
      "Social media management",
      "Customer support services",
      "Lead generation assistance",
      "Priority response time (12 hours)",
      "Bi-weekly strategy calls",
      "Phone and email support",
      "CRM management",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$1,499",
    period: "/month",
    description: "Comprehensive solution for established businesses",
    hours: "80 hours/month",
    features: [
      "Everything in Professional",
      "SEO optimization services",
      "Advanced analytics and reporting",
      "Multi-platform management",
      "Immediate response time (4 hours)",
      "Weekly strategy sessions",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 priority support",
    ],
    popular: false,
    cta: "Contact Sales",
  },
]

const hourlyRates = [
  {
    service: "Administrative Tasks & Data Entry",
    rate: "$8-12",
    description: "Basic admin work, data entry, research",
  },
  {
    service: "Email & Calendar Management",
    rate: "$10-15",
    description: "Email management, scheduling, coordination",
  },
  {
    service: "Social Media Management",
    rate: "$12-18",
    description: "Content creation, posting, engagement",
  },
  {
    service: "Customer Support",
    rate: "$13-17",
    description: "Chat support, email support, ticketing",
  },
  {
    service: "Real Estate Virtual Assistance",
    rate: "$15-22",
    description: "Lead generation, property research, CRM",
  },
  {
    service: "Lead Generation & CRM",
    rate: "$16-20",
    description: "Lead research, qualification, CRM management",
  },
  {
    service: "SEO Optimization",
    rate: "$18-25",
    description: "On-page, off-page, technical SEO",
  },
]

export default function PricingPage() {
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
                <Link href="/pricing" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
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
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Transparent Pricing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="text-blue-600"> Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our flexible monthly packages or pay-as-you-go hourly rates. No hidden fees, no long-term
              contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Monthly Packages</h2>
            <p className="text-xl text-gray-600">Predictable pricing with dedicated support for consistent needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm transform hover:scale-105 ${plan.popular ? "ring-2 ring-purple-500 scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-gray-900 mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {plan.hours}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hourly Rates</h2>
            <p className="text-xl text-gray-600">Flexible pay-as-you-go pricing for specific projects and tasks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hourlyRates.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">{service.service}</h3>
                    <Badge className="bg-blue-100 text-blue-800 ml-2">{service.rate}/hr</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">All hourly rates are in USD. Minimum 10 hours per project.</p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Our Pricing Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Our Pricing Works</h2>
            <p className="text-xl text-gray-600">Transparent, fair, and designed to grow with your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "No Hidden Fees",
                description: "What you see is what you pay. No setup fees, no cancellation charges.",
              },
              {
                icon: Clock,
                title: "Flexible Terms",
                description: "Month-to-month contracts. Scale up or down based on your needs.",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Your own virtual assistant who understands your business.",
              },
              {
                icon: Zap,
                title: "Quick Start",
                description: "Get started within 24-48 hours of signing up.",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get a Custom Quote</h2>
            <p className="text-xl text-gray-600">
              Tell us about your needs and we'll create a personalized pricing plan
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your full name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your company" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="services">Services Needed *</Label>
                  <Textarea
                    id="services"
                    placeholder="Please describe the services you need (e.g., social media management, customer support, data entry, etc.)"
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="hours">Estimated Hours per Month</Label>
                  <Input id="hours" placeholder="e.g., 20-40 hours" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="timeline">When do you need to start?</Label>
                  <Input id="timeline" placeholder="e.g., Immediately, Next week, Next month" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="additional">Additional Information</Label>
                  <Textarea
                    id="additional"
                    placeholder="Any specific requirements, tools you use, or other details that would help us provide an accurate quote"
                    className="mt-2 min-h-[80px]"
                  />
                </div>

                <Button size="lg" className="w-full">
                  Get My Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Can I change my plan anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                question: "What happens if I don't use all my hours?",
                answer:
                  "Unused hours from monthly packages don't roll over to the next month. However, we can discuss custom arrangements for consistent under-usage.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "We offer a 7-day money-back guarantee for new clients. If you're not satisfied within the first week, we'll provide a full refund.",
              },
              {
                question: "How do you track hours worked?",
                answer:
                  "We use professional time-tracking tools and provide detailed reports of all work completed, including time spent on each task.",
              },
              {
                question: "Can I get a dedicated virtual assistant?",
                answer:
                  "Yes, all our monthly packages include a dedicated virtual assistant who will learn your business and preferences over time.",
              },
              {
                question: "What if I need services not listed in my plan?",
                answer:
                  "We're flexible! Additional services can be added at our standard hourly rates, or we can create a custom package for your specific needs.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your plan or get a custom quote. No setup fees, no long-term contracts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">Get Custom Quote</Link>
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
