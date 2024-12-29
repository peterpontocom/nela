import { Header } from "@/components/mobile/header";
import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <div className="w-full">
      <Helmet title="Home" />
      <Header />
      <h1>Home</h1>
    </div>
  );
}
