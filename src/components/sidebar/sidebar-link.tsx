import type { LucideProps } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarLinkProps {
  item: {
    title: string;
    url: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
  };
}

export function SidebarLink({ item }: SidebarLinkProps) {
  return (
    <Link to={item.url}>
      <item.icon />
      <span>{item.title}</span>
    </Link>
  );
}
