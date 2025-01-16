import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';


// START OF THE APP FUNCTION
function App() {
  const [todos, setTodos] = useState([
    { id: random(), title: 'test1', owner: '', completed: false, },
    { id: random(), title: 'test2', owner: '', completed: false, },
    { id: random(), title: 'test3', owner: '', completed: false, },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);
console.log(todos)

  // add props to pass data into components :)
  return (
    <div className='App'>
      <TodoInputForm setTodos={setTodos} />
      <ToDoList todos={todos} />
      {/* <MyButton /> */}
      {/* <OwnerSelect /> */}
      {/* <ShowCompleted showCompleted={showCompleted} /> */}
    </div>
  );
};
//END OF THE APP FUNCTION


//Add todo funct -- NEEDS WORK
// function addTodo({ todos, setTodos, todoTitle, setTodoTitle, todoOwner }) {
//   if (todoTitle !== '' && todoOwner !== '') {
//     const newTodo = {
//       id: random(),
//       title: todoTitle,
//       owner: todoOwner,
//       completed: false,
//     };
//     setTodos([...todos, newTodo]);
//     setTodoTitle('');
//   }
// };


//The Todo List
function ToDoList({ todos }) {
  const putMeInTheList =
    todos.map(todo =>
      <div key={todo.id}>
        <p>{todo.owner}</p>
        <p>{todo.title}</p>
      </div>
    )

  const toDoListStyle = {
    display: 'flex',
    flexDirection: 'column',
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


//Input fields
function TodoInputForm({ setTodos }) {
  const [todoOwner, setTodoOwner] = useState('')
  const [todoTitle, setTodoTitle] = useState('')

  const displayStyleTaskEntryBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    margin: '2rem',
    padding: '1.5rem',
    border: '3px solid rgb(206, 86, 196)',
    borderRadius: '12px',
  }


  const addTodo = () => {
    setTodoOwner('')
    setTodoTitle('')
    setTodos((previousTodos: []) => {
      return [...previousTodos, { id: random(), owner: todoOwner, title: todoTitle, completed: false }]

    })
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

      <button style={{ backgroundColor: 'pink', color: 'rgb(207, 15, 204)' }} onClick={addTodo}>
        Add ME
        {/* need to call a function and on change event or on click to add todo to the todo list*/}
      </button>

    </div>
  )
};






//MAKE A BUTTON
//completyes can be calc by todos.filter(t => t.completed).length
//incompletes can be calc by todos.filter(t => !t.completed).length
//takes a totdo list and maps and looks for a speciic totdo, makrs it completed

// function MyButton() {
//   const

//   return (
//     <>
//       <button style={{
//         backgroundColor: 'orange',
//         color: 'white',
//         border: 'black solid 3px',
//         borderRadius: '5px',
//       }}
//         onClick={() => { addTodo }}
//       >
//         Add to the list
//       </button>
//     </>
//   )
// }

//Random for ID generation
const random = () => {
  return Math.floor(Math.random() * 1_000_000_000)
}


export default App

//DRAFT CODE to be deleted later
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



