
import { Todo } from "@/types/todo";

interface TodoStatsProps {
  todos: Todo[];
}

export const TodoStats = ({ todos }: TodoStatsProps) => {
  return (
    <div className="flex justify-between text-sm text-muted-foreground">
      <div>Total tasks: {todos.length}</div>
      <div>Completed: {todos.filter(todo => todo.completed).length}</div>
    </div>
  );
};
