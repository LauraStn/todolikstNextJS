"use client";
import { todoType } from "@/Utils/types";
import FormData from "@/components/FormData/Formdata";
import Headeer from "@/components/Headeer";
import Todolist from "@/components/Todolist/Todolist";
import { SetStateAction, useState } from "react";

const Todoliste = () => {
  const [todos, setTodos] = useState<todoType[]>([]);
  console.log(todos);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <Headeer title={"Todo List"} />
      <FormData setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todoliste;
