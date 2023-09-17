import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoActions from "@/components/TodoActions";

const Todos = () => {
  return (
    <div className="flex flex-col w-4/12">
      <h1 className="text-center text-8xl mb-2">todos</h1>
      <div className=" bg-white shadow">
        <TodoInput />
        <TodoList />
        <TodoActions />
      </div>
    </div>
  );
};

export default Todos;
