import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { InputType } from "../../../shared/types.ts";

const TextInput: FC<InputType> = ({ name, placeholder, className }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <input
            name={field.name}
            onChange={field.onChange}
            className={error ? "errorInput" : className}
            placeholder={placeholder}
            required
            type="text"
          />
          {error && <div className="errorMessage">{error.message}</div>}
        </>
      )}
    />
  );
};

export default TextInput;
