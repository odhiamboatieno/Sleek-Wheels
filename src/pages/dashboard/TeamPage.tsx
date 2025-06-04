
import { UsersRound, UserPlus, Shield, Mail } from "lucide-react";
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
  { title: "Team Mgmt.", url: "/dashboard/team", icon: UsersRound, isActive: true },
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

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Catherine Njoki",
      email: "catherine@driveflow.com",
      role: "Fleet Manager",
      department: "Operations",
      status: "active",
      joinDate: "Jan 2024",
      permissions: ["fleet_management", "bookings"]
    },
    {
      id: 2,
      name: "Joseph Karanja",
      email: "joseph@driveflow.com",
      role: "Customer Support",
      department: "Support",
      status: "active",
      joinDate: "Feb 2024",
      permissions: ["customer_support"]
    },
    {
      id: 3,
      name: "Grace Wanjiru",
      email: "grace@driveflow.com",
      role: "Finance Manager",
      department: "Finance",
      status: "active",
      joinDate: "Mar 2024",
      permissions: ["finance", "reports"]
    },
    {
      id: 4,
      name: "Daniel Kiprop",
      email: "daniel@driveflow.com",
      role: "Operations Lead",
      department: "Operations",
      status: "inactive",
      joinDate: "Oct 2023",
      permissions: ["full_access"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "inactive": return "bg-gray-100 text-gray-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Fleet Manager": return "bg-blue-100 text-blue-800";
      case "Customer Support": return "bg-green-100 text-green-800";
      case "Finance Manager": return "bg-purple-100 text-purple-800";
      case "Operations Lead": return "bg-orange-100 text-orange-800";
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
                Invite Team Member
              </Button>
            </div>
          </header>

          <div className="flex-1 space-y-4 p-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
              <p className="text-gray-600 mt-2">Manage your team members and their permissions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{teamMembers.length}</h3>
                    <p className="text-sm text-gray-600">Total Team Members</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-green-600">{teamMembers.filter(m => m.status === 'active').length}</h3>
                    <p className="text-sm text-gray-600">Active</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-blue-600">3</h3>
                    <p className="text-sm text-gray-600">Departments</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-600">{teamMembers.filter(m => m.status === 'inactive').length}</h3>
                    <p className="text-sm text-gray-600">Inactive</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage your team and their access permissions</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Member</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Role</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Department</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Join Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {teamMembers.map((member) => (
                        <tr key={member.id} className="hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div>
                              <div className="font-medium text-gray-900">{member.name}</div>
                              <div className="text-sm text-gray-500 flex items-center">
                                <Mail className="w-3 h-3 mr-1" />
                                {member.email}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge className={getRoleColor(member.role)}>
                              {member.role}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 text-gray-900">{member.department}</td>
                          <td className="py-4 px-4">
                            <Badge className={getStatusColor(member.status)}>
                              {member.status}
                            </Badge>
                          </td>
                          <td className="py-4 px-4 text-gray-900">{member.joinDate}</td>
                          <td className="py-4 px-4">
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="sm">
                                <Shield className="w-4 h-4 mr-1" />
                                Permissions
                              </Button>
                              <Button variant="ghost" size="sm">Edit</Button>
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

export default TeamPage;
