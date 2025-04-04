
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import TodoNavbar from "@/components/TodoNavbar";
import { TodoInput } from "@/components/todos/TodoInput";
import { TodoList } from "@/components/todos/TodoList";
import { TodoStats } from "@/components/todos/TodoStats";
import { useTodos } from "@/hooks/useTodos";

const TodoApp = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodoTitle } = useTodos();

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
            <TodoInput onAddTodo={addTodo} />
            <TodoList 
              todos={todos} 
              onToggle={toggleTodo} 
              onDelete={deleteTodo} 
              onUpdate={updateTodoTitle} 
            />
          </CardContent>
          <CardFooter>
            <TodoStats todos={todos} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TodoApp;
