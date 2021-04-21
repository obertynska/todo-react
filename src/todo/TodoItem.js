import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1 rem',
        marginBottom: '.5rem',
        border: '1px solid #ccc',
        borderRadius: '5px'
    },
    input:{
        marginRight: '1rem'
    }
}

function TodoItem({todo, index, onChange}) {
    {/*за допомогою деструктиризації ми можемо створити локальну зміну для props.todo*/ }

   const classes = []

    {/* для кожного елементу списку створюється свій масив ,який містить 'done' або є пустим*/}

    if (todo.completed) {
        classes.push('done')
        classes.push('ready')
    }
    console.log(classes)

    return (
        <li style={styles.li} className={classes.join(' ')}>
            <span>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    style={styles.input}
                    onChange={()=> onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
           <button className="rm">&times;</button>
        </li>

    )
}
 export default TodoItem;

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired

}