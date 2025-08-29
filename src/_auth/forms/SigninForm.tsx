import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { loginForm } from "../../validation";
import { Link } from "react-router-dom";

const SigninForm = () => {
  const form = useForm<z.infer<typeof loginForm>>({
    resolver: zodResolver(loginForm),
    defaultValues: {
      email: "",
      key: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginForm>) => {
    console.log(values);
  };

  return (
    <div className="w-full px-6 md:px-10 md:w-1/2 flex flex-col gap-4 mx-auto">
      <h1 className="font-bold text-2xl text-center">Entrar</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="key"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Entrar</Button>
        </form>
      </Form>

       <div className="w-full flex gap-2 justify-center">
        <p className="text-sm text-foreground/50 mt-2">Não tem conta?</p>
      <Link className="text-sm mt-2" to="/sign-up">Criar conta</Link>
      </div>
    </div>
  );
};

export default SigninForm;
