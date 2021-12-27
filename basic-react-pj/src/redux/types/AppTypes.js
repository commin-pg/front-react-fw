

// handleChange = (e) => {
//     this.setState({
//         input: e.target.value
//     })
// }

// handleCreate = () => {
//     const { input, todos } = this.state;
//     console.log("abc", this.state)
//     this.setState({
//         input: '',
//         todos: todos.concat({
//             id: this.id++,
//             text: input,
//             checked: false,
//         })
//     })
// }




// handleToggle = (id) => {
//     const { todos } = this.state;

//     const index = todos.findIndex(todo => todo.id === id);
//     const selected = todos[index];
//     const nextTodos = [...todos];
//     nextTodos[index] = {
//         ...selected,
//         checked: !selected.checked
//     };

//     this.setState({
//         todos: nextTodos
//     })
// }

// handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//         this.handleCreate();
//     }
// }


// handleRemove = (id) => {
//     const { todos } = this.state;
//     this.setState({
//         todos: todos.filter(todo => todo.id !== id)
//     })
// }