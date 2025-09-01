import { ChartAreaInteractive } from "../../components/chart-area-interactive";
import {
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
  DescriptionCard,
  TinyCard,
} from "../../components/ui/card";
import { useIsMobile } from "../../hooks/use-mobile";
import { useOutletContext } from "react-router-dom";
import type { UserType } from "../../validation/types/gettingBackDataType";


const DashboardUser = () => {
  const isMobile = useIsMobile();
  const user = useOutletContext<UserType | null>();

  return (
    <div className="w-full flex flex-col gap-5">
      <div className={`w-full flex gap-2 ${isMobile ? "flex-col" : "flex"}`}>
        <TinyCard className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">Peso</CardTitle>
              <CardAction>
                <DescriptionCard>
                  <CardContent>
                    <p>Hoje</p>
                  </CardContent>
                </DescriptionCard>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-xl font-bold">
              {user?.weigth?.at(-1) ?? "Sem dados"}
            </h1>
          </CardContent>
        </TinyCard>

        <TinyCard className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">Frequência</CardTitle>
              <CardAction>
                <DescriptionCard>
                  <CardContent>
                    <p>Mês</p>
                  </CardContent>
                </DescriptionCard>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-xl font-bold">
              {user?.frequency ?? "Sem dados"}
            </h1>
          </CardContent>
        </TinyCard>
      </div>

      <div>
        <ChartAreaInteractive />
      </div>
    </div>
  );
};

export default DashboardUser;
