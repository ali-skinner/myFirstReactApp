import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';


//NOTES
//Filter completes > completes -> todos.filter(t => t.completed).length /incompletes-> todos.filter(t => !t.completed).length
//Filter Task Owners > (by checkboxes - who's taks should be visible/hidden)
//Delete task button > write da function
//Done button toggle > to add  class for grey/strike thru txt when completed/remove this styling if toggle off
//Edit tasks
//Search ba? search for what exactly
//App Heading


//Random for ID generation
const random = () => {
  return Math.floor(Math.random() * 1_000_000_000)
}

// START OF THE APP FUNCTION---------->
function App() {
  const [todos, setTodos] = useState([
    { id: random(), title: 'test1', owner: 'owner1', completed: false, },
    { id: random(), title: 'test2', owner: 'owner2', completed: false, },
    { id: random(), title: 'test3', owner: 'owner3', completed: false, },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);
  // console.log(todos)

  //will need to reorganize the todo array when want to reorder the tasks
  // add props to pass data into components :)
  return (
    <div className='App'>
      <TodoInputForm setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
      {/* <MyButton /> */}
      {/* <OwnerSelect /> */}
      {/* <ShowCompleted showCompleted={showCompleted} /> */}
    </div>
  );
};
//END OF THE APP FUNCTION------------>


//The Todo List
function ToDoList({ todos, setTodos }) {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const taskTextStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px',
    border: 'solid pink 1px',
    borderRadius: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  }

  const putMeInTheList =
    todos.map(todo =>
      <div key={todo.id} style={taskTextStyle} >
        <p style={{ margin: '5px', fontSize: '1.25rem',}}>{todo.owner} </p>
        <div>
          <p><b>Task:</b> {todo.title}</p> <div>Completed: {JSON.stringify(todo.completed)} </div>
        <div style={buttonStyle} >
          <button style={{
            backgroundColor: 'lightgreen',
            color: 'white',
            border: 'white solid 2px',
            borderRadius: '10px',
            margin: '20px',
          }}
            onClick={() => { toggleCompleted(todo.id) }}
          >✅ Mark it Done
          </button>

          <button style={{
            backgroundColor: 'rgb(199, 71, 184)',
            color: 'white',
            border: 'black solid 1px',
            borderRadius: '5px',
            margin: '12px',
          }}
            onClick={() => { TaskDeleted(todo.id) }}
          >
            Delete ⛔️
          </button>
          </div>
          
        </div>
      </div>
    )

  //Togge Task Completed
  function toggleCompleted(id) {
    console.log(id, todos);
    setTodos((pt: []) => {
      return pt.map((todo) => {
        console.log(todo.id)
        return id === todo.id ? {...todo, completed: !todo.completed} : todo;
      })
    })
  }

  const toDoListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 2px',
    margin: '2rem',
    padding: '2rem',
    borderRadius: '10px',
    gap: '1rem',
  }

  return (
    <div style={toDoListStyle}>
      <h2>Task List</h2>
      <div>
        {putMeInTheList}
      </div>
    </div>
  )
};

//Add Task/Owner fields 
function TodoInputForm({ setTodos }) {
  const [todoOwner, setTodoOwner] = useState('');
  const [todoTitle, setTodoTitle] = useState('');

  const displayStyleTaskEntryBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    margin: '2rem',
    padding: '1.5rem',
    border: '3px solid rgb(206, 86, 196)',
    borderRadius: '12px',
  }

  const addTodo = () => {
    //  { if (todoTitle !== '' && todoOwner !== '') }
    console.log({ todoOwner, todoTitle })
    setTodos((previousTodos: []) => {
      return [...previousTodos, { id: random(), owner: todoOwner, title: todoTitle, completed: false }]
    })
    setTodoOwner('');
    setTodoTitle('');
  }

  return (
    <div style={displayStyleTaskEntryBox}>
      <label htmlFor='owner'>
        Task Owner:
        <input id='owner' onChange={(e) => setTodoOwner(e.target.value)} value={todoOwner} />
      </label>

      <label htmlFor='todo'>
        Task:
        <input id='todo' onChange={(e) => setTodoTitle(e.target.value)} value={todoTitle} />
      </label>

      <button style={{ backgroundColor: 'pink', color: 'rgb(207, 15, 204)', width: '12rem'}} onClick={addTodo}>
        Add Task
      </button>

    </div>
  )
};


 
//EXPORT
export default App


//DRAFT CODE to be deleted later----------->

// function Timer() {
//   const [remainingTime, setRemainingTime] = useState(21)


// }

// function Users() {
//   const theUsers = [
//     { name: "Judy", age: 45, hobbies: [" coding", " reading", " doing stuff"] },
//     { name: "Maude", age: 5, hobbies: ["nothing", " everything", " something"] },
//     { name: "Calvin", age: 20, hobbies: ["clothes", "journaling", "painting"] },
//     { name: "Friend", age: 38, hobbies: ["traveling", "walking", "sleeping"] },
//   ]

//   return (
//     <div>
//       {theUsers.map((user) => {
//         return (
//           <div style={{ width: "50vw", height: "15vw", border: "solid 20px pink" }}>
//             <h2>{user.name}</h2>
//             <h4>age: {user.age}</h4>
//             {user.hobbies.map((hobby) => {
//               return (
//                 <span>{hobby}</span>
//               )
//             })}
//           </div>
//         )
//       }

//       )}
//     </div>
//   )
// }

// function Randomness() {
//   const randomStuff = 

//   return (
//     {Math.floor(Math.random()* 500)}
//   )
// }



