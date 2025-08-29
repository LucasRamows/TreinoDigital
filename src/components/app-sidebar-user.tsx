"use client";

import * as React from "react";
import {
  Clock,
  Frame,
  GalleryVerticalEnd,

  PieChartIcon,
  Settings,
} from "lucide-react";

import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "./ui/sidebar";

const data = {
  user: {
    name: "TreinadorWeb",
    email: "m..example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  business: {
      name: "Barber",
      logo: GalleryVerticalEnd,
    },
  sessions: [
    {
      name: "Dashboard",
      url: "/dashboard-user",
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
      name: "Exportar dados",
      url: "dashboard-user  ",
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
        <NavProjects projects={data.sessions} actions={data.actions}/>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
