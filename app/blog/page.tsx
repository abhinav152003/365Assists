import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search, TrendingUp, Clock, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "10 Ways Virtual Assistants Can Transform Your Real Estate Business",
    excerpt:
      "Discover how real estate professionals are leveraging virtual assistants to generate more leads, manage clients better, and close more deals.",
    author: "Sarah Mitchell",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Real Estate",
    image: "/placeholder.svg?height=200&width=400",
    featured: true,
  },
  {
    id: 2,
    title: "The Complete Guide to Social Media Management for Small Businesses",
    excerpt:
      "Learn the essential strategies and tools for effective social media management that drives engagement and grows your business.",
    author: "Mike Johnson",
    date: "January 12, 2024",
    readTime: "12 min read",
    category: "Social Media",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "SEO Trends 2024: What Every Business Owner Should Know",
    excerpt:
      "Stay ahead of the competition with the latest SEO trends and strategies that will dominate search rankings in 2024.",
    author: "Emily Chen",
    date: "January 10, 2024",
    readTime: "10 min read",
    category: "SEO",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "How to Scale Your E-commerce Business with Virtual Assistants",
    excerpt:
      "From customer support to inventory management, learn how virtual assistants can help your e-commerce business grow efficiently.",
    author: "David Rodriguez",
    date: "January 8, 2024",
    readTime: "9 min read",
    category: "E-commerce",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Email Marketing Automation: Best Practices for 2024",
    excerpt:
      "Maximize your email marketing ROI with proven automation strategies and techniques that convert subscribers into customers.",
    author: "Lisa Park",
    date: "January 5, 2024",
    readTime: "7 min read",
    category: "Marketing",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "The ROI of Hiring Virtual Assistants: A Complete Analysis",
    excerpt:
      "Discover the true return on investment when hiring virtual assistants and how to calculate the value they bring to your business.",
    author: "Robert Kim",
    date: "January 3, 2024",
    readTime: "11 min read",
    category: "Business",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 7,
    title: "Customer Support Excellence: Building Lasting Relationships",
    excerpt:
      "Learn how exceptional customer support can transform your business and create loyal customers who become brand advocates.",
    author: "Amanda Foster",
    date: "December 28, 2023",
    readTime: "6 min read",
    category: "Customer Service",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 8,
    title: "Lead Generation Strategies That Actually Work in 2024",
    excerpt:
      "Explore proven lead generation techniques and tools that successful businesses use to build their sales pipeline.",
    author: "Mark Stevens",
    date: "December 25, 2023",
    readTime: "13 min read",
    category: "Sales",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const categories = [
  "All Posts",
  "Real Estate",
  "Social Media",
  "SEO",
  "E-commerce",
  "Marketing",
  "Business",
  "Customer Service",
  "Sales",
]

const popularPosts = [
  {
    title: "10 Ways Virtual Assistants Can Transform Your Real Estate Business",
    date: "January 15, 2024",
    readTime: "8 min read",
  },
  {
    title: "The Complete Guide to Social Media Management for Small Businesses",
    date: "January 12, 2024",
    readTime: "12 min read",
  },
  {
    title: "SEO Trends 2024: What Every Business Owner Should Know",
    date: "January 10, 2024",
    readTime: "10 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-2xl font-extrabold text-blue-600">
                  VirtueAssist
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link
                  href="/"
                  className="text-gray-500 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-500 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-gray-500 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Services
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-500 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Pricing
                </Link>
                <Link
                  href="/testimonials"
                  className="text-gray-500 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Testimonials
                </Link>
                <Link href="/blog" className="text-blue-700 bg-blue-50 px-3 py-2 rounded-md text-sm font-medium">
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors duration-300"
              >
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
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Business Insights & Tips</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              VirtueAssist
              <span className="text-blue-600"> Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, industry trends, and practical tips to help you grow your business with virtual assistant
              services and digital strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={`transition-colors duration-200 ${
                    index === 0 ? "bg-blue-600 hover:bg-blue-700 text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <p className="text-gray-600">Our most popular and impactful content</p>
          </div>

          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-white to-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 text-blue-600 border-blue-600">
                  {blogPosts[0].category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{blogPosts[0].author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors duration-300"
                >
                  <Link href={`/blog/${blogPosts[0].id}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="space-y-8">
                {blogPosts.slice(1).map((post, index) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-100"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover rounded-l-lg"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <Badge variant="outline" className="mb-3 text-blue-600 border-blue-600">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <User className="h-4 w-4 mr-2" />
                          <span className="mr-4">{post.author}</span>
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="mr-4">{post.date}</span>
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="text-gray-700 hover:bg-gray-100 transition-colors duration-200 bg-transparent"
                        >
                          <Link href={`/blog/${post.id}`}>
                            Read More
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-700 hover:bg-gray-100 transition-colors duration-200 bg-transparent"
                  >
                    Previous
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors duration-300"
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-700 hover:bg-gray-100 transition-colors duration-200 bg-transparent"
                  >
                    2
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-700 hover:bg-gray-100 transition-colors duration-200 bg-transparent"
                  >
                    3
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-700 hover:bg-gray-100 transition-colors duration-200 bg-transparent"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Stay Updated</h3>
                  <p className="text-blue-800 mb-4 text-sm">
                    Get the latest insights and tips delivered to your inbox weekly.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Your email address" className="bg-white" />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-colors duration-300">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Posts */}
              <Card className="bg-gradient-to-br from-white to-gray-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                    Popular Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span className="mr-3">{post.date}</span>
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="bg-gradient-to-br from-white to-gray-100">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.slice(1).map((category, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">
                          {category}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {Math.floor(Math.random() * 10) + 1}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Ready to Get Started?</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Transform your business with our professional virtual assistant services.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-md shadow-sm transition-colors duration-300"
                    asChild
                  >
                    <Link href="/contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
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
