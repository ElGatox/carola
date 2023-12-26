"use client";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Form({ children, onSubmit, schema, ...props }) {
  const methods = useForm({ resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
}
