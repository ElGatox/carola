"use client";
import {
  Radio as CRadio,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
export default function Radio({
  options,
  label,
  name,
  defaultValue,
  stackDirection = "row",
  stackSpacing = "5",
  ...props
}) {
  const { register, formState } = useFormContext();
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup defaultValue={defaultValue} {...props}>
        <Stack spacing={stackSpacing} direction={stackDirection}>
          {options.map((option, i) => (
            <CRadio value={option} {...register(name)} key={i}>
              {option}
            </CRadio>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
}
