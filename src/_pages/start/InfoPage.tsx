import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientData } from "../../validation";
import { Button } from "../../components/ui/button";

const InfoPage = ({ onNext, onPrevious }: any) => {
  const form = useForm<z.infer<typeof clientData>>({
    resolver: zodResolver(clientData),
    defaultValues: {
      name: "",
      phone: "",
    },
  });
  const onSubmit = (values: z.infer<typeof clientData>) => {
    onNext({ values });
  };
  const previosHandleSubmit = (state: boolean) => {
    onPrevious({ state });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1>Bem-vindo</h1>
      <p>Selecione a data para o seu atendimento.</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full items-center flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full justify-between">
            <Button variant="outline" onClick={() => previosHandleSubmit(true)}>Voltar</Button>
            <Button type="submit">Proximo</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default InfoPage;
