import { BadgeCheck, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface CardProductProps {
  profile: {
    avatar: string;
    storename: string;
    storeId: string;
    isFollowing: boolean;
  };
  product: {
    image: string;
    name: string;
    price: number;
    isFavorite: boolean;
  };
}

export function CardProduct({ profile, product }: CardProductProps) {
  const [isFollowing, setIsFollowing] = useState(profile.isFollowing);
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);

  const handleFollow = () => {
    setIsFollowing((prev) => !prev);
    toast(
      `Você ${isFollowing ? "deixou de seguir" : "está seguindo"} ${profile.storeId}`,
    );
  };

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
    toast(
      `Produto ${isFavorite ? "removido dos" : "adicionado aos"} favoritos`,
    );
  };

  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex flex-row items-center justify-between gap-2">
        <HoverCard>
          <HoverCardTrigger>
            <Link
              to={`/@${profile.storeId}`}
              className="flex items-center gap-2"
            >
              <Avatar className="h-8 w-8 rounded-full">
                {" "}
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                <AvatarImage src={profile.avatar} />
              </Avatar>
              <div className="lg:xs flex max-w-[120px] items-center gap-1 truncate text-sm md:text-sm">
                <span className="font-semibold">{profile.storename}</span>{" "}
                <BadgeCheck
                  fill=""
                  className="size-4 fill-sky-400 text-white"
                />
              </div>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex gap-2">
              <Avatar className="h-8 w-8 rounded-full">
                {" "}
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                <AvatarImage src={profile.avatar} />
              </Avatar>
              <p>
                Bem-vindo à nossa página de alimentos! Somos apaixonados por
                comida e queremos compartilhar nossa paixão com você. Oferecemos
                uma ampla variedade de alimentos, desde lanches rápidos até
                refeições completas. 🍟🍔
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <div>
          <Button variant="outline" size="xs" onClick={handleFollow}>
            {isFollowing ? "Seguindo" : "Seguir"}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-row">
        <div className="h-40 w-full md:h-48 lg:h-56">
          {" "}
          <img
            src={product.image}
            className="h-full w-full rounded-md object-cover"
            alt={product.name}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-2">
          <div className="mt-2 flex flex-1 flex-col gap-2">
            <h1 className="text-base font-medium md:text-lg">{product.name}</h1>
            <span className="text-base font-semibold text-orange-400 md:text-xl">
              {product.price.toLocaleString("pt-BR", {
                currency: "KZS",
                style: "currency",
              })}
            </span>
          </div>
          <div className="mt-2 flex flex-row-reverse items-center gap-2 md:flex-col-reverse md:items-stretch lg:flex-col-reverse lg:items-stretch">
            <Button
              variant="outline"
              size="sm"
              onClick={handleFavorite}
              className={`flex items-center ${isFavorite ? "text-yellow-400" : ""}`}
            >
              <Star
                className="data-[favorite=true]:fill-current"
                data-favorite={isFavorite}
              />{" "}
              <span className="hidden md:inline-block">Salvar</span>
            </Button>
            <Button className="flex-1">Comprar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
