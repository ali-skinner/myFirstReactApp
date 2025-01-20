function OwnerSummaryCard({ todos }) {
    const [selectedOwners, setSelectedOwners] = useState([]);
    
    // Calculate owner statistics using useMemo
    const ownerStats = useMemo(() => {
      let stats = {};
      
      // Loop through todos to count tasks for each owner
      for (let todo of todos) {
        // If this is the first time seeing this owner, initialize their stats
        if (!stats[todo.owner]) {
          stats[todo.owner] = {
            totalTasks: 0,
            completedTasks: 0,
            tasks: []
          };
        }
        
        // Update the stats for this owner
        stats[todo.owner].totalTasks++;
        if (todo.completed) {
          stats[todo.owner].completedTasks++;
        }
        stats[todo.owner].tasks.push(todo);
      }
      
      return stats;
    }, [todos]);
  
    const handleOwnerToggle = (owner) => {
      if (selectedOwners.includes(owner)) {
        setSelectedOwners(selectedOwners.filter(selected => selected !== owner));
      } else {
        setSelectedOwners([...selectedOwners, owner]);
      }
    };
  
    const handleSelectAll = () => {
      if (selectedOwners.length === Object.keys(ownerStats).length) {
        setSelectedOwners([]);
      } else {
        setSelectedOwners(Object.keys(ownerStats));
      }
    };
  
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Owner Summary</h2>
        
        {/* Select All Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={selectedOwners.length === Object.keys(ownerStats).length}
            onCheckedChange={handleSelectAll}
            id="select-all"
          />
          <label htmlFor="select-all">Select All Owners</label>
        </div>
  
        {/* Owner List */}
        <div className="space-y-4">
          {Object.entries(ownerStats).map(([owner, stats]) => (
            <div key={owner} className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={selectedOwners.includes(owner)}
                  onCheckedChange={() => handleOwnerToggle(owner)}
                  id={`owner-${owner}`}
                />
                <label htmlFor={`owner-${owner}`} className="flex items-center space-x-2">
                  <span>{owner}</span>
                  <span className="text-gray-500">
                    ({stats.completedTasks}/{stats.totalTasks})
                  </span>
                </label>
              </div>
  
              {/* Show tasks only when owner is selected */}
              {selectedOwners.includes(owner) && (
                <div className="ml-6 space-y-1">
                  {stats.tasks.map((todo) => (
                    <div 
                      key={todo.id} 
                      className={`flex items-center space-x-2 ${
                        todo.completed ? 'text-gray-500 line-through' : ''
                      }`}
                    >
                      {todo.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <Circle className="h-4 w-4 text-gray-300" />
                      )}
                      <span>{todo.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }













// import React, { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Checkbox } from '@/components/ui/checkbox';
// import { UserCircle, CheckCircle2, Circle } from 'lucide-react';

// const TaskOwnershipCard = () => {
//   // Sample data - in real app this would come from props or API
//   const taskOwners = [
//     {
//       id: 1,
//       name: 'Alice',
//       totalTasks: 10,
//       completedTasks: 2,
//       tasks: [
//         { id: 1, title: 'Review PR #123', completed: true },
//         { id: 2, title: 'Update documentation', completed: true },
//         { id: 3, title: 'Fix navigation bug', completed: false },
//         { id: 4, title: 'Add new feature', completed: false }
//       ]
//     },
//     {
//       id: 2,
//       name: 'Bob',
//       totalTasks: 8,
//       completedTasks: 5,
//       tasks: [
//         { id: 5, title: 'Deploy to staging', completed: true },
//         { id: 6, title: 'Write unit tests', completed: false },
//         { id: 7, title: 'Code review', completed: true }
//       ]
//     }
//   ];

//   const [selectedOwners, setSelectedOwners] = useState(new Set());

//   const handleOwnerToggle = (ownerId) => {
//     const newSelected = new Set(selectedOwners);
//     if (newSelected.has(ownerId)) {
//       newSelected.delete(ownerId);
//     } else {
//       newSelected.add(ownerId);
//     }
//     setSelectedOwners(newSelected);
//   };

//   const getTotalTasksForSelected = () => {
//     return taskOwners
//       .filter(owner => selectedOwners.has(owner.id))
//       .reduce((acc, owner) => acc + owner.totalTasks, 0);
//   };

//   return (
//     <Card className="w-full max-w-2xl">
//       <CardHeader>
//         <CardTitle className="text-xl font-bold">Task Ownership</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-6">
//           {taskOwners.map(owner => (
//             <div key={owner.id} className="space-y-2">
//               <div className="flex items-center space-x-4">
//                 <Checkbox 
//                   id={`owner-${owner.id}`}
//                   checked={selectedOwners.has(owner.id)}
//                   onCheckedChange={() => handleOwnerToggle(owner.id)}
//                 />
//                 <label 
//                   htmlFor={`owner-${owner.id}`}
//                   className="flex items-center space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 >
//                   <UserCircle className="h-4 w-4" />
//                   <span>{owner.name}</span>
//                   <span className="text-gray-500">
//                     ({owner.completedTasks}/{owner.totalTasks})
//                   </span>
//                 </label>
//               </div>

//               {/* Task list - only shown when owner is selected */}
//               {selectedOwners.has(owner.id) && (
//                 <div className="ml-10 pl-4 border-l border-gray-200">
//                   {owner.tasks.map(task => (
//                     <div key={task.id} className="flex items-center space-x-2 py-1">
//                       {task.completed ? (
//                         <CheckCircle2 className="h-4 w-4 text-green-500" />
//                       ) : (
//                         <Circle className="h-4 w-4 text-gray-300" />
//                       )}
//                       <span className={`text-sm ${task.completed ? 'text-gray-500 line-through' : ''}`}>
//                         {task.title}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           <div className="mt-6 pt-4 border-t">
//             <p className="text-sm text-gray-600">
//               {selectedOwners.size === 0 ? (
//                 "No task owners selected"
//               ) : (
//                 `Total tasks for selected owners: ${getTotalTasksForSelected()}`
//               )}
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default TaskOwnershipCard;