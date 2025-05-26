// App.tsx
import React from 'react';
import Todo from './components/Todo';


const MyTodoItems=[
    {
        id: 1,
        title:'I need to fininsh my Hw'
    },
    {
        id: 2,
        title:'I need to fininsh my cw'
    },
]

const App:React.FC = () => {
  return (
    <div >
      <Todo items={MyTodoItems}/>
      
    </div>
  );
};

export default App; // ✅ this line makes it a module
