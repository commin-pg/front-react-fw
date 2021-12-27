import * as type from '../constants/ActionTypes'
// export const TODO_CAHNGE = "todo_change";
// export const TODO_CREATE = "todo_create";
// export const TODO_TOGGLE = "todo_toggle";
// export const TODO_REMOVE = "todo_remove";

handleChange = (input) => {
    return {
        type: type.TODO_CAHNGE,
        input,
    }
}

handleCreate = (input) => {
    return {
        type: type.TODO_CREATE,
        input,
    }
}


handleToggle = (id) => {
    return {
        type: type.TODO_TOGGLE,
        id
    }
}

handleRemove = (id) => {
    return {
        type: type.TODO_REMOVE,
        id
    }
}