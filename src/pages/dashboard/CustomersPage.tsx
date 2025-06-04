
import { Users, UserPlus, Mail, Phone } from "lucide-react";
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
  Settings,
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
  { title: "Fleet", url: "/dashboard/fleet", icon: Car },
  { title: "Customers", url: "/dashboard/customers", icon: Users, isActive: true },
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

const CustomersPage = () => {
  const customers = [
    {
      id: 1,
      name: "John Mwangi",
      email: "john.mwangi@email.com",
      phone: "+254 700 123 456",
      totalBookings: 12,
      totalSpent: "KES 234,500",
      status: "active",
      joinDate: "Jan 15, 2024",
      lastBooking: "Dec 15, 2024"
    },
    {
      id: 2,
      name: "Sarah Wanjiku",
      email: "sarah.wanjiku@email.com",
      phone: "+254 701 234 567",
      totalBookings: 8,
      totalSpent: "KES 145,200",
      status: "active",
      joinDate: "Mar 22, 2024",
      lastBooking: "Dec 12, 2024"
    },
    {
      id: 3,
      name: "Mike Kiprotich",
      email: "mike.kiprotich@email.com",
      phone: "+254 702 345 678",
      totalBookings: 15,
      totalSpent: "KES 387,900",
      status: "vip",
      joinDate: "Oct 08, 2023",
      lastBooking: "Dec 20, 2024"
    },
    {
      id: 4,
      name: "Emma Akinyi",
      email: "emma.akinyi@email.com",
      phone: "+254 703 456 789",
      totalBookings: 5,
      totalSpent: "KES 89,300",
      status: "inactive",
      joinDate: "Jun 30, 2024",
      lastBooking: "Nov 14, 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "vip": return "bg-purple-100 text-purple-800";
      case "inactive": return "bg-gray-100 text-gray-800";
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
                <UserPlus className="w-4 h-4 mr-2" />
                Add Customer
              </Button>
            </div>
          </header>

          <div className="flex-1 space-y-4 p-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
              <p className="text-gray-600 mt-2">Manage your customer relationships and track their activity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{customers.length}</h3>
                    <p className="text-sm text-gray-600">Total Customers</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-green-600">{customers.filter(c => c.status === 'active').length}</h3>
                    <p className="text-sm text-gray-600">Active</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-purple-600">{customers.filter(c => c.status === 'vip').length}</h3>
                    <p className="text-sm text-gray-600">VIP</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-600">{customers.filter(c => c.status === 'inactive').length}</h3>
                    <p className="text-sm text-gray-600">Inactive</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Customer List</CardTitle>
                <CardDescription>View and manage your customers</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Customer</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Contact</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Bookings</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Total Spent</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Last Booking</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {customers.map((customer) => (
                        <tr key={customer.id} className="hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-gray-900">{customer.name}</div>
                              <div className="text-sm text-gray-500">Joined {customer.joinDate}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div>
                              <div className="text-sm flex items-center">
                                <Mail className="w-3 h-3 mr-1" />
                                {customer.email}
                              </div>
                              <div className="text-sm flex items-center text-gray-500">
                                <Phone className="w-3 h-3 mr-1" />
                                {customer.phone}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-medium text-gray-900">{customer.totalBookings}</td>
                          <td className="py-4 px-4 font-medium text-gray-900">{customer.totalSpent}</td>
                          <td className="py-4 px-4">
                            <Badge className={getStatusColor(customer.status)}>
                              {customer.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 text-gray-900">{customer.lastBooking}</td>
                          <td className="py-4 px-4">
                            <Button variant="ghost" size="sm">View Profile</Button>
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

export default CustomersPage;
