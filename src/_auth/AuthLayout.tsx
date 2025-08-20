import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <div className="w-full flex items-center justify-center">
          <div className="w-1/2">
            <Outlet />
          </div>
          <div className="w-1/2 cover ">
            <img
              className="cover bg-no-repeat"
              src="./public/assets/background.jpeg"
              alt="img"
            />
          </div>
        </div>
      )}
    </>
  );
};
export default AuthLayout;
