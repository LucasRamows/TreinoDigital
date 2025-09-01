import { useOutletContext } from "react-router-dom";
import { Separator } from "../../components/ui/separator";
import type { UserType } from "../../validation/types/gettingBackDataType";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import formatPhone from "../../validation/modules/formatPhone";
import api from "../../services/databaseApi";
import { toast } from "sonner";
import { Toaster } from "../../components/ui/sonner";

const ProfileUser = () => {
  const data = useOutletContext<UserType | null>();

  // estados locais para edição
  const [formData, setFormData] = useState({
    id: data?.id,
    name: data?.name || "",
    birthDay: data?.birthDay || "",
    phone: data?.phone || "",
    email: data?.email || "",
  });

  const [update, setUpdate] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setUpdate(true);
  };

  const handleSubmit = async () => {
    try {
      const res = await api.put("/update-user", formData);
      setUpdate(false);
      toast.success("Atualizações salvas!", {
            description: "Essa pagina será recarregada em 5 segundos.",
          })
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
    }
  };
  return (
    <div className="w-full flex flex-col px-10 gap-5">
      <div className="flex flex-1 w-full gap-5 items-center">
        <img
          src="assets/background.jpeg"
          className="w-15 h-15 rounded-full"
          alt="foto de perfil"
        />
        <div>
          <h1>{data?.name}</h1>
          <p>{data?.workoutType}</p>
        </div>
      </div>

      <Separator />

      <div className="w-full flex flex-1 flex-col gap-3">
        <div className="w-full">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-semibold">Dados Pessoais</h1>
            <Button
              variant={update ? "default" : "outline"}
              disabled={!update}
              onClick={handleSubmit}
            >
              {update ? "Salvar" : "Editar"}
            </Button>
          </div>

          <div className="px-4 grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <Label>Nome</Label>
              <Input
                value={formData.name}
                type="text"
                className="shad-input"
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Data de Nascimento</Label>
              <Input
                value={formData.birthDay}
                type="text"
                className="shad-input"
                onChange={(e) => handleChange("birthDay", e.target.value)}
                maxLength={15}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Contato</Label>
              <Input
                value={formatPhone(formData.phone)}
                type="text"
                className="shad-input"
                onChange={(e) =>
                  handleChange(
                    "phone",
                    e.target.value.replace(/\D/g, "").trim()
                  )
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input
                value={formData.email}
                type="text"
                className="shad-input"
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
