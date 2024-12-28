import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme/theme-provider";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="nela-theme" defaultTheme="system">
        <Helmet titleTemplate="%s | Nela" />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
