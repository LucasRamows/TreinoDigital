import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "../components/app-sidebar-user";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "../components/ui/breadcrumb";
import { Separator } from "../components/ui/separator";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getUserData from "../services/modules/getUserData";
import type { UserType } from "../validation/types/gettingBackDataType";

const MainLayout = () => {
  // Hooks sempre no topo
  const location = useLocation();
  const [actualPage, setActualPage] = useState("Dashboard");

  const { data, isLoading, error } = useQuery<UserType>({
  queryKey: ["user"],
  queryFn: getUserData,
});
  // Atualiza o título da página
  useEffect(() => {
    const pageMap: Record<string, string> = {
      "/dashboard-user": "Dashboard",
      "/profile-user": "Perfil",
      "/settings-user": "Configurações",
      "/routine-user": "Rotina",
    };

    setActualPage(pageMap[location.pathname] ?? "Dashboard");
  }, [location.pathname]);

  // Tratamento de loading e erro
  if (isLoading) {
    return <div className="p-4">Carregando usuário...</div>;
  }

  if (error || !data) {
    return (
      <div className="p-4 text-red-500">Erro ao carregar dados do usuário</div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar user={data}/>
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage>{actualPage}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet context={data} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
