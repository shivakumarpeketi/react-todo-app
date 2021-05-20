import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions';
import { todos } from './states';


export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            // console.dir(state)
            // console.dir({...state})
            // console.dir([...state])
            newTodos = [...state]
            newTodos.push(action.payload);
            console.log(newTodos===state)
            return [...state, action.payload];
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) {
                    break;
                }

            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
            break;
            default:
                return state;

    }
    return state;
}