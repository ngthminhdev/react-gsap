import Home from "../Pages/Home";
import About from "../Pages/About";
import Parallax from "../Pages/Parallax";
import Solo from "../Pages/Solo";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/parallax", component: Parallax },
  { path: "/solo", component: Solo },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
