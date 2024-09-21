import { z } from "zod";

export const textSchema = z
  .string()
  .min(4, "Значение не должно быть короче 4-х символов")
  .max(30, "Значение не должно быть длиннее 30 символов")
  .regex(/^[-а-яА-ЯёЁa-zA-Z\s]+$/, "Значение должно содержать только буквы")
  .trim();

export const formSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^\d{4} \d{4} \d{4} \d{4}$/, "Проверьте корректность номера карты")
    .trim(),
  fullName: textSchema,
  date: z
    .string()
    .min(5, "Проверьте корректность даты")
    .regex(
      /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])$/,
      "Введите корректную дату",
    ),
  cvc: z.string().min(3, "Проверьте корректность CVC"),
});

export type FormFields = z.infer<typeof formSchema>;
