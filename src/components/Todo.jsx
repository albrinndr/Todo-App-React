import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import './Todo.module.css'

const Todo = () => {
    const [todo, setTodo] = useState([])
    const [updateTodo, setUpdateTodo] = useState('')

    const insertTodoHandler = (data) => {
        if (updateTodo.id) {
            const updatedData = todo.map((item) => {
                if (item.id === updateTodo.id) {
                    return { ...item, title: data.title };
                }
                return item;
            });

            setTodo(updatedData);
            setUpdateTodo('')
        } else {
            setTodo((prevTodo) => [data, ...prevTodo]);
        }
    }

    const updateTodoHandler = (id) => {
        const data = todo.find(data => data.id === id)
        setUpdateTodo(data)
    }

    const removeTodoHandler = todoId => {
        setTodo((prevTodo) => {
            const newTodo = prevTodo.filter(todo => todo.id !== todoId)
            setUpdateTodo('')
            return newTodo
        })
    }

    const completedTodoHandler = todoId => {
        const updatedData = todo.map((item) => {
            if (item.id === todoId) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setTodo(updatedData);
    }

    return (
        <div>
            <TodoForm addTodo={insertTodoHandler} updateTodo={updateTodo} />
            <TodoList todo={todo} removeTodo={removeTodoHandler} updateTodo={updateTodoHandler} completeTodo={completedTodoHandler} />
        </div>
    )
}
export default Todo;
