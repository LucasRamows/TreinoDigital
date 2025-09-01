// App.tsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import MainLayout from "./_pages/MainLayout";
import DashboardUser from "./_pages/main/DashboardUser";
import SettingsUser from "./_pages/main/SettingsUser";
import ProfileUser from "./_pages/main/ProfileUser";
import Routine from "./_pages/main/Routine";
import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/main/Dashboard";
import TimeJob from "./_root/main/TimeJob";
import Settings from "./_root/main/Settings";
import Profile from "./_root/main/Profile";
import { ThemeProvider } from "./validation/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner";
import WeightChange from "./_pages/main/WeightChange";
import Appointments from "./_pages/main/Appointments";

const queryClient = new QueryClient();

const App = () => {
  const localValue = localStorage.getItem("teste");

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-right"/>
      <ThemeProvider>
          <Routes>
            {/* Rotas de autenticação */}
            <Route element={<AuthLayout />}>
              <Route path="/sign-in" element={<SigninForm />} />
              <Route path="/sign-up" element={<SignupForm />} />
            </Route>

            {/* Rotas do usuário */}
            <Route element={<MainLayout />}>
              <Route path="/dashboard-user" element={<DashboardUser />} />
              <Route path="/settings-user" element={<SettingsUser />} />
              <Route path="/profile-user" element={<ProfileUser />} />
              <Route path="/routine-user" element={<Routine />} />
              <Route path="/change-weigth" element={<WeightChange />} />
              <Route path="/appointments" element={<Appointments />} />
            </Route>

            {/* Rotas principais */}
            <Route element={<RootLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/time" element={<TimeJob />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
