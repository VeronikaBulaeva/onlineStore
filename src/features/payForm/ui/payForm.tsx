import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormFields, formSchema } from "../lib/Schemas.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import DefaultMaskInput from "../../../entities/payForm/ui/DefaultMaskInputType.tsx";
import TextInput from "../../../entities/payForm/ui/TextInput.tsx";

const defaultValues = {
  cardNumber: "",
  fullName: "",
  date: "",
  cvc: "",
};

interface PayFormType {
  onSubmit(): void;

  totalCost: number;
}

const PayForm: FC<PayFormType> = ({ onSubmit, totalCost }) => {
  const methods = useForm<FormFields>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="payForm"
          name="payForm"
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <DefaultMaskInput
            name="cardNumber"
            required
            className="payFormInput"
            placeholder="Номер карты"
            mask="0000 0000 0000 0000"
          />
          <TextInput
            name="fullName"
            required
            placeholder="Имя на карте"
            className="payFormInput uppercase"
          />
          <div className="payFormBottom">
            <DefaultMaskInput
              name="date"
              required
              className="payFormInput"
              placeholder="MM/YY"
              mask="00/00"
            />
            <DefaultMaskInput
              name="cvc"
              required
              className="payFormInput"
              placeholder="CVC"
              mask="000"
            />
          </div>
          <button type="submit" className="payFormButton totalCostButton">
            Оплатить {totalCost.toLocaleString()} ₽
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default PayForm;
