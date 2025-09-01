import * as React from "react";
import type { UserType } from "../validation/types/gettingBackDataType";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "./ui/sidebar";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Clock,
  Frame,
  GalleryVerticalEnd,
  PieChartIcon,
  Settings,
} from "lucide-react";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user?: UserType | undefined;
}
export function AppSidebar({ user, ...props }: AppSidebarProps) {
  
  const data = {
    user: {
      name: user?.name ?? "Usuário",
      email: user?.email ?? "m..example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    business: {
      name: "Barber",
      logo: GalleryVerticalEnd,
    },
    sessions: [
      { name: "Dashboard", url: "/dashboard-user", icon: Frame },
      { name: "Rotina", url: "/routine-user", icon: Clock },
      { name: "Configurações", url: "/settings-user", icon: Settings },
    ],
    actions: [{ name: "Exportar dados", url: "/dashboard-user", icon: PieChartIcon }],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher business={data.business} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.sessions} actions={data.actions} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
