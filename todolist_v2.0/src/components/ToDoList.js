// shift + option + F - форматирование кода
import ToDoItem from "./ToDoItem";
// библиотека для типизации значений
import PropTypes from "prop-types"
const styles = {
  // Для того чтобы сделать список с недефолтными стилями
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};
// props - для принятия свойств, у него будет ключ todos для получения переданного значения
function ToDoList(props) {
    // props.todos.map - итерируемся по массиву и возвращаем html для отображения
    // key={todo.id} - для более быстрого отображения реактом нужен уникальный ключ
  return (
    <ul style={styles.ul}>
      { props.todos.map((todo, idx) => {
          return( 
            <ToDoItem
            todo={todo}
            key={todo.id}
            index={idx}
            onChange={props.onToggle}
          />
          )
      }) }
    </ul>
  );
}
// Для типизации типов, чтобы не было проблем у Реакта в быстрой подгрузке и избежании ошибок в типах
ToDoList.propTypes = {
    // Определяем тип массива (isRequired - значит необходим для работы компонента)
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  //  onToggle: PropTypes.func.isRequired
}

export default ToDoList