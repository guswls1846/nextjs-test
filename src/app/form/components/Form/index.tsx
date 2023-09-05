"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import tw from "twin.macro";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface FormInput {
  firstName: string;
  gender: GenderEnum;
}

export function Form() {
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <FormWrap onSubmit={handleSubmit(onSubmit)}>
      <Label>First Name</Label>
      <Input {...register("firstName")} />
      <Label>Gender Selection</Label>
      <Select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </Select>
      <Input type="submit" />
    </FormWrap>
  );
}

const FormWrap = tw.form`flex flex-col gap-4`;
const Label = tw.label`text-xl`;
const Input = tw.input`border border-gray-400 rounded-md p-2 text-black`;
const Select = tw.select`border border-gray-400 rounded-md p-2 text-black`;
