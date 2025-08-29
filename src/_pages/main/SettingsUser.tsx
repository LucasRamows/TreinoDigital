import { useEffect, useState } from "react";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { useTheme } from "../../validation/ThemeContext";
import { Badge } from "../../components/ui/badge";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";

const SettingsUser = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-col gap-4">
      <Separator />
      <div className="flex flex-col gap-4">
        <h1>Aparência</h1>
        <div className="px-3">
          <Label className="w-fit hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
            <Checkbox
              id="toggle-2"
              checked={theme === "dark"}
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
            />
            <div className="grid gap-1.5 font-normal">
              <p className="text-sm leading-none font-medium">Modo Escuro</p>
            </div>
          </Label>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <h1 className="">Opções de Notificação</h1>
        <div className="px-3 grid grid-cols-4">
          <Label className="w-fit hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
            <Checkbox
              id="toggle-2"
              checked={false}
              className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
            />
            <div className="grid gap-1.5 font-normal">
              <p className="text-sm leading-none font-medium">
                Notificar quando houver desistencia
              </p>
            </div>
          </Label>
          <Label className="w-fit hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
            <Checkbox
              id="toggle-2"
              checked={false}
              className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
            />
            <div className="grid gap-1.5 font-normal">
              <p className="text-sm leading-none font-medium">
                Notificar quando houver marcação
              </p>
            </div>
          </Label>
          <Label className="w-fit hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
            <Checkbox
              id="toggle-2"
              checked={false}
              className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
            />
            <div className="grid gap-1.5 font-normal">
              <p className="text-sm leading-none font-medium">
                Notificar ao encher a agenda
              </p>
            </div>
          </Label>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col gap-2">
        <h1>Portifolio Pessoal</h1>
        <div className=" px-4 grid grid-cols-3 gap-2">
          <div className="flex flex-col gap-2">
            <Label>Nome Artistico</Label>
            <Input defaultValue={"Lucas Ramos"} type="text" className="shad-input" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Recado</Label>
            <Input defaultValue={"Melhor atendimento ao cliente sempre."} type="text" className="shad-input" />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Contato</Label>
            <Input defaultValue={"5575994444"} type="text" className="shad-input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsUser;
