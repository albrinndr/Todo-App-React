import { useEffect, useState } from "react";
import './TodoForm.module.css'

const TodoForm = (props) => {
    const [todoInput, setTodoInput] = useState('')
    const [isValid, setIsValid] = useState('')

    useEffect(() => {
        if (props.updateTodo) {
            setTodoInput(props.updateTodo.title)
        }
    }, [props.updateTodo])

    const todoInputHandler = (event) => {
        setTodoInput(event.target.value)
        setIsValid(event.target.value.trim().length > 0)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const data = {
            id: Date.now(),
            title: todoInput,
            completed:false
        }
        if (props.updateTodo) {
            data.id = props.updateTodo.id
        }
        props.addTodo(data)
        setTodoInput('')
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" onChange={todoInputHandler} value={todoInput} />
            <button type="submit" disabled={!isValid}>{props.updateTodo?'Update Todo':'Add Todo'}</button>
        </form>
    )
}
export default TodoForm;
