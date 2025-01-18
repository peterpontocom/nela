import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function NelaCard() {
  return (
    <div className="mt-16 md:mt-0 lg:mt-0">
      <Card>
        <CardHeader>
          <h1 className="text-sm text-muted-foreground">Seu cartão Nela</h1>
        </CardHeader>
        <CardContent>
          <div className="text-sm font-medium text-muted-foreground">
            Saldo:
          </div>
          <div className="text-4xl font-bold">KZS 5000,00</div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex gap-1 text-muted-foreground">
            <div>ID:</div>
            <div>123 423</div>
          </div>
          <Button
            variant={"outline"}
            size={"xs"}
            className="text-muted-foreground"
          >
            Copiar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
