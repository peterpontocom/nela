import { Button } from "@/components/ui/button";
import googleLogo from "@/assets/google-logo.svg";
import { SignUpForm } from "./components/signUpForm";

export function SignUp() {
  return (
    <div className="md:w-[300px] lg:w-[550px]">
      <h1 className="font-brand text-2xl font-bold">Criar conta</h1>
      <p className="text-xs text-muted-foreground md:text-sm lg:text-sm">
        Uma nova forma de saborear a vida. Pedidos simples, momentos deliciosos!
      </p>
      <div>
        <Button variant={"outline"} className="mt-4 w-full font-semibold">
          <img src={googleLogo} className="size-4" /> Continuar com Google
        </Button>
      </div>
      <SignUpForm />
    </div>
  );
}
