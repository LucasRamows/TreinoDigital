import { useState } from "react";
import DatePage from "./start/DatePage";
import TimePage from "./start/TimePage";
import ServicePage from "./start/ServicePage";
import InfoPage from "./start/InfoPage";
import ConfirmationPage from "./start/ConfirmationPage";
import SuccessPopUp from "../components/shared/SuccessPopUp";
import ErrorPopUp from "../components/shared/ErrorPopUp";

export default function MainLayout() {
  const [currentStep, setCurrentStep] = useState(0);
  const [wizardData, setWizardData] = useState<any>({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleNext = (stepData?: any) => {
    if (stepData) {
      setWizardData((prev: any) => ({ ...prev, ...stepData }));
    }
    setCurrentStep((prev) => prev + 1);
  };
  const handleBack = (state: boolean) => {
    if (state) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const steps = [
    { id: 1, component: (props: any) => <DatePage {...props} /> },
    { id: 2, component: (props: any) => <TimePage {...props} /> },
    { id: 3, component: (props: any) => <ServicePage {...props} /> },
    { id: 4, component: (props: any) => <InfoPage {...props} /> },
    { id: 5, component: (props: any) => <ConfirmationPage {...props} /> },
  ];

  if (currentStep >= steps.length) {
    return (
      <div>
        Obrigado! Seus dados:
        <pre>{JSON.stringify(wizardData, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col p-4 items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/background.jpeg)" }}
    >
      <SuccessPopUp success={success} />
      <ErrorPopUp error={error} />

      <div className="w-[80%] my-auto h-full py-10 rounded-2xl bg-background flex flex-col items-center justify-center md:w-1/2">
        <div className="w-full px-5 transition-all duration-500">
          {steps[currentStep].component({
            onNext: handleNext,
            data: wizardData,
            onPrevious: handleBack,
          })}
        </div>
      </div>
    </div>
  );
}
