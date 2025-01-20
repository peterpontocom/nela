import { ChevronLeft } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

export function Settings() {
  const location = useLocation();
  function isMenuPage() {
    return [
      "/settings/accessibility",
      "/settings/security",
      "/settings/user-account",
    ].includes(location.pathname);
  }
  return (
    <div className="flex flex-col gap-4">
      {isMenuPage() ? (
        <Link to={"/settings"} className="mt-16 inline-block md:mt-0 lg:mt-0">
          <ChevronLeft />
        </Link>
      ) : (
        ""
      )}

      <Outlet />
    </div>
  );
}
