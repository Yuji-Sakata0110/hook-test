import React from "react";
import { TextField } from "@material-ui/core";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface FormData {
  title: string;
  completed: boolean;
}

const Test: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  /*フォームバリデーションを通過した場合、実行する処理を書く*/
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("submit", data);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      {/* <Controller name="title" /> */}
      <TextField />
    </div>
  );
};

export default Test;
