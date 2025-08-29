import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";

const ProfileUser = () => {
  const data = [
    {
      name: "Corte de Cabelo",
    },
    {
      name: "Barba e Bigode",
    },
    {
      name: "Corte + Barba",
    },
  ];

  return (
    <div className="flex flex-col px-10 gap-5">
      <div className="flex flex-1 w-full gap-5 items-center">
        <img
          src="assets/background.jpeg"
          className="w-15 h-15 rounded-full"
          alt="dados"
        />

        <div className="">
          <h1>Lucas Ramos</h1>
          <p>Barbeiro</p>
        </div>
      </div>
      <Separator />
      <div className="flex flex-1 flex-col gap-3">
        <h1>Especialiades</h1>
        <ul className="px-4 flex gap-3">
          {data.map((especialidade) => (
            <Badge  variant="outline">{especialidade.name}</Badge>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileUser;
