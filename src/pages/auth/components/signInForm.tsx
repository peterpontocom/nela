import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const SignInFormSchema = z.object({
  email: z.string({ message: "Insira um email válido" }).email(),
  password: z.string({ message: "Insira uma palavra-passe válida" }),
});

type SignInFormValues = z.infer<typeof SignInFormSchema>;

export function SignInForm() {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleSignIn(values: SignInFormValues) {
    console.log(values);
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSignIn)}
        className="mt-4 flex flex-col gap-4"
      >
        <Card className="flex flex-col gap-2 p-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Palavra-passe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-2 font-medium">
            Entrar
          </Button>
          <p className="space-y-4 text-center text-sm text-muted-foreground">
            Não tem conta?{" "}
            <Link
              to="/sign-up"
              className="font-medium text-emerald-500 hover:underline md:font-semibold lg:font-semibold"
            >
              Crie uma
            </Link>
          </p>
        </Card>
      </form>
    </Form>
  );
}
