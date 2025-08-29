import { ChartAreaInteractive } from "../../components/chart-area-interactive";
import { DataTable } from "../../components/data-table";
import {
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
  DescriptionCard,
  TinyCard,
} from "../../components/ui/card";
import { useIsMobile } from "../../hooks/use-mobile";


const DashboardUser = () => {
  const isMobile = useIsMobile();
  const data = [
  {
    "id": 1,
    "client": "lall",
    "services": ["Cover page", "dajsd", "asjdhs"],
    "phone": "4454142",
    "price": "18",
    "time": "15:30",
  },
]
  return (
    <div className="w-full flex flex-col gap-5">
      <div className={`w-full flex gap-2 " ${isMobile ? "flex-col" : "flex"}`}>
        <TinyCard className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Total Ganhos
              </CardTitle>
              <CardAction>
                <DescriptionCard>
                  <CardContent>
                    <p>30 dias</p>
                  </CardContent>
                </DescriptionCard>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-xl font-bold">R$ 1000,00</h1>
          </CardContent>
        </TinyCard>
        <TinyCard className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Total Faturados
              </CardTitle>
              <CardAction>
                <DescriptionCard className="">
                  <CardContent>
                    <p>Hoje</p>
                  </CardContent>
                </DescriptionCard>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-xl font-bold">50</h1>
          </CardContent>
        </TinyCard>
        <TinyCard className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Total Clientes
              </CardTitle>
              <CardAction>
                <DescriptionCard className="">
                  <CardContent>
                    <p>Geral</p>
                  </CardContent>
                </DescriptionCard>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-xl font-bold">50</h1>
          </CardContent>
        </TinyCard>
        <TinyCard className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-muted-foreground">
                Novos Clientes
              </CardTitle>
              <CardAction>
                <DescriptionCard className="">
                  <CardContent>
                    <p>30 dias</p>
                  </CardContent>
                </DescriptionCard>
              </CardAction>
            </div>
          </CardHeader>
          <CardContent>
            <h1 className="text-xl font-bold">50</h1>
          </CardContent>
        </TinyCard>
      </div>
      <div className="">
        <ChartAreaInteractive/>
      </div>
      <div className="">
        <DataTable data={data}/>
      </div>
    </div>
  );
};

export default DashboardUser;
