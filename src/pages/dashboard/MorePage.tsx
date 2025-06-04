
import { MoreHorizontal, HelpCircle, MessageSquare, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  { title: "Customers", url: "/dashboard/customers", icon: Users },
  { title: "Partners", url: "/dashboard/partners", icon: Handshake },
  { title: "Team Mgmt.", url: "/dashboard/team", icon: UsersRound },
  { title: "Host Policies", url: "/dashboard/policies", icon: FileText },
  { title: "Profile", url: "/dashboard/profile", icon: User },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
  { title: "More", url: "/dashboard/more", icon: MoreHorizontal, isActive: true },
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

const MorePage = () => {
  const quickActions = [
    {
      title: "Help Center",
      description: "Get answers to frequently asked questions",
      icon: HelpCircle,
      action: "Browse Help"
    },
    {
      title: "Contact Support",
      description: "Get in touch with our support team",
      icon: MessageSquare,
      action: "Contact Us"
    },
    {
      title: "Download Reports",
      description: "Export your business data and analytics",
      icon: Download,
      action: "Download"
    },
    {
      title: "API Documentation",
      description: "Integrate with our platform APIs",
      icon: ExternalLink,
      action: "View Docs"
    }
  ];

  const resources = [
    {
      title: "Host Guidelines",
      description: "Best practices for successful hosting",
      url: "#"
    },
    {
      title: "Safety Center",
      description: "Learn about safety features and protocols",
      url: "#"
    },
    {
      title: "Community Forum",
      description: "Connect with other hosts and share experiences",
      url: "#"
    },
    {
      title: "Tax Information",
      description: "Important tax information for hosts",
      url: "#"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
          </header>

          <div className="flex-1 space-y-4 p-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">More</h1>
              <p className="text-gray-600 mt-2">Additional tools and resources for your business</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickActions.map((action, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <action.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                        <Button variant="outline" size="sm" className="mt-3">
                          {action.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Resources & Support</CardTitle>
                <CardDescription>Helpful resources to grow your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                      <div>
                        <h3 className="font-medium text-gray-900">{resource.title}</h3>
                        <p className="text-sm text-gray-600">{resource.description}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* App Information */}
            <Card>
              <CardHeader>
                <CardTitle>App Information</CardTitle>
                <CardDescription>Version and system details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700">App Version</label>
                    <p className="mt-1 text-gray-900">DriveFlow v2.1.0</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Last Updated</label>
                    <p className="mt-1 text-gray-900">December 2024</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">System Status</label>
                    <p className="mt-1 text-green-600">All systems operational</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Support</label>
                    <p className="mt-1 text-gray-900">24/7 Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default MorePage;
