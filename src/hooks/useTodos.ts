
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Todo } from "@/types/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { toast } = useToast();

  // Load todos from local storage on initial render
  useEffect(() => {
    const savedTodos = localStorage.getItem("hightodo-todos");
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        setTodos(parsedTodos.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        })));
      } catch (e) {
        console.error("Failed to parse todos from localStorage", e);
      }
    }
  }, []);

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("hightodo-todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    if (title.trim() === "") return;

    const newTodoItem: Todo = {
      id: Date.now().toString(),
      title: title.trim(),
      completed: false,
      createdAt: new Date()
    };

    setTodos([...todos, newTodoItem]);
    toast({
      title: "Todo added",
      description: "Your task has been added successfully.",
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast({
      title: "Todo deleted",
      description: "Your task has been deleted successfully.",
    });
  };

  const updateTodoTitle = (id: string, title: string) => {
    if (title.trim() === "") return;

    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, title: title.trim() } : todo
      )
    );
    toast({
      title: "Todo updated",
      description: "Your task has been updated successfully.",
    });
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodoTitle
  };
};
