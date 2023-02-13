import React from "react";
import { TextField } from "@material-ui/core";
import { useForm, SubmitHandler } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import "./App.css";
import Test from "./components/Test";
import { title } from "process";

/* 型定義する */
interface FormData {
  title: string;
  completed: boolean;
}

const validationRule = {
  required: "必須項目です。",
  maxLength: { value: 30, message: "30文字以内で入力してください。" },
};

const App: React.FC = () => {
  /* form Constrollers */
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  /* フェッチしたデータsetValueに保存する。*/
  const fetchedData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setValue("title", json.title);
        setValue("completed", json.completed);
      });
  };
  React.useEffect(() => {
    fetchedData();
  }, []);

  /*フォームバリデーションを通過した場合、実行する処理を書く*/
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("submit", data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            type="text"
            {...register("title", validationRule)}
            helperText={errors.title && errors.title.message}
          />
        </div>
        <div>
          <input type="checkbox" {...register("completed")} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Test />
    </div>
  );
};

export default App;
