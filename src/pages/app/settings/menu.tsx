import { CircleUser, KeyRound, Palette, type LucideProps } from "lucide-react";
import { Link } from "react-router-dom";

interface settingsItemsProps {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  url: string;
}

const settingsItems: settingsItemsProps[] = [
  {
    icon: CircleUser,
    title: "Sua conta",
    description: "Nome, Celular, email...",
    url: "/settings/user-account",
  },
  {
    icon: KeyRound,
    title: "Segurança",
    description: "Palavra-passe, pin...",
    url: "/settings/security",
  },
  {
    icon: Palette,
    title: "Acessibilidade",
    description: "Tema",
    url: "/settings/accessibility",
  },
];

export function SettingsMenu() {
  return (
    <div className="mt-16 md:mt-0 lg:mt-0">
      {settingsItems.map((item, index) => (
        <Link
          to={item.url}
          className="flex items-start justify-start gap-2 rounded-md p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900"
          key={index}
        >
          <item.icon />
          <section className="flex flex-col gap-1">
            <h1 className="font-semibold">{item.title}</h1>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </section>
        </Link>
      ))}
    </div>
  );
}
