import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    let todos = useSelector(state=>{
        console.log(`Todo List Selector`);
        return state;
    });
    // console.dir(todos)

    return (
        <div className="my-4">
            {logger()}
            {todos.map((todo)=>   {
                return <TodoItem key={todos.id} todo={todo}/>;
            })}
        </div>
    )
}

const logger = () => console.log(`Todo List Render`);

console.log(`Todo List`)

export default TodoList
