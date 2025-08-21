import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";

const ServicePage = ({ onNext, onPrevious }: any) => {
  const [services, setServices] = useState<string[]>([]);
  const [value, setValue] = useState(0);
  const servicesAll = [
    { name: "Corte de cabelo", price: 20.05 },
    { name: "Limpeza de pele", price: 30 },
    { name: "Barba", price: 15 },
    { name: "Corte infantil", price: 18 },
    { name: "Sobrancelha", price: 10 },
    { name: "Hidratação", price: 25 },
    { name: "Hidratação", price: 25 },
    { name: "Hidratação", price: 25 },
    { name: "Hidratação", price: 25 },
  ];
  const toggleService = (name: string, price: number, checked: boolean) => {
    setServices((prev) =>
      checked ? [...prev, name] : prev.filter((s) => s !== name)
    );
    setValue((prev) => (checked ? prev + price : prev - price));
  };
  const handleSubmit = () => {
    onNext({ services });
  };
  const previosHandleSubmit = (state: boolean) => {
    onPrevious({ state });
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1>Bem-vindo</h1>
      <p>Selecione a data para o seu atendimento.</p>
      <div className="w-full max-h-90 overflow-y-auto scrollbar-hide">
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {servicesAll.map((service) => (
            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox
                id="toggle-2"
                onCheckedChange={(checked) =>
                  toggleService(service.name, service.price, checked as boolean)
                }
                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
              />
              <div className="w-full flex justify-between font-normal">
                <p className="text-sm leading-none font-medium">
                  {service.name}
                </p>
                <p className="text-chart-2 text-sm leading-none font-medium">
                  {"R$" + service.price}
                </p>
              </div>
            </Label>
          ))}
        </ul>
      </div>
      <div className="w-1/2 md:w-1/4 flex justify-between py-1 px-3 bg-blue-600 rounded-2xl">
        <p>Total</p>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(value)}
        </p>
      </div>
      <div className="w-full flex justify-between">
        <Button variant="outline" onClick={() => previosHandleSubmit(true)}>Voltar</Button>

        <Button onClick={handleSubmit}>Próximo</Button>
      </div>
    </div>
  );
};

export default ServicePage;
