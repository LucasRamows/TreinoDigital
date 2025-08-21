import { useState } from "react";
import { Button } from "../../components/ui/button";

const TimePage = ({ onNext, data, onPrevious }: any) => {
  const array = ["15:30", "16:30", "17:30", "18:00", "18:30"];
  const [selectedTime, setSelectedTime] = useState(data?.time || "");

  const handleSubmit = (time: string) => {
    setSelectedTime(time);
    onNext({ time });
  };
    const previosHandleSubmit = (state:boolean) => {
    onPrevious({state});
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1>Bem-vindo</h1>
      <p>Selecione entre os horários disponíveis para ser atendido.</p>
      <ul className="border-2 rounded-2xl grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {array.map((time) => (
          <li key={time}>
            <Button
              onClick={() => handleSubmit(time)}
              className={selectedTime === time ? "bg-primary-500 text-white" : ""}
            >
              {time}
            </Button>
          </li>
        ))}
      </ul>
      <Button variant="outline" onClick={() => previosHandleSubmit(true)} >Voltar</Button>
    </div>
  );
};

export default TimePage;
