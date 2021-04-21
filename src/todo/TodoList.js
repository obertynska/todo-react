import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle : 'none',
        margin : 0,
        padding: 0
    }
}

function TodoList (props){

    {/* props -  це object який тепер має ключ todos і метод onToggle */}

    return (
        <ul style={styles.ul}>
            {
                props.todos.map((todo, index)=>{
                    return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
                })
            }
            {/*передаємо об'єкт з кожною таскою окремо в компоненту TodoItem*/}
        </ul>
    )
}

TodoList.propTypes ={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired

}

export default TodoList;