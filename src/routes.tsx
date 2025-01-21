import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/app/home";
import { AppLayout } from "./pages/_layout/app";
import { AuthLayout } from "./pages/_layout/auth";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { NelaCard } from "./pages/app/nela-card";
import { Favorite } from "./pages/app/favorite";
import { Store } from "./pages/app/store";
import {
  Home as HomeIcon,
  CreditCard,
  Star,
  Store as StoreIcon,
  Settings as SettingsIcon,
} from "lucide-react";
import { Settings } from "./pages/app/settings";
import { SettingsMenu } from "./pages/app/settings/menu";
import { Accessibility } from "./pages/app/settings/accessibility";
import { Security } from "./pages/app/settings/security";
import { UserAccount } from "./pages/app/settings/user-account";
import { Profile } from "./pages/app/profile";
import { ProfileProducts } from "./pages/app/profile/products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/nela-card",
        element: <NelaCard />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/settings",
        element: <Settings />,
        children: [
          {
            path: "/settings",
            element: <SettingsMenu />,
          },
          {
            path: "/settings/accessibility",
            element: <Accessibility />,
          },
          {
            path: "/settings/security",
            element: <Security />,
          },
          {
            path: "/settings/user-account",
            element: <UserAccount />,
          },
        ],
      },
      {
        path: "/@nela",
        element: <Profile />,
        children: [
          {
            path: "/@nela",
            element: <ProfileProducts />,
          },
          {
            path: "/@nela/store-products",
            element: <ProfileProducts />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export const NavItems = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Cartão",
    url: "/nela-card",
    icon: CreditCard,
  },
  {
    title: "Favoritos",
    url: "/favorites",
    icon: Star,
  },
  {
    title: "Loja",
    url: "/store",
    icon: StoreIcon,
  },
  {
    title: "Configurações",
    url: "/settings",
    icon: SettingsIcon,
  },
];
