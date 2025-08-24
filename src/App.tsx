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

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SigninForm />} />
      </Route>

      <Route path="/" element={<MainLayout />} />

      <Route element={<RootLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/time" element={<TimeJob />} />
        <Route path="/settings" element={< Settings/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointments" element={<Appointments />} />
      </Route>
    </Routes>
    </ThemeProvider>

  );
};

export default App;
