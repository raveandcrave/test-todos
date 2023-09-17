import { Plus } from "lucide-react";
import { useState, KeyboardEvent } from "react";

import { Input } from "@/components/ui/input";
import { useTodoStore } from "@/hooks/useTodoStore";

const TodoInput = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [value, setValue] = useState("");

  const addNewTodo = () => {
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addNewTodo();
    }
  };

  return (
    <div className="flex items-center gap-2 p-2">
      <Input
        placeholder="Add new todo"
        className="rounded-none"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyDown={onKeyDown}
      />
      <button
        data-testid="addButton"
        onClick={addNewTodo}
        className="bg-[#F5F5F5] flex items-center justify-center rounded-full p-1 h-6 w-6"
      >
        <Plus className="text-black" />
      </button>
    </div>
  );
};

export default TodoInput;
