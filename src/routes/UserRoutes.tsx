import Notifaction from "../screens/User/Notifaction";
import Profile from "../screens/User/Profile";

export const userRoutes = [
    { path: "/user/workspesce-booking", element: <div /> },
    { path: "/user/course-booking", element: <div /> },
    { path: "/user/appointments", element: <div /> },
    { path: "/notifactions", element: <Notifaction/> },
    { path: "/user/profile/sitting", element: <div /> },
    { path: "/user/profile/edit", element: <div /> },
    { path: "/user/profile/info-data", element: <div /> },
    { path: "/user/profile", element: <Profile/> },
    { path: "/user/reservation/:id", element: <div /> },

]