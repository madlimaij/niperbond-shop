import DashboardPage from "../pages/DashboardPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

type NavType = {
  name: string;
  path: string;
  component: React.FC;
};

const NavigationPath: NavType[] = [
  {
    name: "Landing",
    path: "/",
    component: LandingPage,
  },
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "Register",
    path: "/register",
    component: RegisterPage,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: DashboardPage,
  },
];

export default NavigationPath;
