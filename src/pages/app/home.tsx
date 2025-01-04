import { Header } from "@/components/mobile/header";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { CardProduct } from "@/components/card-product";
import { SearchFilter } from "@/components/search-filter";
import { Button } from "@/components/ui/button";
import { simulatedApiResponse } from "@/components/simulated-api-response";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function Home() {
  const [products, setProducts] = useState<typeof simulatedApiResponse>([]);
  const [filteredProducts, setFilteredProducts] = useState<
    typeof simulatedApiResponse
  >([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    setProducts(simulatedApiResponse);
    setFilteredProducts(simulatedApiResponse);

    // Extraindo categorias únicas
    const uniqueCategories = Array.from(
      new Set(
        simulatedApiResponse.flatMap((product) => product.product.category),
      ),
    );
    setCategories(uniqueCategories);
  }, []);

  function handleSearch(query: string) {
    const lowercasedQuery = query.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.product.name.toLowerCase().includes(lowercasedQuery) &&
        (activeCategory === null ||
          product.product.category.includes(activeCategory)),
    );
    setFilteredProducts(filtered);
  }

  function handleCategoryFilter(category: string | null) {
    setActiveCategory(category);
    const filtered = products.filter(
      (product) =>
        (category === null || product.product.category.includes(category)) &&
        product.product.name.toLowerCase().includes(""),
    );
    setFilteredProducts(filtered);
  }

  return (
    <div className="mb-24 w-full">
      <Helmet title="Home" />
      <Header />
      <div className="mt-16 md:mt-0 lg:mt-0">
        <SearchFilter onSearch={handleSearch} />
      </div>
      {/* Botões de filtro por categoria */}
      <ScrollArea className="mt-4 w-full whitespace-nowrap">
        <Button
          onClick={() => handleCategoryFilter(null)}
          variant={activeCategory === null ? "default" : "outline"}
        >
          Todos
        </Button>
        {categories.map((category) => (
          <Button
            className="ml-2"
            key={category}
            onClick={() => handleCategoryFilter(category)}
            variant={activeCategory === category ? "default" : "outline"}
          >
            {category}
          </Button>
        ))}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {/* Body */}
      <main className="mt-4 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 lg:mt-8 lg:grid-cols-2">
        {filteredProducts.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </main>
    </div>
  );
}
