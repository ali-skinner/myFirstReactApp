const TodoApp = () => {
  // ... state and handlers remain the same

  return (
    <div className="container">
      <h1 className="title">Multi-User Todo List</h1>
      
      <div className="input-section">
        <div className="input-group">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter user name"
            className="text-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter task"
            className="text-input"
          />
          <button onClick={handleAddTodo} className="add-button">
            Add Todo
          </button>
        </div>
      </div>

      <div>
        {todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <div className="todo-info">
              <p className="user-name">{todo.user}</p>
              <p className={todo.completed ? 'completed-task' : ''}>
                {todo.task}
              </p>
            </div>
            <div className="button-group">
              <button
                onClick={() => handleToggleComplete(todo.id)}
                className={`icon-button complete-button ${todo.completed ? 'completed' : ''}`}
              >
                <CheckCircle size={20} />
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="icon-button delete-button"
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










const TodoApp = () => {
  // ... state and handlers remain the same

  return (
    <div className="container">
      <h1 className="title">Multi-User Todo List</h1>
      
      <div className="input-section">
        <div className="input-group">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter user name"
            className="text-input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter task"
            className="text-input"
          />
          <button onClick={handleAddTodo} className="add-button">
            Add Todo
          </button>
        </div>
      </div>

      <div>
        {todos.map(todo => (
          <div key={todo.id} className="todo-item">
            <div className="todo-info">
              <p className="user-name">{todo.user}</p>
              <p className={todo.completed ? 'completed-task' : ''}>
                {todo.task}
              </p>
            </div>
            <div className="button-group">
              <button
                onClick={() => handleToggleComplete(todo.id)}
                className={`icon-button complete-button ${todo.completed ? 'completed' : ''}`}
              >
                <CheckCircle size={20} />
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="icon-button delete-button"
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


.container {
    max-width: 42rem; /* max-w-2xl */
    margin: 0 auto;   /* mx-auto */
    padding: 1.5rem;  /* p-6 */
  }
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  .input-section {
    margin-bottom: 1.5rem;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .text-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  
  .add-button {
    padding: 0.5rem 1rem;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 0.25rem;
  }
  
  .add-button:hover {
    background-color: #2563eb;
  }
  
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
  }
  
  .todo-info {
    flex: 1;
  }
  
  .user-name {
    font-weight: 500;
  }
  
  .completed-task {
    text-decoration: line-through;
    color: #6b7280;
  }
  
  .button-group {
    display: flex;
    gap: 0.5rem;
  }
  
  .icon-button {
    padding: 0.25rem;
    border: none;
    border-radius: 0.25rem;
  }
  
  .icon-button:hover {
    background-color: #f3f4f6;
  }
  
  .complete-button {
    color: #9ca3af;
  }
  
  .complete-button.completed {
    color: #22c55e;
  }
  
  .delete-button {
    color: #ef4444;
  }