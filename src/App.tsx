import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import { useEffect } from "react";
import MainLayout from "./_pages/MainLayout";
import MainPage from "./_pages/start/DatePage";

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
        </Route>

        <Route path="/main" element={<MainLayout />}/>
      </Routes>
    </main>
  );
};

export default App;
