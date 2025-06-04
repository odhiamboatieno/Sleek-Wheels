
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Star, Shield, Clock, Zap, Search, Filter, Car, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SearchForm from "@/components/SearchForm";

const Index = () => {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const locations = [
    {
      name: "Nairobi",
      region: "Kenya",
      image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=600&h=400&fit=crop",
      description: "Kenya's vibrant capital city"
    },
    {
      name: "Mombasa",
      region: "Kenya", 
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop",
      description: "Coastal paradise and historic port"
    },
    {
      name: "Kisumu",
      region: "Kenya",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop",
      description: "Gateway to Lake Victoria"
    },
    {
      name: "Nakuru",
      region: "Kenya",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      description: "Home to flamingos and wildlife"
    },
    {
      name: "Eldoret",
      region: "Kenya", 
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop",
      description: "Athletic capital of Kenya"
    },
    {
      name: "Thika",
      region: "Kenya",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop",
      description: "Industrial hub near Nairobi"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "Business Traveler",
      content: "DriveFlow made my business trip seamless. The booking process was incredibly fast and the vehicle was exactly as described. Professional service from start to finish.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Michael Ochieng",
      role: "Local Explorer",
      content: "Outstanding experience! The car was spotless and well-maintained. Customer support was responsive and helpful throughout my rental period.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Grace Mwangi",
      role: "Family Traveler",
      content: "Perfect for our family vacation. Easy booking, fair pricing, and excellent vehicle condition. DriveFlow has definitely earned our trust and future business.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const stats = [
    {
      number: "5000+",
      label: "Completed Bookings",
      description: "Successful rentals across Kenya"
    },
    {
      number: "350+",
      label: "Available Vehicles",
      description: "Cars & buses ready to rent"
    },
    {
      number: "4.8",
      label: "Customer Rating",
      description: "Average satisfaction score"
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Verified Safety Standards",
      description: "All rental partners undergo rigorous vetting and continuous monitoring for your peace of mind."
    },
    {
      icon: Award,
      title: "Premium Quality Assurance",
      description: "We maintain high standards with regular inspections to ensure you get reliable, well-maintained vehicles."
    },
    {
      icon: Clock,
      title: "Quick & Easy Booking",
      description: "Reserve your vehicle in under 2 minutes with our streamlined booking process."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
                  The most reliable way
                  <br />
                  <span className="font-normal">to rent or hire a car</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 font-light max-w-lg">
                  Short term rental or long term leasing made easy. Join thousands of satisfied customers across Kenya.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Verified hosts</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-blue-400" />
                  <span>24/7 support</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Instant booking</span>
                </div>
              </div>
            </div>
            
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop" 
                alt="Premium car rental service"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-blue-600 mb-2 tracking-wide uppercase">FROM KENYA TO THE WORLD</p>
                <h2 className="text-4xl font-light text-gray-900 mb-6">
                  The most reliable and seamless car rental & chauffeur services
                </h2>
              </div>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-blue-600 mb-2 tracking-wide uppercase">SIMPLY A BETTER EXPERIENCE</p>
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              Ease & peace of mind from start to finish
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Full refund when you cancel 24hrs before start time</h3>
              <p className="text-gray-600">No hidden fees or surprise charges. Transparent pricing you can trust.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Meet & greet at the airport, your hotel, the office, etc.</h3>
              <p className="text-gray-600">Convenient pickup locations across Kenya for maximum flexibility.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Take a self-drive vehicle, or add a driver for peace of mind</h3>
              <p className="text-gray-600">Choose the option that best suits your travel needs and comfort level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-blue-600 mb-4">Hire a car across Kenya.</h2>
            <p className="text-xl text-gray-600 mb-8">More countries coming soon</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Link key={index} to="/cars" className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0">
                  <div className="relative h-64">
                    <img 
                      src={location.image} 
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{location.name}</h3>
                      <p className="text-gray-200 text-sm">{location.region}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">How it works</h2>
            <p className="text-xl text-gray-600">We make it simple & easy to rent a car from start to finish</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-blue-700 transition-colors">
                1
              </div>
              <div className="flex items-center justify-center mb-4">
                <Car className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Select Car</h3>
              <p className="text-gray-600">Browse hundreds of cars and select the type of car you want for your trip</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-blue-700 transition-colors">
                2
              </div>
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Verify Identity</h3>
              <p className="text-gray-600">To keep our service safe & reliable, we ask all users to quickly verify their identity</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-blue-700 transition-colors">
                3
              </div>
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Payment</h3>
              <p className="text-gray-600">We allow you to pay with MPESA or credit card to make it easy and painless</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:bg-blue-700 transition-colors">
                4
              </div>
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Confirmation</h3>
              <p className="text-gray-600">Once rental is confirmed, sign contract & pickup vehicle, or a driver will meet & greet you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-blue-600 mb-2 tracking-wide uppercase">BY THE NUMBERS</p>
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              Creating the easiest & most reliable way to rent vehicles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-5xl font-light text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-3">
                {testimonials.map((testimonial, index) => (
                  <img
                    key={index}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-3 border-white shadow-lg"
                  />
                ))}
              </div>
            </div>
            <h2 className="text-4xl font-light text-gray-900 mb-4">5000+ Happy Bookings</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
