import React, { useRef, useState } from "react";
import { setTodos, todoType } from "@/Utils/types";

export type propstype = { setTodos: todoType[] };

const FormData = ({ setTodos }: setTodos) => {
  const [value, setValue] = useState<string>("");
  const input = useRef<HTMLInputElement>(null);

  return (
    <form className="w-full max-w-sm mx-auto px-4 py-2">
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          ref={input}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Add a task"
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setTodos((todos: todoType[]) => {
              return [
                ...todos,
                {
                  id: new Date().getTime(),
                  title: value,
                  checked: false,
                  date: new Date().toDateString(),
                },
              ];
            });
            setValue("");
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default FormData;
