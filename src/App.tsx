import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';


const random = () => {
  return Math.floor(Math.random() * 1_000_000_000)
}

function App() {
  const [todos, setTodos] = useState([
    { id: random(), title: '', owner: '', completed: false, },
    { id: random(), title: '', owner: '', completed: false, },
    { id: random(), title: '', owner: '', completed: false, },
  ])
  const [showCompleted, setShowCompleted] = useState(true)

}
// add props to pass data into components :)
return (
  <>
    <TodoInputForm /> 
    <OwnerSelect />
    <ShowCompleted />
    <ToDoList />
  </>
)


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


export default App
