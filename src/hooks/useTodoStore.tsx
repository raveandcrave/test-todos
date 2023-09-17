import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";

const defaultTodos: Todo[] = [
  {
    id: uuidv4(),
    isCompleted: false,
    title: "Тестовое задание",
  },
  {
    id: uuidv4(),
    isCompleted: true,
    title: "Прекрасный код",
  },
  {
    id: uuidv4(),
    isCompleted: false,
    title: "Покрытие тестами",
  },
];

export interface Todo {
  id: string;
  isCompleted: boolean;
  title: string;
}

type FilterType = "all" | "active" | "completed";

interface TodoStore {
  todos: Todo[];
  filter: FilterType;
  setFilter: (value: FilterType) => void;
  addTodo: (title: string) => void;
  toggleTodo: (todoId: string) => void;
  clearCompleted: () => void;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: defaultTodos,
  filter: "all",
  setFilter: (value) => set({ filter: value }),
  addTodo: (title) => {
    const newTodo: Todo = { id: uuidv4(), title, isCompleted: false };

    set({ todos: [...get().todos, newTodo] });
  },
  toggleTodo: (todoId) =>
    set({
      todos: get().todos.map((todo) =>
        todoId === todo.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }),
  clearCompleted: () => {
    set({ todos: get().todos.filter((todo) => !todo.isCompleted) });
  },
}));
