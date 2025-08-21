import React from "react";
import { Calendar } from "../../components/ui/calendar";
import { Button } from "../../components/ui/button";

const DatePage = ({ onNext, data }: any) => {
  const [date, setDate] = React.useState<Date | undefined>(
    data?.date || new Date()
  );

  const today = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(today.getMonth() + 1);

  const handleSubmit = () => {
    onNext({ date });
    console.log("no subm")
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1>Bem-vindo</h1>
      <p>Selecione a data para o seu atendimento.</p>
      <Calendar
        mode="single"
        selected={date}
        onSelect={(value: Date) => setDate(value)}
        className="rounded-lg border"
        startMonth={today}  
        endMonth={nextMonth}
        disabled={[{ before: today }, new Date(2025, 7, 22)]}
        required
        fixedWeeks
      />

      <Button onClick={handleSubmit}>Próximo</Button>
    </div>
  );
};

export default DatePage;
