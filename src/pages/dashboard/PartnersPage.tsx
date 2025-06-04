
import { Handshake, UserPlus, Building, Globe } from "lucide-react";
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
  { title: "Customers", url: "/dashboard/customers", icon: Users },
  { title: "Partners", url: "/dashboard/partners", icon: Handshake, isActive: true },
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

const PartnersPage = () => {
  const partners = [
    {
      id: 1,
      name: "Nairobi Auto Rentals",
      type: "Fleet Partner",
      contact: "James Muthui",
      email: "james@nairobiautorental.com",
      vehicles: 45,
      revenue: "KES 2,340,000",
      status: "active",
      joinDate: "Jan 2024"
    },
    {
      id: 2,
      name: "Coast Car Hire",
      type: "Regional Partner",
      contact: "Fatuma Ali",
      email: "fatuma@coastcarhire.com",
      vehicles: 23,
      revenue: "KES 1,200,000",
      status: "active",
      joinDate: "Mar 2024"
    },
    {
      id: 3,
      name: "Mountain View Motors",
      type: "Service Partner",
      contact: "Peter Kamau",
      email: "peter@mountainview.com",
      vehicles: 12,
      revenue: "KES 567,000",
      status: "pending",
      joinDate: "Dec 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
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
                Add Partner
              </Button>
            </div>
          </header>

          <div className="flex-1 space-y-4 p-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Partners</h1>
              <p className="text-gray-600 mt-2">Manage your business partnerships and collaborations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Partners</p>
                      <h3 className="text-2xl font-bold text-gray-900">{partners.length}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Handshake className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Partner Vehicles</p>
                      <h3 className="text-2xl font-bold text-gray-900">{partners.reduce((sum, p) => sum + p.vehicles, 0)}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                      <Car className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Partner Revenue</p>
                      <h3 className="text-2xl font-bold text-gray-900">KES 4.1M</h3>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Partner Directory</CardTitle>
                <CardDescription>Manage your business partners and their performance</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Partner</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Type</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Contact</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Vehicles</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Revenue</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {partners.map((partner) => (
                        <tr key={partner.id} className="hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-gray-900 flex items-center">
                                <Building className="w-4 h-4 mr-2" />
                                {partner.name}
                              </div>
                              <div className="text-sm text-gray-500">Since {partner.joinDate}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-900">{partner.type}</td>
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-gray-900">{partner.contact}</div>
                              <div className="text-sm text-gray-500">{partner.email}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4 font-medium text-gray-900">{partner.vehicles}</td>
                          <td className="py-4 px-4 font-medium text-gray-900">{partner.revenue}</td>
                          <td className="py-4 px-4">
                            <Badge className={getStatusColor(partner.status)}>
                              {partner.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <Button variant="ghost" size="sm">Manage</Button>
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

export default PartnersPage;
