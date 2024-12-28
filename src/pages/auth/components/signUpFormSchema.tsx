import { z } from "zod";

export const SignUpFormSchema = z.object({
  firstName: z
    .string({ message: "O nome completo é obrigatório." })
    .min(3, "O nome completo deve ter no mínimo 3 caracteres.")
    .max(50, "O nome completo deve ter no máximo 50 caracteres."),
  lastName: z
    .string({ message: "O sobrenome é obrigatório." })
    .min(3, "O sobrenome deve ter no mínimo 3 caracteres.")
    .max(50, "O sobrenome deve ter no máximo 50 caracteres."),
  birthDate: z
    .string()
    .refine(
      (value) => !isNaN(Date.parse(value)),
      "A data de nascimento deve ser uma data válida no formato AAAA-MM-DD.",
    )
    .refine((value) => {
      const date = new Date(value);
      const today = new Date();
      return date <= today;
    }, "A data de nascimento não pode ser uma data futura."),
  gender: z.enum(["male", "fem"]).optional(),
  email: z
    .string({ message: "O email é obrigatório." })
    .email("O email deve ser válido."),
  username: z
    .string()
    .min(3, "O nome de usuário deve ter no mínimo 3 caracteres.")
    .max(20, "O nome de usuário deve ter no máximo 20 caracteres.")
    .optional(),
  password: z
    .string({ message: "A senha é obrigatória." })
    .min(6, "A senha deve ter no mínimo 6 caracteres.")
    .max(20, "A senha deve ter no máximo 20 caracteres."),
});

export type SignUpFormValues = z.infer<typeof SignUpFormSchema>;
