import type { LucideProps } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface TabBarLinkProps {
  item: {
    title: string;
    url: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  };
}

export function TabBarLink({ item }: TabBarLinkProps) {
  const location = useLocation();
  function isCurrentUrl(url: string): boolean {
    return location.pathname === url;
  }
  return (
    <li>
      <Link
        to={item.url}
        className={
          isCurrentUrl(item.url)
            ? "font-bold text-primary hover:text-primary"
            : ""
        }
      >
        <item.icon className={isCurrentUrl(item.url) ? "fill-current" : ""} />
        <span className="sr-only">{item.title}</span>
      </Link>
    </li>
  );
}
