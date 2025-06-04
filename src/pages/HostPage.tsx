
import { useState } from "react";
import { Car, DollarSign, Shield, TrendingUp, Users, Calendar, MapPin, Star, CheckCircle, Upload, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const HostPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm({
    defaultValues: {
      // Vehicle Details
      make: "",
      model: "",
      year: "",
      plate: "",
      color: "",
      category: "",
      transmission: "",
      fuelType: "",
      seats: "",
      
      // Pricing
      dailyRate: "",
      weeklyDiscount: "",
      monthlyDiscount: "",
      
      // Location
      address: "",
      city: "",
      state: "",
      zipCode: "",
      
      // Host Info
      hostName: "",
      hostEmail: "",
      hostPhone: "",
      description: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log("Host application submitted:", data);
    setIsSubmitted(true);
    toast.success("Application submitted successfully! We'll review and contact you within 24 hours.");
    form.reset();
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Extra Income",
      description: "Make up to $1,000+ per month sharing your car when you're not using it"
    },
    {
      icon: Shield,
      title: "Full Insurance Coverage",
      description: "Comprehensive insurance protection for your vehicle and peace of mind"
    },
    {
      icon: Users,
      title: "Verified Renters",
      description: "All renters are background-checked and have clean driving records"
    },
    {
      icon: TrendingUp,
      title: "Flexible Earnings",
      description: "Set your own prices and availability to maximize your income"
    }
  ];

  const requirements = [
    "Vehicle must be 2010 or newer",
    "Clean title and registration",
    "Up-to-date insurance and maintenance",
    "Pass vehicle inspection",
    "Valid driver's license",
    "Background check approval"
  ];

  const hostStats = [
    { label: "Average Monthly Earnings", value: "$847" },
    { label: "Average Rating", value: "4.8/5" },
    { label: "Booking Rate", value: "73%" },
    { label: "Response Time", value: "< 1 hour" }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Los Angeles, CA",
      earnings: "$1,240/month",
      rating: 4.95,
      quote: "DriveFlow has been amazing! I earn enough to cover my car payment and then some.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      location: "San Francisco, CA",
      earnings: "$892/month",
      rating: 4.88,
      quote: "The platform is so easy to use, and the insurance coverage gives me complete peace of mind.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Jennifer Chen",
      location: "Seattle, WA",
      earnings: "$1,156/month",
      rating: 4.92,
      quote: "I love meeting travelers and helping them explore my city while earning extra income.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const vehicleCategories = [
    { value: "economy", label: "Economy" },
    { value: "compact", label: "Compact" },
    { value: "midsize", label: "Midsize" },
    { value: "fullsize", label: "Full-size" },
    { value: "luxury", label: "Luxury" },
    { value: "suv", label: "SUV" },
    { value: "truck", label: "Truck" },
    { value: "van", label: "Van" },
    { value: "convertible", label: "Convertible" },
    { value: "electric", label: "Electric" }
  ];

  const steps = [
    { number: 1, title: "Vehicle Details", description: "Tell us about your car" },
    { number: 2, title: "Pricing & Location", description: "Set your rates and pickup location" },
    { number: 3, title: "Host Information", description: "Complete your profile" },
    { number: 4, title: "Photos & Final Steps", description: "Upload photos and submit" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-light leading-tight mb-6">
                Turn your car into
                <span className="block font-normal">a money-making machine</span>
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Join thousands of hosts earning extra income by sharing their vehicles with DriveFlow's trusted community.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {hostStats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-green-200">{stat.value}</div>
                    <div className="text-green-100 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button size="lg" variant="secondary" className="text-green-700">
                Start Earning Today
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop"
                alt="Host earning with car"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="apply">Apply Now</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12">
            {/* Benefits */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Host with DriveFlow?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Join a community of successful hosts and start earning passive income from your vehicle.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 pb-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <benefit.icon className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: 1,
                    title: "List Your Car",
                    description: "Share details about your vehicle, set your price, and upload photos"
                  },
                  {
                    step: 2,
                    title: "Get Bookings",
                    description: "Approved renters book your car through our secure platform"
                  },
                  {
                    step: 3,
                    title: "Earn Money",
                    description: "Get paid directly to your account after each completed trip"
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">What Our Hosts Say</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">{testimonial.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{testimonial.rating}</span>
                        <Badge variant="outline" className="ml-2 text-green-600">
                          {testimonial.earnings}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Requirements Tab */}
          <TabsContent value="requirements" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Vehicle Requirements</h2>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-2">Getting Started Checklist</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Vehicle registration and title</li>
                    <li>• Current insurance policy</li>
                    <li>• Vehicle inspection report</li>
                    <li>• High-quality photos of your car</li>
                    <li>• Driver's license verification</li>
                  </ul>
                </div>
              </div>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Qualification Process</CardTitle>
                  <CardDescription>
                    Our simple 3-step process to get you approved and earning
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      step: "Application Review",
                      time: "1-2 days",
                      description: "We review your vehicle and host information"
                    },
                    {
                      step: "Vehicle Inspection",
                      time: "30 minutes",
                      description: "Quick safety and quality check at your location"
                    },
                    {
                      step: "Approval & Launch",
                      time: "Same day",
                      description: "Your listing goes live and you start earning"
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{step.step}</h3>
                        <p className="text-sm text-gray-600 mb-1">{step.description}</p>
                        <Badge variant="outline" className="text-xs">{step.time}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">Earning Potential</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your earnings depend on your vehicle type, location, and availability. Here's what hosts typically earn.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  category: "Economy Cars",
                  dailyRate: "$35-55",
                  monthlyEarnings: "$400-700",
                  examples: "Toyota Corolla, Honda Civic"
                },
                {
                  category: "Luxury Vehicles",
                  dailyRate: "$85-150",
                  monthlyEarnings: "$900-1,800",
                  examples: "BMW 5 Series, Mercedes C-Class"
                },
                {
                  category: "SUVs & Trucks",
                  dailyRate: "$65-120",
                  monthlyEarnings: "$700-1,400",
                  examples: "Jeep Wrangler, Ford F-150"
                }
              ].map((tier, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{tier.category}</h3>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-green-600">{tier.dailyRate}</div>
                      <div className="text-sm text-gray-600">per day</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-lg font-semibold text-gray-900">{tier.monthlyEarnings}</div>
                      <div className="text-sm text-gray-600">monthly potential</div>
                    </div>
                    <p className="text-sm text-gray-600">{tier.examples}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Maximize Your Earnings</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        Keep your calendar updated and available
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        Maintain a high rating with great service
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        Upload high-quality photos of your vehicle
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        Offer competitive pricing for your area
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">Host Earnings</div>
                    <div className="text-sm text-gray-600">You keep 85% of every booking</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Apply Tab */}
          <TabsContent value="apply" className="space-y-8">
            {isSubmitted ? (
              <Card className="max-w-2xl mx-auto text-center">
                <CardContent className="p-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Application Submitted!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for applying to become a DriveFlow host. We'll review your application and contact you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Submit Another Application
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="max-w-4xl mx-auto">
                {/* Progress Steps */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                          currentStep >= step.number 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {step.number}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">{step.title}</div>
                          <div className="text-xs text-gray-500">{step.description}</div>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="w-16 h-px bg-gray-300 mx-6"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Host Application</CardTitle>
                    <CardDescription>
                      Complete the form below to start your journey as a DriveFlow host
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {/* Step 1: Vehicle Details */}
                        {currentStep === 1 && (
                          <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-900">Vehicle Information</h3>
                            
                            <div className="grid md:grid-cols-3 gap-6">
                              <FormField
                                control={form.control}
                                name="make"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Make *</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Toyota" {...field} required />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="model"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Model *</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Corolla" {...field} required />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="year"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Year *</FormLabel>
                                    <FormControl>
                                      <Input placeholder="2024" {...field} required />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="plate"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>License Plate *</FormLabel>
                                    <FormControl>
                                      <Input placeholder="ABC123" {...field} required />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="color"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Color *</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Silver" {...field} required />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                              <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Category *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {vehicleCategories.map((category) => (
                                          <SelectItem key={category.value} value={category.value}>
                                            {category.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="transmission"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Transmission *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select transmission" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="automatic">Automatic</SelectItem>
                                        <SelectItem value="manual">Manual</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="seats"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Seats *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Number of seats" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="2">2 seats</SelectItem>
                                        <SelectItem value="4">4 seats</SelectItem>
                                        <SelectItem value="5">5 seats</SelectItem>
                                        <SelectItem value="7">7 seats</SelectItem>
                                        <SelectItem value="8">8+ seats</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between pt-6">
                          {currentStep > 1 && (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setCurrentStep(currentStep - 1)}
                            >
                              Previous
                            </Button>
                          )}
                          
                          {currentStep < 4 ? (
                            <Button
                              type="button"
                              onClick={() => setCurrentStep(currentStep + 1)}
                              className="ml-auto"
                            >
                              Next Step
                            </Button>
                          ) : (
                            <Button type="submit" className="ml-auto">
                              Submit Application
                            </Button>
                          )}
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default HostPage;
