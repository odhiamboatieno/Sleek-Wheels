
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Users, Fuel, Settings, Filter, Heart, ChevronDown, Map as MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navigation from "@/components/Navigation";

const CarsPage = () => {
  const [sortBy, setSortBy] = useState("relevance");

  // Dummy data for filters
  const priceRanges = [
    "KES 1,000 - 3,000",
    "KES 3,000 - 5,000", 
    "KES 5,000 - 8,000",
    "KES 8,000 - 12,000",
    "KES 12,000+"
  ];

  const vehicleTypes = [
    "Sedan",
    "SUV", 
    "Hatchback",
    "Pickup",
    "Van",
    "Convertible"
  ];

  const makesModels = [
    "Toyota Corolla",
    "BMW 3 Series",
    "Tesla Model 3", 
    "Nissan X-Trail",
    "Subaru Forester",
    "Mercedes C-Class",
    "Volkswagen Golf"
  ];

  const years = [
    "2024",
    "2023",
    "2022", 
    "2021",
    "2020",
    "2019",
    "2018"
  ];

  const seatOptions = [
    "2 seats",
    "4 seats",
    "5 seats",
    "7 seats", 
    "8+ seats"
  ];

  const deliveryOptions = [
    "Airport pickup",
    "Hotel delivery",
    "Westlands area",
    "CBD delivery",
    "Kilimani area"
  ];

  const cars = [
    {
      id: 1,
      name: "BMW 2 Series 2017",
      location: "Nairobi",
      price: 220,
      originalPrice: 230,
      rating: 5.0,
      reviewCount: 20,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      host: "Wanjiku Kamau",
      isAllStarHost: true,
      savings: 10,
      description: "Premium luxury sedan perfect for business trips in Nairobi."
    },
    {
      id: 2,
      name: "Volvo XC40 2019",
      location: "Nairobi",
      price: 224,
      originalPrice: 238,
      rating: 5.0,
      reviewCount: 141,
      image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop",
      host: "John Mwangi",
      isAllStarHost: true,
      savings: 9,
      description: "Safe and reliable SUV for family adventures."
    },
    {
      id: 3,
      name: "Tesla Model 3 2019",
      location: "Nairobi",
      price: 244,
      rating: 4.95,
      reviewCount: 24,
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
      host: "Grace Akinyi",
      isAllStarHost: false,
      savings: 0,
      description: "Experience the future of driving with Tesla's advanced technology."
    },
    {
      id: 4,
      name: "BMW 2 Series 2019",
      location: "Nairobi",
      price: 280,
      originalPrice: 295,
      rating: 4.9,
      reviewCount: 122,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      host: "Peter Kiprotich",
      isAllStarHost: true,
      savings: 15,
      description: "Latest BMW with premium features and sport performance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Filters Section */}
      <div className="border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-gray-300">
                  <Filter className="w-4 h-4 mr-2" />
                  Daily price
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {priceRanges.map((range) => (
                  <DropdownMenuItem key={range}>{range}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-gray-300">
                  Vehicle type
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {vehicleTypes.map((type) => (
                  <DropdownMenuItem key={type}>{type}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-gray-300">
                  Make & model
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {makesModels.map((make) => (
                  <DropdownMenuItem key={make}>{make}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-gray-300">
                  Years
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {years.map((year) => (
                  <DropdownMenuItem key={year}>{year}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-gray-300">
                  Seats
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {seatOptions.map((seats) => (
                  <DropdownMenuItem key={seats}>{seats}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="sm" className="border-gray-300">
              Electric
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-gray-300">
                  Deliver to me
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {deliveryOptions.map((option) => (
                  <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">
              All filters
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                200+ cars available
              </h1>
              <p className="text-sm text-gray-600">Sorted by relevance</p>
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Sorted by relevance</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          {/* Cars List - Left Side */}
          <div className="w-1/2 px-6 py-6">
            <div className="space-y-6">
              {cars.map((car) => (
                <Card key={car.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-white rounded-lg">
                  <Link to={`/cars/${car.id}`}>
                    <div className="relative">
                      <img 
                        src={car.image} 
                        alt={car.name}
                        className="w-full h-48 object-cover"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white shadow-sm rounded-full"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                      {car.savings > 0 && (
                        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-md font-medium">
                          Save £{car.savings}
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg text-gray-900">{car.name}</h3>
                        <div className="text-right">
                          <div className="flex items-center justify-end space-x-1">
                            {car.originalPrice && car.originalPrice !== car.price && (
                              <span className="text-sm text-gray-400 line-through">
                                £{car.originalPrice}
                              </span>
                            )}
                            <span className="text-lg font-bold text-gray-900">
                              £{car.price}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">total</div>
                          <div className="text-xs text-gray-500">Before taxes</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium ml-1">{car.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({car.reviewCount} trips)</span>
                        </div>
                        {car.isAllStarHost && (
                          <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700 border-blue-200">
                            All-Star Host
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {car.location}
                      </div>
                      
                      <div className="text-sm text-gray-600 border-t pt-2">
                        Free cancellation available for all trips.
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          {/* Map - Right Side */}
          <div className="w-1/2 sticky top-32 h-[calc(100vh-8rem)]">
            <div className="w-full h-full bg-gray-100 flex items-center justify-center border-l border-gray-200">
              <div className="text-center">
                <MapIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-sm text-gray-500 mt-2">Showing {cars.length} cars in Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
