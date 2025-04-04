
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Todo } from "@/types/todo";
import { Trash2, Edit } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const startEditing = (todoItem: Todo) => {
    setEditingId(todoItem.id);
    setEditText(todoItem.title);
  };

  const saveEdit = (id: string) => {
    onUpdate(id, editText);
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-md shadow-sm border border-gray-100">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="border-hightodo-green"
      />
      {editingId === todo.id ? (
        <div className="flex flex-grow gap-2">
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveEdit(todo.id)}
            autoFocus
            className="flex-grow"
          />
          <Button size="sm" onClick={() => saveEdit(todo.id)}>
            Save
          </Button>
        </div>
      ) : (
        <>
          <span
            className={`flex-grow ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.title}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => startEditing(todo)}
              className="text-gray-500 hover:text-hightodo-blue"
            >
              <Edit size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(todo.id)}
              className="text-gray-500 hover:text-red-500"
            >
              <Trash2 size={16} />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
