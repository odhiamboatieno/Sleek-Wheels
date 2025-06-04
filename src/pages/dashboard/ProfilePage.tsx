
import { User, Mail, Phone, MapPin, Edit, Camera } from "lucide-react";
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
  Car, 
  Calendar,
  CreditCard,
  Users, 
  Settings,
  Home,
  MoreHorizontal,
  Handshake,
  UsersRound,
  FileText
} from "lucide-react";

// Menu items for sidebar
const menuItems = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Bookings", url: "/dashboard/bookings", icon: Calendar },
  { title: "Transactions", url: "/dashboard/transactions", icon: CreditCard },
  { title: "Fleet", url: "/dashboard/fleet", icon: Car },
  { title: "Customers", url: "/dashboard/customers", icon: Users },
  { title: "Partners", url: "/dashboard/partners", icon: Handshake },
  { title: "Team Mgmt.", url: "/dashboard/team", icon: UsersRound },
  { title: "Host Policies", url: "/dashboard/policies", icon: FileText },
  { title: "Profile", url: "/dashboard/profile", icon: User, isActive: true },
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

const ProfilePage = () => {
  const profile = {
    name: "Samuel Kiprotich",
    email: "samuel.kiprotich@email.com",
    phone: "+254 700 123 456",
    location: "Nairobi, Kenya",
    joinDate: "January 2024",
    verificationStatus: "verified",
    hostLevel: "Super Host",
    totalEarnings: "KES 1,524,300",
    totalTrips: 89,
    rating: 4.92,
    responseRate: "98%"
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
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </header>

          <div className="flex-1 space-y-4 p-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
              <p className="text-gray-600 mt-2">Manage your profile information and host status</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Card */}
              <Card className="lg:col-span-1">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                        SK
                      </div>
                      <Button size="sm" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
                    <div className="flex justify-center mt-2">
                      <Badge className="bg-purple-100 text-purple-800">
                        {profile.hostLevel}
                      </Badge>
                    </div>
                    <div className="flex justify-center mt-2">
                      <Badge className="bg-green-100 text-green-800">
                        {profile.verificationStatus}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-600">{profile.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-600">{profile.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-600">{profile.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Statistics Cards */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-green-600">{profile.totalEarnings}</h3>
                        <p className="text-sm text-gray-600">Total Earnings</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-blue-600">{profile.totalTrips}</h3>
                        <p className="text-sm text-gray-600">Total Trips</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-yellow-600">{profile.rating}</h3>
                        <p className="text-sm text-gray-600">Average Rating</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-purple-600">{profile.responseRate}</h3>
                        <p className="text-sm text-gray-600">Response Rate</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Profile Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Your host profile details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <p className="mt-1 text-gray-900">{profile.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <p className="mt-1 text-gray-900">{profile.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                        <p className="mt-1 text-gray-900">{profile.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Location</label>
                        <p className="mt-1 text-gray-900">{profile.location}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Host Since</label>
                        <p className="mt-1 text-gray-900">{profile.joinDate}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Host Level</label>
                        <p className="mt-1 text-gray-900">{profile.hostLevel}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Verification Status */}
                <Card>
                  <CardHeader>
                    <CardTitle>Verification Status</CardTitle>
                    <CardDescription>Complete your profile verification</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Email Verification</span>
                        <Badge className="bg-green-100 text-green-800">Verified</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Phone Verification</span>
                        <Badge className="bg-green-100 text-green-800">Verified</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">ID Verification</span>
                        <Badge className="bg-green-100 text-green-800">Verified</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Driver's License</span>
                        <Badge className="bg-green-100 text-green-800">Verified</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ProfilePage;
