import ChangePassword from "../screens/auth/ChangePassword";
import ForgetPassword from "../screens/auth/ForgetPassword";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import VerfactionCode from "../screens/auth/VerfactionCode";

export const authRoutes = [
    { path: "/auth/login", element: <Login /> },
    { path: "/auth/signup", element: <SignUp/> },
    { path: "/auth/forget--password", element: <ForgetPassword /> },
    { path: "/auth/changepassword", element: <ChangePassword /> },
    { path: '/auth/verfaction-code', elemant: <VerfactionCode /> }
]
