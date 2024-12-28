import { Button } from "@/components/ui/button";
import googleLogo from "@/assets/google-logo.svg";
import { SignInForm } from "./components/signInForm";

export function SignIn() {
  return (
    <div className="md:w-[300px] lg:w-[400px]">
      <h1 className="font-title text-2xl font-bold">Iniciar Sessão</h1>
      <p className="text-xs text-muted-foreground md:text-sm lg:text-sm">
        Descubra sabores que combinam com você. Pedidos simples, momentos
        deliciosos!
      </p>
      <div>
        <Button variant={"outline"} className="mt-4 w-full font-semibold">
          <img src={googleLogo} className="size-4" /> Continuar com Google
        </Button>
      </div>
      <SignInForm />
    </div>
  );
}
