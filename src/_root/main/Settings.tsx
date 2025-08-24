import { useEffect, useState } from "react";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { useTheme } from "../../validation/ThemeContext";

const Settings = () => {
 const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-col gap-2">
      <Separator />
      <div className="flex flex-col gap-2">
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
    </div>
  );
};

export default Settings;
