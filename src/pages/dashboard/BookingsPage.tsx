
import { Calendar, Filter, Download, Plus, MapPin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Car, 
  DollarSign, 
  Users, 
  Settings,
  Home,
  CreditCard,
  MoreHorizontal,
  Handshake,
  UsersRound,
  FileText,
  User
} from "lucide-react";

// Menu items for sidebar
const menuItems = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Bookings", url: "/dashboard/bookings", icon: Calendar, isActive: true },
  { title: "Transactions", url: "/dashboard/transactions", icon: CreditCard },
  { title: "Fleet", url: "/dashboard/fleet", icon: Car },
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

const BookingsPage = () => {
  const bookings = [
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "completed": return "bg-gray-100 text-gray-800";
      case "upcoming": return "bg-blue-100 text-blue-800";
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
            <div className="ml-auto flex items-center space-x-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Bookings</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                </SelectContent>
              </Select>
              
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </header>

          <div className="flex-1 space-y-4 p-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Bookings</h1>
                <p className="text-gray-600 mt-2">Manage all your rental bookings</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Booking
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Bookings</CardTitle>
                <CardDescription>View and manage your rental bookings</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Booking ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Vehicle</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Duration</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {bookings.map((booking) => (
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
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default BookingsPage;
