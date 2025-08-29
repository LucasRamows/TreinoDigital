"use client";

import * as React from "react";
import {
  Clock,
  Frame,
  GalleryVerticalEnd,

  PieChartIcon,
  Settings,
} from "lucide-react";

import { NavProjects } from "../components/nav-projects";
import { NavUser } from "../components/nav-user";
import { TeamSwitcher } from "../components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "../components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m..example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  business: {
      name: "Barber",
      logo: GalleryVerticalEnd,
    },
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: Frame,
    },
    {
      name: "Rotina",
      url: "/routine",
      icon: Clock,
    },
    {
      name: "Configurações",
      url: "/settings",
      icon: Settings,
    },
  ],
  actions: [
    {
      name: "Gerenciar agendamentos",
      url: "/appointments",
      icon: PieChartIcon,
    },
    
  ],
  
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher business={data.business} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} actions={data.actions}/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
