import { EllipsisIcon, Pencil } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import React from "react";
import { Badge } from "../../components/ui/badge";

interface Appointment {
  id: number|null;
  time: string|null;
  cliente: string|null;
  servicos: string[]|null;
  whatsapp: string|null;
}

const Appointments = () => {
  const appointments: Appointment[] = [
    {
      id: 1,
      time: "15:00",
      cliente: "João Silva",
      servicos: ["Corte de cabelo", "Barba"],
      whatsapp: "+55 75 99999-9999",
    },
    {
      id: null,
      time: "15:30",
      cliente: null,
      servicos: null,
      whatsapp: null,
    },
    {
      id: 3,
      time: "15:00",
      cliente: "Carlos Lima",
      servicos: ["Corte + Barba", "Hidratação"],
      whatsapp: "+55 75 97777-7777",
    },
  ];

  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);

  const isToday = (d: Date | undefined) => {
    if (!d) return false;
    const today = new Date();
    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Calendário */}
      <div className="flex flex-col gap-3">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-fit justify-between font-normal"
            >
              {isToday(date) ? "Hoje" : date?.toLocaleDateString()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(d) => {
                setDate(d);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="p-4 border-2 rounded-2xl">
        <Table>
          <TableCaption>Todos os agendamentos até o momento</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Horário</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Serviços</TableHead>
              <TableHead className="text-left">WhatsApp</TableHead>
              <TableHead className="text-right">Opções</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((agendamento) => (
              <TableRow key={agendamento.id}>
                <TableCell className="font-medium">
                  {agendamento.time}
                </TableCell>
                <TableCell>{agendamento.cliente}</TableCell>
                <TableCell>
                  <ul className="flex gap-2 flex-wrap">
                    {agendamento.servicos?.map((service) => (
                      <li>
                        <Badge variant="outline">{service}</Badge>
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell className="text-left">
                  {agendamento.whatsapp}
                </TableCell>
                <TableCell className="text-right">
                    {agendamento.id === null? <Button variant="secondary"><Pencil/></Button> :<Button variant="secondary"><EllipsisIcon/></Button>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Appointments;
