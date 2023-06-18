import CoursDetalies from "../screens/courses/CourseDetalies";
import Courses from "../screens/courses/Courses";

const CourseRoutes = [
    { path: "/courses", element: <Courses /> },
    { path: "/courses/:id", element: <CoursDetalies /> }]


export default CourseRoutes;
