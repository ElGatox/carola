import {
  Input as CInput,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function Area({ name, label, placeholder, ...props }) {
  const { register, formState } = useFormContext();
  const errors = formState.errors[name]?.message;

  return (
    <>
      <FormControl isInvalid={errors} position="relative">
        <FormLabel>{label}</FormLabel>
        <Textarea
          {...register(name)}
          isInvalid={errors}
          placeholder={placeholder}
          {...props}
        />
        {errors && <FormErrorMessage bot="0">{errors}</FormErrorMessage>}
      </FormControl>
    </>
  );
}
