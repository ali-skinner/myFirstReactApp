import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';


// START OF THE APP FUNCTION
function App() {
  const [todos, setTodos] = useState([
    { id: random(), title: '', owner: '', completed: false, },
    { id: random(), title: '', owner: '', completed: false, },
    { id: random(), title: '', owner: '', completed: false, },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);


  // add props to pass data into components :)
  return (
    <>
      {/* <MyButton /> */}
      <TodoInputForm />
      {/* <OwnerSelect />
      <ShowCompleted />
      <ToDoList /> */}
    </>
  );
};
//END OF THE APP FUNCTION
function TodoInputForm() {
const [todoTitle, setTodoTitle] = useState('')
const [todoOwner, setTodoOwner] = useState('')


  const displayStyleTaskEntryBox = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    margin: '2rem',
    padding: '1.5rem',
    border: '3px solid rgb(206, 86, 196)',
    borderRadius: '12px',
  }

  return (
    <div style={displayStyleTaskEntryBox}>
      <label htmlFor='owner'>
        Task Owner:
        <input id='owner' onChange={(e) => setTodoOwner(e.target.value)} value={todoOwner}/>
      </label>

      <label htmlFor='todo'>
        Task:
        <input id='todo' onChange={(e) => setTodoTitle(e.target.value)} value={todoTitle}/>
      </label>

    </div>
  )
}


//Add todo funct -- NEEDS WORK -- Tanner has this in the App funct on initial draft
// const addTodo = () => {
//   if (todos.title !== '') {
//     setTodos([...todos,])
//   } return todos
// }

//Remove todo funct -- NEEDS WORK-- Tanner has this in the App funct on initial draft
// const removeTodo = () => {
//   if (todos.title !== '') {
//     setTodos([...todos,])
//   } return todos
// }

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



