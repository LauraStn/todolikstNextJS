import React from "react";
import { setTodos, todoType } from "@/Utils/types";
import TodoItem from "../TodoItem/TodoItem";

export type propsType = {
  todos: todoType[];
  setTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
};

const Todolist = ({ todos, setTodos }: propsType) => {
  return (
    <ul className="divide-y divide-gray-200 px-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default Todolist;
