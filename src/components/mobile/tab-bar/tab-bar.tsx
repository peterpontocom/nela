import { Home, CreditCard, Star, Store, Settings } from "lucide-react";
import { TabBarLink } from "./tab-bar-link";

const items = [
  { url: "/", icon: Home, title: "Home" },
  { url: "/nela-card", icon: CreditCard, title: "Card" },
  { url: "/favorites", icon: Star, title: "Favorites" },
  { url: "/store", icon: Store, title: "Store" },
  { url: "/settings", icon: Settings, title: "Settings" },
];

export function TabBar() {
  return (
    <footer className="fixed bottom-0 left-[50%] w-full translate-x-[-50%] md:hidden lg:hidden">
      <nav>
        <ul className="flex justify-between gap-6 bg-muted p-5 shadow-lg">
          {items.map((item, index) => (
            <TabBarLink key={index} item={item} />
          ))}
        </ul>
      </nav>
    </footer>
  );
}
