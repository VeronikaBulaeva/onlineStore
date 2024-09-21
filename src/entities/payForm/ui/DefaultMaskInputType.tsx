import { FC, forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DefaultMaskInputType, InputType } from "../../../shared/types.ts";
import { IMaskInput } from "react-imask";

interface CardMaskProps extends InputType {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  mask: string;
}

const DefaultMaskInput: FC<DefaultMaskInputType> = ({
  name,
  placeholder,
  className,
  mask,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="payForm">
          <InputMask
            name={field.name}
            onChange={field.onChange}
            className={error ? "errorInput" : className}
            placeholder={placeholder}
            mask={mask}
            required
          />
          {error && <div className="errorMessage">{error.message}</div>}
        </div>
      )}
    />
  );
};

export default DefaultMaskInput;

const InputMask = forwardRef<HTMLInputElement, CardMaskProps>((props, ref) => {
  const { onChange, ...other } = props;

  return (
    <IMaskInput
      {...other}
      mask={props.mask}
      required
      inputRef={ref}
      onAccept={(value: string) =>
        onChange({ target: { name: props.name, value } })
      }
      overwrite
    />
  );
});
