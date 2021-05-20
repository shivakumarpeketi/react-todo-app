import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

const TodoItem = props =>  {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(props.todo.name)
    let dispatch = useDispatch();

    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{props.todo.id.length > 1 ? props.todo.id[2] : props.todo.id}</div>
                <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{props.todo.name}</h4>}
                </div>
                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...props.todo,
                            name: name
                        }))
                        if(editable) {
                         setName(props.todo.name);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(props.todo.id))}
                >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
