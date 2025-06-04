import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Star, MapPin, Users, Settings, Fuel, Calendar, 
  Shield, Clock, Wifi, Car, Music, Navigation as NavIcon, 
  ArrowLeft, Heart, Share2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CarDetailPage = () => {
  const { id } = useParams();
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // Mock car data - in real app, this would be fetched based on ID
  const car = {
    id: 1,
    name: "Toyota Corolla Hybrid 2024",
    location: "Los Angeles, CA",
    price: 157,
    originalPrice: 170,
    rating: 5.0,
    trips: 22,
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549399810-ea3ca97db8b5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop"
    ],
    host: {
      name: "Sarah Johnson",
      rating: 4.9,
      trips: 127,
      responseTime: "within an hour",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      joinDate: "2022",
      isAllStar: true
    },
    features: ["Hybrid", "Automatic", "5 Seats", "GPS", "Bluetooth", "Backup Camera", "Heated Seats", "AC"],
    type: "Economy",
    year: 2024,
    transmission: "Automatic",
    fuel: "Hybrid",
    mileage: "45 MPG",
    description: "Perfect for city driving and long road trips. This nearly new Toyota Corolla Hybrid offers excellent fuel economy and a comfortable ride. The car is equipped with the latest safety features and technology to ensure a pleasant driving experience.",
    rules: [
      "No smoking",
      "No pets",
      "Return with same fuel level",
      "Maximum 200 miles per day",
      "Must be 25+ to rent"
    ],
    amenities: [
      { icon: NavIcon, name: "GPS Navigation" },
      { icon: Music, name: "Premium Audio" },
      { icon: Wifi, name: "WiFi Hotspot" },
      { icon: Car, name: "Backup Camera" },
      { icon: Shield, name: "Advanced Safety" },
      { icon: Clock, name: "Keyless Entry" }
    ],
    pickupInstructions: "Meet at the Starbucks on Sunset Blvd. I'll be there 15 minutes before pickup time.",
    cancellationPolicy: "Free cancellation up to 24 hours before pickup. 50% refund for cancellations within 24 hours.",
    insurance: "Basic insurance included. Additional coverage available at checkout."
  };

  const reviews = [
    {
      id: 1,
      user: "Mike Chen",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent car and host! Sarah was very responsive and the car was spotless. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: 2,
      user: "Emma Davis",
      rating: 5,
      date: "1 month ago",
      comment: "Perfect for our weekend getaway. Great fuel economy and very comfortable. Will definitely rent again!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: 3,
      user: "David Rodriguez",
      rating: 4,
      date: "2 months ago",
      comment: "Clean car, easy pickup process. Only minor issue was a small scratch that was already documented.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    }
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/cars" className="hover:text-blue-600 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to cars
          </Link>
          <span>/</span>
          <span>{car.name}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-light text-gray-900 mb-2">{car.name}</h1>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{car.rating}</span>
                    <span className="ml-1">({car.trips} trips)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {car.location}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-8">
              <div className="mb-4">
                <img 
                  src={car.images[selectedImage]} 
                  alt={car.name}
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${car.name} ${index + 1}`}
                      className="w-full h-20 object-cover hover:opacity-80 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Details */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Vehicle Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year</span>
                      <span className="font-medium">{car.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type</span>
                      <span className="font-medium">{car.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transmission</span>
                      <span className="font-medium">{car.transmission}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fuel Type</span>
                      <span className="font-medium">{car.fuel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mileage</span>
                      <span className="font-medium">{car.mileage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Seats</span>
                      <span className="font-medium">5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{car.description}</p>
              </CardContent>
            </Card>

            {/* Features & Amenities */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Features & Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {car.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <amenity.icon className="w-5 h-5 text-blue-600" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Host Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your Host</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={car.host.avatar} alt={car.host.name} />
                    <AvatarFallback>{car.host.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-lg">{car.host.name}</h3>
                      {car.host.isAllStar && (
                        <Badge className="bg-yellow-100 text-yellow-800">All-Star Host</Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span>{car.host.rating} rating</span>
                      </div>
                      <span>{car.host.trips} trips</span>
                      <span>Joined in {car.host.joinDate}</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Response time: {car.host.responseTime}
                    </p>
                    <Button variant="outline">Contact Host</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({reviews.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.avatar} alt={review.user} />
                          <AvatarFallback>{review.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-medium">{review.user}</h4>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-3 h-3 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {car.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ${car.originalPrice}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-gray-900">
                      ${car.price}
                    </span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <p className="text-sm text-gray-500">Before taxes & fees</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Pickup Date
                    </label>
                    <Input 
                      type="date" 
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Return Date
                    </label>
                    <Input 
                      type="date" 
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Subtotal (3 days)</span>
                    <span>${car.price * 3}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Service fee</span>
                    <span>$25</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Insurance</span>
                    <span>$15/day</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${(car.price * 3) + 25 + (15 * 3)}</span>
                    </div>
                  </div>
                </div>

                <Link to={`/booking/${car.id}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                    Book Instantly
                  </Button>
                </Link>

                <p className="text-xs text-gray-500 text-center mt-3">
                  You won't be charged yet. Free cancellation up to 24 hours before pickup.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDetailPage;
