import { useTodoStore } from "@/hooks/useTodoStore";
import TodoItem from "@/components/TodoItem";

const TodoList = () => {
  const filter = useTodoStore((state) => state.filter);
  const todos = useTodoStore((state) => {
    switch (filter) {
      case "completed": {
        return state.todos.filter((todo) => todo.isCompleted);
      }
      case "active": {
        return state.todos.filter((todo) => !todo.isCompleted);
      }
      default: {
        return state.todos;
      }
    }
  });

  if (!todos?.length) {
    return <p className="p-3 font-medium">Todos not found</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          isComleted={todo.isCompleted}
          title={todo.title}
        />
      ))}
    </div>
  );
};

export default TodoList;
