import * as z from "zod";
const loginForm = z.object({
  email: z
    .string()
    .min(2, { message: "Este campo não pode ficar vazio" })
    .max(50),
  key: z
    .string()
    .min(6, { message: "Precisa ter ao menos 6 digitos." })
    .max(8, { message: "Precisa ter no max. 8 digitos." }),
});
const signForm = z.object({
  email: z
    .string()
    .min(2, { message: "Este campo não pode ficar vazio" })
    .max(50),
  key: z
    .string()
    .min(6, { message: "Precisa ter ao menos 6 digitos." })
    .max(8, { message: "Precisa ter no max. 8 digitos." }),
  confirmKey: z.string().min(6, { message: "Confirme sua senha." }),
  fullName: z
    .string()
    .min(2, { message: "Digite seu nome completo." })
    .max(100),
  birthDate: z.string().min(1, {
    message: "Insira uma data",
  }),
  gender: z.enum(["masculino", "feminino", "outro"]),
  height: z
    .string({ message: "Altura deve ser numérica." })
    .min(2, { message: "Altura inválida (mín. 100 cm)." })
    .max(2, { message: "Altura inválida (máx. 250 cm)." }),
  weight: z
    .string({ message: "Peso deve ser numérico." })
    .min(2, { message: "Peso inválido (mín. 30 kg)." })
    .max(3, { message: "Peso inválido (máx. 300 kg)." }),
  activityLevel: z.enum([
    "sedentario",
    "moderado",
    "atleta",
  ]),
  phone: z.string(),
});

const clientData = z.object({
  name: z
    .string()
    .min(2, { message: "Este campo não pode ficar vazio" })
    .max(50),
  phone: z
    .string()
    .min(6, { message: "Precisa ter ao menos 6 digitos." })
    .max(8, { message: "Precisa ter no max. 8 digitos." }),
});

export { loginForm, clientData, signForm };
