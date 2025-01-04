import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchFilterProps {
  onSearch: (query: string) => void;
}

export function SearchFilter({ onSearch }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center gap-3"
    >
      <Input
        type="search"
        placeholder="Pesquisar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button type="submit" variant={"outline"} size={"sm"}>
        <Search />
        <span className="hidden md:inline-block lg:inline-block">
          Pesquisar
        </span>
        <span className="sr-only">Pesquisar</span>
      </Button>
    </form>
  );
}
