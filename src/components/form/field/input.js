"use client";
import {
  Input as CInput,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function Input({ name, label, placeholder, ...props }) {
  const { register, formState } = useFormContext();
  const errors = formState.errors[name]?.message;
  return (
    <FormControl isInvalid={errors} position="relative">
      <FormLabel>{label}</FormLabel>
      <CInput
        {...register(name)}
        isInvalid={!!errors}
        placeholder={placeholder}
        {...props}
      />
      {errors && <FormErrorMessage>{errors}</FormErrorMessage>}
    </FormControl>
  );
}
