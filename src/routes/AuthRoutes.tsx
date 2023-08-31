import ResetPassword from "../screens/Auth/ResetPassword";
import SignUp from "../screens/Auth/SignUp";
import Login from "../screens/Auth/login";
import VerifiedEmail from "../screens/Auth/verifiedEmail";

export const authRoutes = [
    { path: "/auth/login", element: <Login /> },
    { path: "/auth/signup", element: <SignUp/> },
    { path: '/auth/verifiedemail', element: <VerifiedEmail /> },
    { path: '/auth/resetpassword', element: <ResetPassword /> }

    
    
]
