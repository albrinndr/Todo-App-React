import SingleTodo from "./SingleTodo";
import './TodoList.module.css'

const TodoList = (props) => {

    let content = <p>No todo added!</p>
    if (props.todo.length > 0) {
        content = props.todo.map(data => (
            <SingleTodo
                key={data.id}
                id={data.id}
                title={data.title}
                completed={data.completed}
                onDelete={props.removeTodo}
                onUpdate={props.updateTodo}
                onComplete={props.completeTodo}
            />
        ))
    }
    return (
        <div style={{ backgroundColor: '#323034' }}>
            {content}
        </div>
    )
}
export default TodoList;
