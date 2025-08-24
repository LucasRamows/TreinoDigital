import { ArrowBigRight, Trash } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
  DescriptionCard,
  TinyCard,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { useIsMobile } from "../../hooks/use-mobile";

const TimeJob = () => {
    const isMobile = useIsMobile();

  const data = {
    segunda: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ],
    terca: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ],
    quarta: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ],
    quinta: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ],
    sexta: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ],
    sabado: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"],
    domingo: ["08:00", "09:00", "10:00", "11:00"],
  };
  const holidays = [
    {
      month: "Janeiro",
      holidays: ["01 - Confraternização Universal"],
    },
    {
      month: "Fevereiro",
      holidays: ["03 - Carnaval", "04 - Carnaval"],
    },
    {
      month: "Março",
      holidays: ["05 - Quarta-feira de Cinzas"],
    },
    {
      month: "Abril",
      holidays: ["18 - Paixão de Cristo", "21 - Tiradentes"],
    },
    {
      month: "Maio",
      holidays: ["01 - Dia do Trabalho"],
    },
    {
      month: "Junho",
      holidays: ["19 - Corpus Christi"],
    },
    {
      month: "Julho",
      holidays: [],
    },
    {
      month: "Agosto",
      holidays: [],
    },
    {
      month: "Setembro",
      holidays: ["07 - Independência do Brasil"],
    },
    {
      month: "Outubro",
      holidays: ["12 - Nossa Senhora Aparecida"],
    },
    {
      month: "Novembro",
      holidays: [
        "02 - Finados",
        "15 - Proclamação da República",
        "20 - Consciência Negra",
      ],
    },
    {
      month: "Dezembro",
      holidays: ["25 - Natal"],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className={!isMobile?"grid gap-2 grid-cols-4":"flex flex-col gap-2"}>
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">Segunda</CardTitle>
              <CardAction>
                <Button variant="outline" className="flex justify-center">
                  Editar
                </Button>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <ul>
              {data.segunda.map((times) => (
                <Badge variant="outline">{times}</Badge>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">Terça</CardTitle>
              <CardAction>
                <Button variant="outline" className="flex justify-center">
                  Editar
                </Button>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <ul>
              {data.terca.map((times) => (
                <Badge variant="outline">{times}</Badge>
              ))}
            </ul>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">Quarta</CardTitle>
              <CardAction>
                <Button variant="outline" className="flex justify-center">
                  Editar
                </Button>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <ul>
              {data.quarta.map((times) => (
                <Badge variant="outline">{times}</Badge>
              ))}
            </ul>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">Quinta</CardTitle>
              <CardAction>
                <Button variant="outline" className="flex justify-center">
                  Editar
                </Button>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <ul>
              {data.quinta.map((times) => (
                <Badge variant="outline">{times}</Badge>
              ))}
            </ul>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">Sexta</CardTitle>
              <CardAction>
                <Button variant="outline" className="flex justify-center">
                  Editar
                </Button>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <ul>
              {data.sexta.map((times) => (
                <Badge variant="outline">{times}</Badge>
              ))}
            </ul>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">Sabado</CardTitle>
              <CardAction>
                <Button variant="outline" className="flex justify-center">
                  Editar
                </Button>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <ul>
              {data.sabado.map((times) => (
                <Badge variant="outline">{times}</Badge>
              ))}
            </ul>
          </CardContent>
        </Card>{" "}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">Domingo</CardTitle>
              <CardAction>
                <Button variant="outline" className="flex justify-center">
                  Editar
                </Button>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <ul>
              {data.domingo.map((times) => (
                <Badge variant="outline">{times}</Badge>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <Separator />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="font-bold">Feriados e Bloqueios</h1>
          <Button variant="outline" className="cursor-pointer">
            Adicionar
          </Button>
        </div>
        <div className="">
          <ul className={!isMobile?"grid gap-2 grid-cols-3":"flex flex-col gap-2"}>
            {holidays.map((holy) => (
              <TinyCard color="green">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-muted-foreground">
                      {holy.month}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2">
                    {holy.holidays.map((times) => (
                      <div className="flex justify-between">
                        <Badge variant="outline">{times}</Badge>
                        <Button className=" h-full" variant="destructive"><Trash className="size-3" /></Button>
                      </div>
                    ))}
                  </ul>
                </CardContent>
              </TinyCard>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeJob;
