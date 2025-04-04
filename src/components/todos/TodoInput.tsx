
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface TodoInputProps {
  onAddTodo: (title: string) => void;
}

export const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    onAddTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="flex gap-2 mb-6">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        className="flex-grow"
      />
      <Button onClick={handleAddTodo} className="bg-hightodo-blue hover:bg-blue-600">
        <Plus size={18} className="mr-1" /> Add
      </Button>
    </div>
  );
};
