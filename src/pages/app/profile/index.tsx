import { CardProduct } from "@/components/card-product";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";
import { simulatedApiResponse } from "@/components/simulated-api-response";

export function Profile() {
  const products = simulatedApiResponse;
  return (
    <>
      <header>
        <div className="h-44 w-full overflow-hidden rounded-md bg-zinc-700">
          <img
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <Avatar className="-mt-7 ml-4 size-16">
          <AvatarImage src="https://github.com/peterpontocom.png" />
          <AvatarFallback>PP</AvatarFallback>
        </Avatar>
        <p className="mt-2 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          aspernatur! Itaque culpa illo expedita aperiam cum quam fugit
          perspiciatis ipsam explicabo tenetur soluta eligendi harum, odio ullam
          quibusdam voluptatum beatae.
        </p>
        <nav className="mt-8">
          <ul className="flex gap-5">
            <li>
              <Link
                to={""}
                className="border-b-2 border-primary py-4 font-semibold text-primary"
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link to={""}>Publicações</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mt-8">
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              product={product.product}
              profile={product.profile}
            />
          ))}
        </div>
      </main>
    </>
  );
}
