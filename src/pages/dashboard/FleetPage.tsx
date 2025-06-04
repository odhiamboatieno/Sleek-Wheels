
import { Car, Plus, Settings, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { Link } from "react-router-dom";
import { 
  Calendar,
  CreditCard,
  Users, 
  Home,
  MoreHorizontal,
  Handshake,
  UsersRound,
  FileText,
  User
} from "lucide-react";

// Menu items for sidebar
const menuItems = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Bookings", url: "/dashboard/bookings", icon: Calendar },
  { title: "Transactions", url: "/dashboard/transactions", icon: CreditCard },
  { title: "Fleet", url: "/dashboard/fleet", icon: Car, isActive: true },
  { title: "Customers", url: "/dashboard/customers", icon: Users },
  { title: "Partners", url: "/dashboard/partners", icon: Handshake },
  { title: "Team Mgmt.", url: "/dashboard/team", icon: UsersRound },
  { title: "Host Policies", url: "/dashboard/policies", icon: FileText },
  { title: "Profile", url: "/dashboard/profile", icon: User },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
  { title: "More", url: "/dashboard/more", icon: MoreHorizontal },
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

const FleetPage = () => {
  const vehicles = [
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
      case "rented": return "bg-green-100 text-green-800";
      case "available": return "bg-blue-100 text-blue-800";
      case "maintenance": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="ml-auto">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Vehicle
              </Button>
            </div>
          </header>

          <div className="flex-1 space-y-4 p-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Fleet Management</h1>
              <p className="text-gray-600 mt-2">Manage your vehicle fleet and track performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{vehicles.length}</h3>
                    <p className="text-sm text-gray-600">Total Vehicles</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-green-600">{vehicles.filter(v => v.status === 'available').length}</h3>
                    <p className="text-sm text-gray-600">Available</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-blue-600">{vehicles.filter(v => v.status === 'rented').length}</h3>
                    <p className="text-sm text-gray-600">Rented</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-orange-600">{vehicles.filter(v => v.status === 'maintenance').length}</h3>
                    <p className="text-sm text-gray-600">Maintenance</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Vehicle Fleet ({vehicles.length} vehicles)</CardTitle>
                <CardDescription>Overview of your vehicle fleet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {vehicles.map((vehicle) => (
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

export default FleetPage;
