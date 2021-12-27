import * as type from '../constants/ActionTypes'
import { combineReducers } from 'redudx'

const todoInitialState =
{
    input: '',
    todos: [
        { id: 0, text: '리액트 1', checked: false },
        { id: 1, text: '리액트 2', checked: false },
        { id: 2, text: '리액트 3', checked: false },
    ]
}


const todosReducer = (state = todoInitialState, action) => {
    switch (action.type) {
        case type.TODO_CAHNGE:
            this.state.input = action.input;
            return state;

        case type.TODO_CREATE:
            this.state.input = '';
            return {
                input: this.state.input,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.reduce((maxId, todos) => Math.max(todos.id, maxId), -1) + 1,
                        checked: false,
                        text: action.input,
                    }
                ]
            };

        case type.TODO_TOGGLE:
            return {
                input: state.input,
                todos: state.todos.map(todo.id === action.id ? { ...todo, checked: !todo.checked } : todo)
            };

        default: state;
    }
}

const rootReducer = combineReducers({ todosReducer });

export default rootReducer;