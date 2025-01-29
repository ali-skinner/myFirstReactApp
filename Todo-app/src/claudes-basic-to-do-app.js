
//Claude's basic To Do App

import React, { useState } from 'react';
import { Trash2, CheckCircle } from 'lucide-react';

const TodoApp = () => {
  // State for input fields
  const [userName, setUserName] = useState('');
  const [taskText, setTaskText] = useState('');
  
  // State for list of todos
  const [todos, setTodos] = useState([]);

  // Add new todo
  const handleAddTodo = () => {
    if (userName.trim() && taskText.trim()) {
      const newTodo = {
        id: Date.now(),
        user: userName.trim(),
        task: taskText.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      // Clear input fields
      setTaskText('');
    }
  };

  // Delete todo
  const handleDelete = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  // Toggle completion status
  const handleToggleComplete = (todoId) => {
    setTodos(todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Multi-User Todo List</h1>
      
      {/* Input Section */}
      <div className="space-y-4 mb-6">
        <div>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter user name"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter task"
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>
      </div>

      {/* Todo List */}
      <div className="space-y-2">
        {todos.map(todo => (
          <div 
            key={todo.id}
            className="flex items-center justify-between p-3 border rounded"
          >
            <div className="flex-1">
              <p className="font-medium">{todo.user}</p>
              <p className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.task}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggleComplete(todo.id)}
                className={`p-1 rounded hover:bg-gray-100 ${
                  todo.completed ? 'text-green-500' : 'text-gray-400'
                }`}
              >
                <CheckCircle size={20} />
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="p-1 text-red-500 rounded hover:bg-gray-100"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;