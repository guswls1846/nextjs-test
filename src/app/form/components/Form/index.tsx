"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import tw from "twin.macro";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z.string().min(10),
  gender: z.string().nonempty({ message: "Gender is required" }),
});

type FormSchema = z.infer<typeof schema>;

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => console.log(data);

  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)}>
      <Label>First Name</Label>
      <Input {...register("firstName")} />
      {errors.firstName?.message && (
        <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
      )}

      <Label>Gender Selection</Label>
      <Select {...register("gender")}>
        <option value="">Select...</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </Select>
      {errors.gender?.message && (
        <ErrorMessage>{errors.gender?.message}</ErrorMessage>
      )}

      <Input type="submit" />
    </FormWrap>
  );
}

const FormWrap = tw.form`flex flex-col gap-4`;
const Label = tw.label`text-xl`;
const Input = tw.input`border border-gray-400 rounded-md p-2 text-black`;
const Select = tw.select`border border-gray-400 rounded-md p-2 text-black`;
const ErrorMessage = tw.p`text-red-500`;
