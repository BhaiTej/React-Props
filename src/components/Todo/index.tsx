import React from "react";
import TodoItem from "./TodoItem";
import './style.css'

interface ITodoItem{
    id:number;
    title:string;
}
interface TodoProps{
    items:ITodoItem[];
}

const Todo: React.FC<TodoProps>=(props)=>{
    return (
        <div className='todo-container'>
            <ol>
                {/* <TodoItem title="Eat"/>
                <TodoItem title="Cod e"/>
                <TodoItem title="Sleep"/>
                <TodoItem title="Repeat"/> */}
                {
                    props.items.map(item => <TodoItem key={item.id} title={item.title}/>)
                }
            </ol>
        </div>
    );
};
export default Todo; 