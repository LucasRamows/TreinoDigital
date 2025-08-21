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

export { loginForm, clientData };
