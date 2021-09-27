import ToDoList from './components/ToDoList'
import React from 'react'
import Context from './context'
import AddToDo from './components/AddToDo'
function App() {
  // React.useState - позволяет перерендерить наше состояние
  // для какого-то объекта (todos - первый параметр) и с помощью какой-то функции
  // (setTodos - второй параметр)
  const [todos, setTodos] = React.useState([
      {id: 1, completed: false, title: "Купить хлеб"},
      {id: 2, completed: false, title: "Купить масло"},
      {id: 3, completed: true, title: "Купить молоко"}
    ])

  // вызывается при изменении чекбокса
  function toggleTodo(id) {
    setTodos(
      // изменяем completed у массива
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
  function removeTodo(id) {
    // если todo.id == id элемент удалится
    setTodos(todos.filter(todo => todo.id !== id))
  }
  function addTodo(title) {
    // чтобы изменить стейт - то есть что-то сделать с массивом todos
    setTodos(
      // добавляем к массиву
      todos.concat([
        {
          title,
          // нужен уникальный id
          id: Date.now(),
          completed: false
        }
      ])
    )
  }
  return (
    // className - для задания класса
    // todos передает свойства
    // onToggle - реализация функции при изменении чекбокса
    // в Context.Provider можем передавать что хотим функцию стейт и тд
    // todos.length ? - тернарный оператор, если todos нет выводим текст
    <Context.Provider value={{ removeTodo }}>
     <div className='wrapper'>
       <AddToDo onCreate={addTodo} />
       {todos.length ? (
          <ToDoList todos={todos} onToggle={toggleTodo} />
        ) :  (
          <p>No todos!</p>
        )}
     </div>
    </Context.Provider>
    
    
  );
}

export default App;
