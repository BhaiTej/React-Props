// src/components/Todo/TodoItem/index.tsx
import React from 'react'; // ✅ import present
import './style.css'
// const TodoItem: React.FC =  () => {
//   return <li>Tej Dabhi</li> // but this is not dynamically
//   // can we make more genirically
// };

interface TodoItemProps{
    title:string;
}
const TodoItem: React.FC<TodoItemProps> =  (props) => {
  console.log("Props",props)

  return <li>{props.title}</li> 
};

export default TodoItem; // ✅ export present
