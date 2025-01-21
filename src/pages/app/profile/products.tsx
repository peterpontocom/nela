import { CardProduct } from "@/components/card-product";
import { simulatedApiResponse } from "@/components/simulated-api-response";

export function ProfileProducts() {
  const products = simulatedApiResponse;

  return (
    <div className="grid grid-cols-2 gap-3">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          product={product.product}
          profile={product.profile}
        />
      ))}
    </div>
  );
}
