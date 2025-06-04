
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Search, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnTime, setReturnTime] = useState("10:00");
  const [driverAge, setDriverAge] = useState("");

  const popularLocations = [
    "Jomo Kenyatta International Airport (JKIA)",
    "Wilson Airport",
    "Nairobi CBD",
    "Westlands, Nairobi",
    "Karen, Nairobi",
    "Mombasa Moi International Airport",
    "Kisumu Airport",
    "Nakuru Town"
  ];

  return (
    <Card className="bg-white rounded-2xl p-8 shadow-2xl">
      <div className="flex mb-6 bg-gray-100 rounded-xl p-1">
        <button className="flex-1 py-3 px-4 bg-white rounded-lg shadow-sm text-gray-900 font-medium transition-all hover:shadow-md">
          <Car className="w-4 h-4 inline mr-2" />
          Drive Yourself
        </button>
        <button className="flex-1 py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-white/50 rounded-lg transition-all">
          <Users className="w-4 h-4 inline mr-2" />
          With Driver
        </button>
      </div>
      
      <div className="space-y-6">
        {/* Location Selection */}
        <div className="relative">
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Pickup Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Enter city, airport, or address in Kenya" 
              className="pl-12 h-14 text-gray-900 border-gray-200 focus:border-blue-500 rounded-xl"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          
          {/* Popular Locations Dropdown */}
          {location === "" && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
              <div className="p-3 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Popular Locations in Kenya</span>
              </div>
              {popularLocations.map((loc, index) => (
                <button
                  key={index}
                  onClick={() => setLocation(loc)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-700 border-b border-gray-50 last:border-0"
                >
                  <MapPin className="w-4 h-4 inline mr-3 text-gray-400" />
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Date and Time Selection */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              From
            </label>
            <div className="space-y-2">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  type="date" 
                  className="pl-12 h-12 border-gray-200 focus:border-blue-500 rounded-xl"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Select value={pickupTime} onValueChange={setPickupTime}>
                  <SelectTrigger className="pl-12 h-12 border-gray-200 focus:border-blue-500 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, '0');
                      return (
                        <SelectItem key={i} value={`${hour}:00`}>
                          {`${hour}:00`}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Until
            </label>
            <div className="space-y-2">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input 
                  type="date" 
                  className="pl-12 h-12 border-gray-200 focus:border-blue-500 rounded-xl"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={pickupDate || new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Select value={returnTime} onValueChange={setReturnTime}>
                  <SelectTrigger className="pl-12 h-12 border-gray-200 focus:border-blue-500 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = i.toString().padStart(2, '0');
                      return (
                        <SelectItem key={i} value={`${hour}:00`}>
                          {`${hour}:00`}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Age */}
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-2">
            Driver Age
          </label>
          <Select value={driverAge} onValueChange={setDriverAge}>
            <SelectTrigger className="h-12 border-gray-200 focus:border-blue-500 rounded-xl">
              <SelectValue placeholder="Select your age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="18-24">18-24 years old</SelectItem>
              <SelectItem value="25-29">25-29 years old</SelectItem>
              <SelectItem value="30-64">30-64 years old</SelectItem>
              <SelectItem value="65+">65+ years old</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Link to="/cars">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 h-14 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
            <Search className="w-5 h-5 mr-2" />
            Search Available Cars
          </Button>
        </Link>

        <div className="text-center text-sm text-gray-500">
          Free cancellation up to 24 hours before pickup
        </div>
      </div>
    </Card>
  );
};

export default SearchForm;
