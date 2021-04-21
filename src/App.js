import React from "react";
import TodoList from "./todo/TodoList";


function App() {

    let [todos, setTodos] = React.useState([
        {
            id: 1,
            completed: false,
            title: 'Buy bread'
        },
        {
            id: 2,
            completed: true,
            title: 'Buy cake'
        },
        {
            id: 3,
            completed: false,
            title: 'Buy butter'
        },

    ])

    function toggleTodo(id) {
        setTodos(
            todos = todos.map((todo) => {

                if (todo.id === id) {
                    todo.completed = !todo.completed
                }

                return todo
            })
        )


    }

    return (
        <div className="wrapper">
            <h1>react todo list</h1>
            <TodoList todos={todos} onToggle={toggleTodo}/>  {/*передаємо властивості (масив та функцію) копоненті TodoList*/}
        </div>
    );
}




export default App;
