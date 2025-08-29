import { Badge } from "../../components/ui/badge";
import {
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
  DescriptionCard,
  TinyCard,
} from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

const Routine = () => {
  const data = [
    {
      id: "cmera00wf00016boqnq6foryd",
      weight: [],
      day: ["qua"],
      sessions: 3,
      reps: 12,
      status: true,
      frequency: 1,
      userId: "cmer7oy1w00006b1taeib4bdq",
      exerciseId: 1,
      exercise: {
        id: 1,
        name: "PUlle c/ corda",
        image: null,
        description: "fsdjfdsf",
        createAt: "2025-08-25T14:49:43.336Z",
        updatedAt: "2025-08-25T15:50:03.881Z",
      },
    },
    {
      id: "cmerg68t900056b34rswvgbk0",
      weight: [],
      day: ["seg"],
      sessions: 3,
      reps: 12,
      status: true,
      frequency: 1,
      userId: "cmer7oy1w00006b1taeib4bdq",
      exerciseId: 2,
      exercise: {
        id: 2,
        name: "Triceps",
        image: null,
        description: "fsdjfdsf",
        createAt: "2025-08-25T18:25:04.453Z",
        updatedAt: "2025-08-25T18:25:04.453Z",
      },
    },
    {
      id: "cmesi37ao0007w8p0y5fc614r",
      weight: [40, 2],
      day: ["ter", "qua", "qui"],
      sessions: 3,
      reps: 12,
      status: true,
      frequency: 1,
      userId: "cmer7oy1w00006b1taeib4bdq",
      exerciseId: 3,
      exercise: {
        id: 3,
        name: "Supino Reto",
        image: null,
        description: "Exercício para peitoral utilizando barra",
        createAt: "2025-08-26T12:05:50.074Z",
        updatedAt: "2025-08-26T12:05:50.074Z",
      },
    },
  ];

  return (
    <div className="flex flex-col px-10 gap-5">
      <div className="flex flex-1 w-full gap-5 items-center">
        <div className="">
          <h1>Olá, Lucas! Essa é a sua rotina!</h1>
          <p className="text-foreground/50">
            Para alterar é necessario entrar em contato com o seu personal.
          </p>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-3">
        <TinyCard className="w-full">
          <CardHeader className="flex flex-1 justify-center">
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Segunda-Feira
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 px-4 flex gap-3">
              {data
                .filter((exercise) => exercise.day.includes("seg"))
                .map((data) => (
                  <Badge className="flex w-full text-sm" variant="outline">
                    <div className="w-full flex justify-between">
                      <p>
                        {data.sessions +
                          "/" +
                          data.reps +
                          " - " +
                          data.exercise.name}
                      </p>{" "}
                      <p>{data.weight + "kg"}</p>
                    </div>
                  </Badge>
                ))}
            </ul>
          </CardContent>
        </TinyCard>
        <TinyCard className="w-full">
          <CardHeader className="flex flex-1 justify-center">
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Terça-Feira
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 px-4 flex gap-3">
              {data
                .filter((exercise) => exercise.day.includes("ter"))
                .map((data) => (
                  <Badge className="flex w-full text-sm" variant="outline">
                    <div className="w-full flex justify-between">
                      <p>
                        {data.sessions +
                          "/" +
                          data.reps +
                          " - " +
                          data.exercise.name}
                      </p>{" "}
                      <p>{data.weight + "kg"}</p>
                    </div>
                  </Badge>
                ))}
            </ul>
          </CardContent>
        </TinyCard>
        <TinyCard className="w-full">
          <CardHeader className="flex flex-1 justify-center">
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Quarta-Feira
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 px-4 flex gap-3">
              {data
                .filter((exercise) => exercise.day.includes("qua"))
                .map((data) => (
                  <Badge className="flex w-full text-sm" variant="outline">
                    <div className="w-full flex justify-between">
                      <p>
                        {data.sessions +
                          "/" +
                          data.reps +
                          " - " +
                          data.exercise.name}
                      </p>{" "}
                      <p>{data.weight + "kg"}</p>
                    </div>
                  </Badge>
                ))}
            </ul>
          </CardContent>
        </TinyCard>
        <TinyCard className="w-full">
          <CardHeader className="flex flex-1 justify-center">
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Quinta-Feira
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 px-4 flex gap-3">
              {data
                .filter((exercise) => exercise.day.includes("qui"))
                .map((data) => (
                  <Badge className="flex w-full text-sm" variant="outline">
                    <div className="w-full flex justify-between">
                      <p>
                        {data.sessions +
                          "/" +
                          data.reps +
                          " - " +
                          data.exercise.name}
                      </p>{" "}
                      <p>{data.weight + "kg"}</p>
                    </div>
                  </Badge>
                ))}
            </ul>
          </CardContent>
        </TinyCard>
        <TinyCard className="w-full">
          <CardHeader className="flex flex-1 justify-center">
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Sexta-Feira
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 px-4 flex gap-3">
              {data
                .filter((exercise) => exercise.day.includes("sex"))
                .map((data) => (
                  <Badge className="flex w-full text-sm" variant="outline">
                    <div className="w-full flex justify-between">
                      <p>
                        {data.sessions +
                          "/" +
                          data.reps +
                          " - " +
                          data.exercise.name}
                      </p>{" "}
                      <p>{data.weight + "kg"}</p>
                    </div>
                  </Badge>
                ))}
            </ul>
          </CardContent>
        </TinyCard>
        <TinyCard className="w-full">
          <CardHeader className="flex flex-1 justify-center">
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Sabado
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 px-4 flex gap-3">
              {data
                .filter((exercise) => exercise.day.includes("sab"))
                .map((data) => (
                  <Badge className="flex w-full text-sm" variant="outline">
                    <div className="w-full flex justify-between">
                      <p>
                        {data.sessions +
                          "/" +
                          data.reps +
                          " - " +
                          data.exercise.name}
                      </p>{" "}
                      <p>{data.weight + "kg"}</p>
                    </div>
                  </Badge>
                ))}
            </ul>
          </CardContent>
        </TinyCard>
        <TinyCard className="w-full">
          <CardHeader className="flex flex-1 justify-center">
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Domingo
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 px-4 flex gap-3">
              {data
                .filter((exercise) => exercise.day.includes("dom"))
                .map((data) => (
                  <Badge className="flex w-full text-sm" variant="outline">
                    <div className="w-full flex justify-between">
                      <p>
                        {data.sessions +
                          "/" +
                          data.reps +
                          " - " +
                          data.exercise.name}
                      </p>{" "}
                      <p>{data.weight + "kg"}</p>
                    </div>
                  </Badge>
                ))}
            </ul>
          </CardContent>
        </TinyCard>
      </div>
    </div>
  );
};

export default Routine;
