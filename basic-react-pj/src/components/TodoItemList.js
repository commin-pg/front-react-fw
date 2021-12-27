import React, { Component } from "react";
import './TodoItemList.css'
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <TodoItem text="할일 1" />
                <TodoItem text="할일 2" />
                <TodoItem text="할일 3" />
            </div>
        )
    }
}

export default TodoItemList;