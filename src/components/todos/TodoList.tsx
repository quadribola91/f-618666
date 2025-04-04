
import { Todo } from "@/types/todo";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}

export const TodoList = ({ todos, onToggle, onDelete, onUpdate }: TodoListProps) => {
  return (
    <div className="space-y-3">
      {todos.length === 0 ? (
        <div className="text-center py-6 text-muted-foreground">
          No tasks yet. Add some to get started!
        </div>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
    </div>
  );
};
