import PropTypes from "prop-types"
import React from "react"
// для передачи функции по удалению todo
import Context from '../context'
// Для задания стилей
const styles = {
    li: {
      display: 'flex',
      // для кнопки справа
      justifyContent: 'space-between',
      // выравниваем по вертикали все элементы
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
    },
    // стили для чекбокса
    input: {
      marginRight: '1rem'
    },
    ul: {
      marginLeft: '2rem',
      listStyle: 'none'
    }
  }
// strong - для выделения, li - список, span - контейнер для изменения строк, input - для ввода
// &times - для отображения крестика
// &nbsp - для пробела между title
// onChange={() => onChange(todo.id)} - при нажатии на чекбокс кидаем id todo в
// функцию родителя которую передали через конструктор
// фигурные скобки => javascript, можем сразу достать что нужно
  function ToDoItem({ todo, index, onChange }) {
    // принимаем функцию из App.js
    const { removeTodo } = React.useContext(Context)
    const classes = []

    if (todo.completed) {
      classes.push('done')
    }
    return (
      <li style={styles.li}>
          <span className={classes.join(' ')}>
              <input
              type='checkbox' 
              checked={todo.completed}
              style={styles.input}
              onChange={() => onChange(todo.id)}
              />
              <strong> {index + 1} </strong>
              &nbsp;
              <ul style={styles.ul}>
                <li><b>{ todo.title }</b></li>
                <li><i>{ todo.desc }</i></li>
              </ul>
          </span>
          <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button> 
      </li>
    )
  }

  ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
  }

  export default ToDoItem