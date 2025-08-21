import { Button } from "../../components/ui/button";

const ConfirmationPage = ({ onNext, data, onPrevious }: any) => {
  const handleSubmit = () => {
    // Aqui você pode enviar os dados pro backend
    onNext({});
    console.log("Confirmado:", data);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-md p-6 bg-card rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-foreground">
          Confirmação do Agendamento
        </h1>
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="font-medium">Data:</span>
            <span className="text-sm">
              {new Date(data.date).toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Horário:</span>
            <span className="text-sm">{data.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Serviços:</span>
            <span className="text-sm">{data.services.join(", ")}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Nome:</span>
            <span className="text-sm">{data.values?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">WhatsApp:</span>
            <span className="text-sm">{data.values?.phone}</span>
          </div>
        </div>

        <div className="flex gap-4 mt-4 w-full">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onPrevious(true)}
          >
            Voltar
          </Button>
          <Button className="flex-1" onClick={handleSubmit}>
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
