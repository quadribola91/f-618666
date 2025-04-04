
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Plus, Trash2, Edit } from "lucide-react";
import TodoNavbar from "@/components/TodoNavbar";

// Todo type definition
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
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

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem: Todo = {
      id: Date.now().toString(),
      title: newTodo.trim(),
      completed: false,
      createdAt: new Date()
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
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

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.title);
  };

  const saveEdit = (id: string) => {
    if (editText.trim() === "") return;

    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, title: editText.trim() } : todo
      )
    );
    setEditingId(null);
    setEditText("");
    toast({
      title: "Todo updated",
      description: "Your task has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <TodoNavbar />
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <Card className="shadow-lg border-t-4 border-t-hightodo-blue">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-hightodo-blue">
              HighTodo
            </CardTitle>
            <p className="text-muted-foreground italic">cultivating daily tasks</p>
          </CardHeader>
          <CardContent>
            {/* Add todo form */}
            <div className="flex gap-2 mb-6">
              <Input
                type="text"
                placeholder="Add a new task..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
                className="flex-grow"
              />
              <Button onClick={addTodo} className="bg-hightodo-blue hover:bg-blue-600">
                <Plus size={18} className="mr-1" /> Add
              </Button>
            </div>

            {/* Todo list */}
            <div className="space-y-3">
              {todos.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">
                  No tasks yet. Add some to get started!
                </div>
              ) : (
                todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-3 bg-white rounded-md shadow-sm border border-gray-100"
                  >
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
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
                            onClick={() => deleteTodo(todo.id)}
                            className="text-gray-500 hover:text-red-500"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                ))
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between text-sm text-muted-foreground">
            <div>Total tasks: {todos.length}</div>
            <div>Completed: {todos.filter(todo => todo.completed).length}</div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TodoApp;
