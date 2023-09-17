import { Checkbox } from "@/components/ui/checkbox";
import { useTodoStore } from "@/hooks/useTodoStore";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  id: string;
  title: string;
  isComleted: boolean;
}

const TodoItem = ({ id, title, isComleted }: TodoItemProps) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <div className="p-3 flex items-center gap-x-2 border-b last:border-b-0">
      <Checkbox
        id={id}
        checked={isComleted}
        onCheckedChange={() => toggleTodo(id)}
      />
      <label
        htmlFor={id}
        className={cn(
          "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          isComleted && "line-through text-black/20"
        )}
      >
        {title}
      </label>
    </div>
  );
};

export default TodoItem;
