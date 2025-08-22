// App.tsx
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import MainLayout from "./_pages/MainLayout";
import RootLayout from "./_root/RootLayout";
import Dashboard from "./_root/main/Dashboard";
import { useEffect } from "react";
import Dash2 from "./_root/main/Dash2";

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SigninForm />} />
      </Route>

      <Route path="/main" element={<MainLayout />} />

      <Route element={<RootLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dash" element={<Dash2 />} />
      </Route>
    </Routes>
  );
};

export default App;
