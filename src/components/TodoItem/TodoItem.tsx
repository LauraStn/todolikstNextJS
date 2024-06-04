import { propItem, setTodos, todoType } from "@/Utils/types";
import classNames from "classnames";
import PreviousMap from "postcss/lib/previous-map";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import Todolist from "../Todolist/Todolist";

type Props = {
  todo: todoType;
  setTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
};
const TodoItem = ({ id, title, date, checked, setTodos }: propItem) => {
  return (
    <li className="py-4">
      <div className="flex justify-between items-center">
        <input
          id={`todo-${id}`}
          name={`todo-${id}`}
          type="checkbox"
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          onChange={(e) => {
            setTodos((prevTodos) => {
              return prevTodos.map((todo) => {
                if (todo.id === id) {
                  return { ...todo, checked: e.target.checked };
                }
                return todo;
              });
            });
          }}
        />
        <label
          htmlFor={`todo-${id}`}
          className="ml-3 flex flex-col items-center text-gray-900"
        >
          <span
            className={classNames("text-lg font-medium", {
              "line-through": checked,
            })}
          >
            {title}
          </span>
          <span className="text-sm font-light text-gray-500">On {date}</span>
        </label>
        <button
          onClick={(e) =>
            setTodos((todos) => todos.filter((todo) => todo.id !== id))
          }
        >
          {""}

          <FaTrashAlt className="text-black cursor-pointer" />
        </button>
      </div>
    </li>
  );
};
// const TodoItem = (props: Props) => {
//   const [array, setArray] = useState([props.todo]);

//   return (
//     <li className="py-4">
//       <div className="flex justify-between items-center">
//         <input
//           id={`todo-${props.todo.id}`}
//           name={`todo-${props.todo.id}`}
//           type="checkbox"
//           className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
//           key={props.todo.id}
//           // onChange={() => {
//           //   props.setTodos([{ ...props.todo, checked: !props.todo.checked }]);
//           // }}
//         />
//         <label
//           htmlFor={`todo-${props.todo.id}`}
//           className="ml-3 flex flex-col items-center text-gray-900"
//         >
//           <span
//             className={classNames("text-lg font-medium", {
//               "line-through": props.todo.checked,
//             })}
//           >
//             {props.todo.title}
//           </span>
//           <span className="text-sm font-light text-gray-500">
//             On {props.todo.date}
//           </span>
//         </label>
//         <button
//         // onClick={() => {
//         //   setArray(array.filter((todo) => todo.id !== props.todo.id));
//         // }}
//         >
//           <FaTrashAlt className="text-black cursor-pointer" />
//         </button>
//       </div>
//     </li>
//   );
// };

export default TodoItem;
