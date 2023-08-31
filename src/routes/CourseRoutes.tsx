import CoursDetalies from "../screens/Courses/CourseDetalies";
import Courses from "../screens/Courses";

const CourseRoutes = [
    { path: "/courses", element: <Courses /> },
    { path: "/courses/:id", element: <CoursDetalies /> }]


export default CourseRoutes;
