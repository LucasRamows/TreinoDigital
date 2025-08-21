import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <div className="flex">
          <div className="flex flex-1 justify-center items-center flex-col py-10 h-screen md:h-auto">
            <Outlet />
          </div>
          <img
            className="hidden md:block h-screen w-1/2 object-cover bg-no-repeat"
            src="./public/assets/background.jpeg"
            alt="img"
          />
        </div>
      )}
    </>
  );
};
export default AuthLayout;
