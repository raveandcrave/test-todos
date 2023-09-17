import { Button } from "@/components/ui/button";
import { useTodoStore } from "@/hooks/useTodoStore";
import { cn } from "@/lib/utils";

const TodoActions = () => {
  const clearCompleted = useTodoStore((state) => state.clearCompleted);
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);
  const activeCount = useTodoStore(
    (state) => state.todos.filter((todo) => !todo.isCompleted).length
  );

  return (
    <div className="flex justify-between items-center p-3 border-t">
      <p className="text-sm">{activeCount} items left</p>
      <div className="flex gap-x-2">
        <Button
          data-testid="filterAllButton"
          variant="secondary"
          onClick={() => setFilter("all")}
          className={cn("text-sm border-black", {
            border: filter === "all",
          })}
        >
          All
        </Button>
        <Button
          data-testid="filterActiveButton"
          variant="secondary"
          onClick={() => setFilter("active")}
          className={cn("text-sm border-black", {
            border: filter === "active",
          })}
        >
          Active
        </Button>
        <Button
          data-testid="filterCompletedButton"
          variant="secondary"
          onClick={() => setFilter("completed")}
          className={cn("text-sm border-black", {
            border: filter === "completed",
          })}
        >
          Completed
        </Button>
      </div>
      <Button
        data-testid="clearCompletedButton"
        className="text-sm"
        variant="ghost"
        onClick={clearCompleted}
      >
        Clear completed
      </Button>
    </div>
  );
};

export default TodoActions;
