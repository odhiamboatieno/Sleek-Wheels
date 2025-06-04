
import { FileText, Plus, Edit } from "lucide-react";
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
  User
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
  { title: "Host Policies", url: "/dashboard/policies", icon: FileText, isActive: true },
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

const PoliciesPage = () => {
  const policies = [
    {
      id: 1,
      title: "Rental Terms & Conditions",
      description: "Standard rental agreement terms and conditions for all bookings",
      category: "Legal",
      status: "active",
      lastUpdated: "Dec 1, 2024",
      version: "2.1"
    },
    {
      id: 2,
      title: "Cancellation Policy",
      description: "Guidelines for booking cancellations and refund procedures",
      category: "Booking",
      status: "active",
      lastUpdated: "Nov 15, 2024",
      version: "1.3"
    },
    {
      id: 3,
      title: "Vehicle Damage Assessment",
      description: "Procedures for assessing and handling vehicle damage claims",
      category: "Operations",
      status: "draft",
      lastUpdated: "Dec 10, 2024",
      version: "1.0"
    },
    {
      id: 4,
      title: "Customer Support Guidelines",
      description: "Standard procedures for customer service interactions",
      category: "Support",
      status: "active",
      lastUpdated: "Oct 30, 2024",
      version: "1.5"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "draft": return "bg-yellow-100 text-yellow-800";
      case "inactive": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Legal": return "bg-red-100 text-red-800";
      case "Booking": return "bg-blue-100 text-blue-800";
      case "Operations": return "bg-green-100 text-green-800";
      case "Support": return "bg-purple-100 text-purple-800";
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
                Create Policy
              </Button>
            </div>
          </header>

          <div className="flex-1 space-y-4 p-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Host Policies</h1>
              <p className="text-gray-600 mt-2">Manage your business policies and terms</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{policies.length}</h3>
                    <p className="text-sm text-gray-600">Total Policies</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-green-600">{policies.filter(p => p.status === 'active').length}</h3>
                    <p className="text-sm text-gray-600">Active</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-yellow-600">{policies.filter(p => p.status === 'draft').length}</h3>
                    <p className="text-sm text-gray-600">Draft</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-blue-600">4</h3>
                    <p className="text-sm text-gray-600">Categories</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Policy Management</CardTitle>
                <CardDescription>Create and manage your business policies</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Policy</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Version</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Last Updated</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {policies.map((policy) => (
                        <tr key={policy.id} className="hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-gray-900">{policy.title}</div>
                              <div className="text-sm text-gray-500">{policy.description}</div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={getCategoryColor(policy.category)}>
                              {policy.category}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={getStatusColor(policy.status)}>
                              {policy.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 text-gray-900">v{policy.version}</td>
                          <td className="py-4 px-4 text-gray-900">{policy.lastUpdated}</td>
                          <td className="py-4 px-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                              <Button variant="ghost" size="sm">View</Button>
                            </div>
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

export default PoliciesPage;
