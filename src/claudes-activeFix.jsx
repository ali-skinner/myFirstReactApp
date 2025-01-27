
//THIS IS CLAUDE"S

import { useState } from 'react';
import { Trash2, RotateCcw, CheckSquare } from 'lucide-react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Master TypeScript', completed: true }
  ]);

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Active Tasks</h2>
      <ul className="space-y-2">
        {activeTodos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between p-3 bg-white rounded shadow">
            <span>{todo.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => toggleComplete(todo.id)}
                className="p-1 hover:text-green-600"
              >
                <CheckSquare size={20} />
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-1 hover:text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {completedTodos.length > 0 && (
        <>
          <h2 className="text-xl font-bold mt-8 mb-4">Completed Tasks</h2>
          <ul className="space-y-2">
            {completedTodos.map(todo => (
              <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded shadow">
                <span className="line-through text-gray-500">{todo.text}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className="p-1 hover:text-blue-600"
                  >
                    <RotateCcw size={20} />
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="p-1 hover:text-red-600"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TodoList;