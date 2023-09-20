import styles from './SingleTodo.module.css'

const SingleTodo = props => {
    const deleteHandler = () => {
        props.onDelete(props.id)
    }
    const todoCompleteHandler = () => {
        props.onComplete(props.id)
    }
    const todoUpdateHandler = () => {
        props.onUpdate(props.id)
    }
    return (
        <div className={styles.todo}>
            <input type="checkbox" onChange={todoCompleteHandler} />
            <h1 className={props.completed ? styles.invalid : ''}>{props.title}</h1>

            {!props.completed && <button onClick={todoUpdateHandler}><i className="bi bi-pencil-square text-success"></i></button>}
            <button onClick={deleteHandler}><i className="bi bi-x-lg"></i></button>
        </div>
    )
}
export default SingleTodo