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
import { loginForm, signForm } from "../../validation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { Calendar } from "../../components/ui/calendar";
import React from "react";
import { Separator } from "../../components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import formatPhone from "../../validation/modules/formatPhone";

const SignupForm = () => {
  const [open, setOpen] = React.useState(false);
  const form = useForm<z.infer<typeof signForm>>({
    resolver: zodResolver(signForm),
    defaultValues: {
      email: "",
      key: "",
      confirmKey: "",
      fullName: "",
      birthDate: undefined,
      gender: undefined,
      phone: undefined,
      height: undefined,
      weight: undefined,
      activityLevel: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof loginForm>) => {
    console.log(values);
  };
  return (
    <div className="w-full px-6 md:px-10 md:w-[80%] flex flex-col gap-4 mx-auto">
      <h1 className="font-bold text-2xl text-center">Criar Conta</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <div className="w-full flex gap-1">
            <FormField
              control={form.control}
              name="key"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmKey"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex gap-1">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>WhatsApp</FormLabel>
                  <FormControl>
                    <Input
                      maxLength={15}
                      type="text"
                      placeholder="(99) 99999-9999"
                      value={field.value || ""}
                      onChange={(e) => {field.onChange(formatPhone(e.target.value))
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Aniversário</FormLabel>
                  <FormControl>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          id="date"
                          className="w-full justify-between font-normal"
                        >
                          {field.value
                            ? new Date(field.value).toLocaleDateString("pt-BR")
                            : "Selecione a data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={(d) => {
                            field.onChange(d?.toISOString() ?? ""); // salva no form
                            setOpen(false);
                          }}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Separator />
          <div className="w-full flex gap-1">
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Altura</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Peso Atual</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-1">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Sexo</FormLabel>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="w-full" variant="outline">
                        {field.value
                          ? field.value.charAt(0).toUpperCase() +
                            field.value.slice(1)
                          : "Selecione"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full" align="start">
                      <DropdownMenuItem
                        className="w-full"
                        onSelect={() => field.onChange("masculino")}
                      >
                        Masculino
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="w-full"
                        onSelect={() => field.onChange("feminino")}
                      >
                        Feminino
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="activityLevel"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Status Atual</FormLabel>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="w-full" variant="outline">
                        {field.value
                          ? field.value.charAt(0).toUpperCase() +
                            field.value.slice(1)
                          : "Selecione"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full" align="start">
                      <DropdownMenuItem
                        className="w-full"
                        onSelect={() => field.onChange("atleta")}
                      >
                        Atleta
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="w-full"
                        onSelect={() => field.onChange("moderado")}
                      >
                        Moderado
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="w-full"
                        onSelect={() => field.onChange("sedentario")}
                      >
                        Sedentário
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Entrar</Button>
        </form>
      </Form>

      <div className="w-full flex gap-2 justify-center">
        <p className="text-sm text-foreground/50 mt-2">Já tem conta?</p>
      <Link className="text-sm mt-2" to="/sign-in">Entrar</Link>
      </div>
    </div>
  );
};

export default SignupForm;
