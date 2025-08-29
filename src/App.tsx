// App.tsx
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import MainLayout from "./_pages/MainLayout";
import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/main/Dashboard";
import TimeJob from "./_root/main/TimeJob";
import Settings from "./_root/main/Settings";
import Profile from "./_root/main/Profile";
import { ThemeProvider } from "./validation/ThemeContext";
import Appointments from "./_root/main/Appointments";
import SignupForm from "./_auth/forms/SignupForm";
import SettingsUser from "./_pages/main/SettingsUser";
import DashboardUser from "./_pages/main/DashboardUser";
import ProfileUser from "./_pages/main/ProfileUser";

const App = () => {
  const localValue = localStorage.getItem("teste");
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {localValue ? (
          <Route element={<MainLayout />}>
            <Route path="/dashboard-user" element={<DashboardUser />} />
            <Route path="/settings-user" element={<SettingsUser />} />
            <Route path="/profile-user" element={<ProfileUser />} />
          </Route>
        ) : (
          <Route path="/dashboard" element={<Dashboard />} />
        )}

        <Route element={<RootLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/time" element={<TimeJob />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/appointments" element={<Appointments />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
