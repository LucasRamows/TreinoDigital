import { Badge } from "../../components/ui/badge";
import {
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { useOutletContext } from "react-router-dom";
import type { UserType } from "../../validation/types/gettingBackDataType";
const daysOfWeek = [
  { key: "seg", label: "Segunda-Feira" },
  { key: "ter", label: "Terça-Feira" },
  { key: "qua", label: "Quarta-Feira" },
  { key: "qui", label: "Quinta-Feira" },
  { key: "sex", label: "Sexta-Feira" },
  { key: "sab", label: "Sábado" },
  { key: "dom", label: "Domingo" },
];

const Routine = () => {
  const dataAll = useOutletContext<UserType | null>();

  const data = dataAll?.UserExercise || [];

  return (
    <div className="flex flex-col px-10 gap-5">
      <div className="flex flex-1 w-full gap-5 items-center">
        <div>
          <h1>Olá, Lucas! Essa é a sua rotina!</h1>
          <p className="text-foreground/50">
            Para alterar é necessário entrar em contato com o seu personal.
          </p>
        </div>
      </div>

      <Separator />

      <div className="grid grid-cols-2 gap-3">
        {daysOfWeek.map((day) => (
          <Card key={day.key} className="w-full">
            <CardHeader className="flex flex-1 justify-center">
              <div className="flex justify-between items-center">
                <CardTitle className="text-muted-foreground">
                  {day.label}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 px-4 gap-3">
                {data
                  .filter((exercise: any) => exercise.day.includes(day.key))
                  .map((exercise: any, i: number) => (
                    <Badge
                      key={i}
                      className="flex w-full text-sm"
                      variant="outline"
                    >
                      <div className="w-full flex justify-between">
                        <p>
                          {exercise.sessions +
                            "/" +
                            exercise.reps +
                            " - " +
                            exercise.exercise.name}
                        </p>
                        <p>{exercise.weight + "kg"}</p>
                      </div>
                    </Badge>
                  ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Routine;
