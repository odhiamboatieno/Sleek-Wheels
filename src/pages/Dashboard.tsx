import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Car, 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Star,
  MapPin,
  Clock,
  Settings,
  Plus,
  Filter,
  Download,
  Bell,
  Activity,
  BarChart3,
  Home,
  CreditCard,
  MoreHorizontal,
  UserCheck,
  Handshake,
  UsersRound,
  FileText,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

// Menu items for sidebar
const menuItems = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: Home,
    isActive: true,
  },
  {
    title: "Bookings",
    url: "/dashboard/bookings",
    icon: Calendar,
  },
  {
    title: "Transactions",
    url: "/dashboard/transactions",
    icon: CreditCard,
  },
  {
    title: "Fleet",
    url: "/dashboard/fleet",
    icon: Car,
  },
  {
    title: "Customers",
    url: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Partners",
    url: "/dashboard/partners",
    icon: Handshake,
  },
  {
    title: "Team Mgmt.",
    url: "/dashboard/team",
    icon: UsersRound,
  },
  {
    title: "Host Policies",
    url: "/dashboard/policies",
    icon: FileText,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "More",
    url: "/dashboard/more",
    icon: MoreHorizontal,
  },
];

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.isActive}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const Dashboard = () => {
  const [dateRange, setDateRange] = useState("30days");

  const stats = [
    {
      title: "Total Earnings",
      value: "KES 1,524,300",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Active Bookings",
      value: "23",
      change: "+3",
      trend: "up",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Fleet Utilization",
      value: "87%",
      change: "+5.2%",
      trend: "up",
      icon: Car,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Customer Rating",
      value: "4.92",
      change: "+0.1",
      trend: "up",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    }
  ];

  const recentBookings = [
    {
      id: "B-7567",
      customer: "John Mwangi",
      vehicle: "Toyota Corolla 2024",
      plate: "KDK953W",
      startDate: "Dec 15, 2024",
      endDate: "Dec 18, 2024",
      status: "active",
      amount: "KES 47,100",
      location: "Nairobi"
    },
    {
      id: "B-7518",
      customer: "Sarah Wanjiku",
      vehicle: "BMW 5 Series",
      plate: "KDJ084Z",
      startDate: "Dec 12, 2024",
      endDate: "Dec 16, 2024",
      status: "completed",
      amount: "KES 89,600",
      location: "Westlands"
    },
    {
      id: "B-7471",
      customer: "Mike Kiprotich",
      vehicle: "Tesla Model 3",
      plate: "KDC467P",
      startDate: "Dec 20, 2024",
      endDate: "Dec 25, 2024",
      status: "upcoming",
      amount: "KES 94,500",
      location: "Karen"
    },
    {
      id: "B-7388",
      customer: "Emma Akinyi",
      vehicle: "Jeep Wrangler",
      plate: "KCJ615R",
      startDate: "Dec 10, 2024",
      endDate: "Dec 14, 2024",
      status: "completed",
      amount: "KES 106,800",
      location: "Kilimani"
    }
  ];

  const fleetVehicles = [
    {
      id: 1,
      name: "Toyota Corolla 2024",
      plate: "KDK953W",
      status: "rented",
      rate: "KES 4,000/day",
      utilization: 85,
      rating: 5.0,
      location: "Nairobi",
      nextAvailable: "Dec 18, 2024"
    },
    {
      id: 2,
      name: "BMW 5 Series 2021",
      plate: "KDJ084Z",
      status: "available",
      rate: "KES 17,000/day",
      utilization: 92,
      rating: 4.95,
      location: "Westlands",
      nextAvailable: "Available Now"
    },
    {
      id: 3,
      name: "Tesla Model 3 2023",
      plate: "KDC467P",
      status: "rented",
      rate: "KES 8,000/day",
      utilization: 78,
      rating: 4.98,
      location: "Karen",
      nextAvailable: "Dec 25, 2024"
    },
    {
      id: 4,
      name: "Jeep Wrangler 2022",
      plate: "KCJ615R",
      status: "maintenance",
      rate: "KES 7,000/day",
      utilization: 65,
      rating: 4.88,
      location: "Kilimani",
      nextAvailable: "Dec 22, 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "rented":
        return "bg-green-100 text-green-800";
      case "available":
        return "bg-blue-100 text-blue-800";
      case "maintenance":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="ml-auto flex items-center space-x-4">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="year">This year</SelectItem>
                </SelectContent>
              </Select>
              
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </header>

          <div className="flex-1 space-y-4 p-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-gray-600 mt-2">Welcome back! Here's your business overview.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                          <Badge variant="outline" className={stat.color}>
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {stat.change}
                          </Badge>
                        </div>
                      </div>
                      <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Bookings */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Your latest rental transactions</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Link to="/host">
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      New Booking
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Booking ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Vehicle</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Dates</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{booking.id}</td>
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-gray-900">{booking.customer}</div>
                              <div className="text-sm text-gray-500 flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {booking.location}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-gray-900">{booking.vehicle}</div>
                              <div className="text-sm text-gray-500">{booking.plate}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="text-sm">
                              <div>{booking.startDate}</div>
                              <div className="text-gray-500">to {booking.endDate}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 font-medium text-gray-900">{booking.amount}</td>
                          <td className="py-4 px-4">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Fleet Overview */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>My Fleet ({fleetVehicles.length} vehicles)</CardTitle>
                  <CardDescription>Overview of your vehicle fleet</CardDescription>
                </div>
                <Link to="/host">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Vehicle
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {fleetVehicles.map((vehicle) => (
                    <Card key={vehicle.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900">{vehicle.name}</h3>
                            <p className="text-sm text-gray-600">{vehicle.plate}</p>
                          </div>
                          <Badge className={getStatusColor(vehicle.status)}>
                            {vehicle.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">Daily Rate</p>
                            <p className="font-medium">{vehicle.rate}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Rating</p>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              <span className="font-medium">{vehicle.rating}</span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Utilization</span>
                            <span className="font-medium">{vehicle.utilization}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${vehicle.utilization}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Next Available</p>
                            <p className="text-sm font-medium">{vehicle.nextAvailable}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Settings className="w-4 h-4" />
                            </Button>
                            <Button size="sm">Manage</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
