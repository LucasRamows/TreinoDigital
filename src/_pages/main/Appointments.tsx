import { useIsMobile } from "../../hooks/use-mobile";
import { useOutletContext } from "react-router-dom";
import type { UserType } from "../../validation/types/gettingBackDataType";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Button } from "../../components/ui/button";
import {
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
  DescriptionCard,
  TinyCard,
} from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";

const Appointments = () => {
  const isMobile = useIsMobile();
  const user = useOutletContext<UserType | null>();

  // só exemplo de lista
  const data = { log: ["lala", "lolo"] };

  return (
    <div className="w-full flex flex-col gap-5">
      <Sheet>
        <div className="w-full flex justify-end">
          <SheetTrigger asChild>
            <Button variant="outline">Criar Nova Tarefa</Button>
          </SheetTrigger>
        </div>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="">
        <ul className="grid grid-cols-2 gap-3">
          {data.log.map((task, idx) => (
            <TinyCard key={idx} className="w-full flex-row p-4">
              <div className="flex justify-center items-center">
                <Checkbox className="p-2">

                </Checkbox>
              </div>
              <div className="w-full">
                <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-muted-foreground">{task}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h1 className="text-xl font-bold">
                  {user?.weigth?.at(-1) ?? "Sem dados"}
                </h1>
              </CardContent>
              </div>
            </TinyCard>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Appointments;
