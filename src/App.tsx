import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';


//NOTES

//Filter Task Owners > (by checkboxes - who's taks should be visible/hidden)
//Edit tasks
//Search bar? search for what exactly
//5. user dropdown - show taks assigned to selected user
//4. useEffect
//3. useContext (is this the right terminology?)
// 1. most recent created todo shows first in the list
// 2. DONE todos got to a 'done card'; go back in the List when 'Restored'
// 2a. Filter completes > completes -> todos.filter(t => t.completed).length /incompletes-> todos.filter(t => !t.completed).length



//Random for ID generation
const random = () => {
  return Math.floor(Math.random() * 1_000_000_000)
}

// START OF THE APP FUNCTION---------->
function App() {
  const [todos, setTodos] = useState([
    { id: random(), title: 'task1', owner: 'owner1', completed: false, },
    { id: random(), title: 'task2', owner: 'owner2', completed: false, },
    { id: random(), title: 'task3', owner: 'owner1', completed: false, },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);
  // console.log(todos)

  //will need to reorganize the todo array when want to reorder the tasks
  // add props to pass data into components :)
  return (
    <div className='App'>
      <h1>The Master List</h1>
      {/* <OwnerSummaryCard todos={todos} /> */}
      <TodoInputForm setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
      {/* <OwnerSelect /> */}
      {/* <ShowCompleted showCompleted={showCompleted} /> */}
    </div>
  );
};
//END OF THE APP FUNCTION------------>




//The Todo List
function ToDoList({ todos, setTodos }) {
  const buttonContainer = {
    display: 'flex',
    alignItems: 'center',
  };

  const taskTextContainer = {
    display: 'flex',
    backgroundColor: 'rgb(232, 119, 190)',
    flexWrap: 'wrap',
    margin: '15px',
    border: 'solid pink 1px',
    borderRadius: '5px',
    padding: '10px',
  }

  const greyedOutText = {
    color: 'grey',
    textDecoration: 'line-through',
    fontSize: '.9rem',
    margin: '5px',
    textAlign: 'left',
  }

  const greyButtonStyle = {
    backgroundColor: "grey",
    border: 'black solid 1px',
  }

  const putMeInTheList =
    todos.map(todo =>
      <div key={todo.id} style={taskTextContainer} >
        <div style={todo.completed ? greyedOutText : { margin: '5px', fontSize: '1.25rem', }}>{todo.owner}'s {<br></br>} Todo</div>
        <div>
          <p style={todo.completed ? greyedOutText : {}}><b>Task: </b>
           {todo.title}
           
          </p>
          {/* <div>Completed: {JSON.stringify(todo.completed)}
          </div> */}
          <div style={buttonContainer}>
            <button style={todo.completed ? greyButtonStyle : {
              backgroundColor: 'rgb(39, 140, 59)',
              color: 'white',
              border: 'black solid 1px',
              borderRadius: '10px',
              margin: '5px',
            }}
              onClick={() => { toggleCompleted(todo.id) }}  //change button color and wording on click
            > {todo.completed ? "Restore" : " ✅ Done"}
            </button>

            <button style={{
              backgroundColor: 'rgb(138, 5, 138)',
              color: 'white',
              border: 'black solid 1px',
              borderRadius: '5px',
              margin: '10px',
            }}
              onClick={() => { deleteTask(todo.id) }}
            >
              Delete ⛔️
            </button>
          </div>

        </div>
      </div>
    )

  //Toggle Task Completed
  function toggleCompleted(id) {
    console.log(id, todos);
    setTodos((allTodos: []) => {
      return allTodos.map((todo) => {
        console.log(todo.id)
        return id === todo.id ? { ...todo, completed: !todo.completed } : todo;
      })
    })
  }

  //Delete Task
  function deleteTask(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toDoListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 2px',
    margin: '2rem',
    padding: '2rem',
    borderRadius: '10px',
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

      <button style={{ backgroundColor: 'pink', color: 'rgb(207, 15, 204)', width: '12rem' }} onClick={addTodo}>
        Add Task
      </button>

    </div>
  )
};







// broken code  making the owners card (x of y completed)--->
//Owner Summary Card
// function OwnerSummaryCard({ todos }) {
//   //display owner summary card under the add task card
//   //show the owners and how many tasks are assigned to them (2/10); of tasks the owner has (2); show the number of completed tasks (10);select owner by checkbox
//   //hides other owners tasks unless that owner is selected
//   //selecting/check boxn all owners will show all tasks assigned in the app

//   const [ownerObject, setOwnerObject] = useState({});

  // todos.map((todo) => {
//     // if (Object.keys(ownerObject).includes(todo.owner) && (todo.completed === false))
//     if (Object.keys(ownerObject).includes(todo.owner)) {
//       // setOwnerObject({...ownerObject, todo.owner:  })
//       ownerObject[todo.owner]++
//     } else {
//       ownerObject[todo.owner] = 1;
//     }
//   })

//   return (
//   <div>
//     <h2>Owner Summary</h2>
//     <div>{JSON.stringify(ownerObject)}</div>
//    {/*  <div>{Object.keys(ownerObject).map((key)=>(<div>{key}{" "}{ownerObject[key]}</div>))}</div> */}
//     {/* <div>{ownerObject}</div> */}
//   </div>);
// }



//EXPORT
export default App


