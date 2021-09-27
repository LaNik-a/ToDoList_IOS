import React from 'react'
import PropTypes from 'prop-types'


function AddToDo({ onCreate }) {
  const [value, setValue] = React.useState('')
  const [desc, setDesc] = React.useState('')

  function submitHandler(event) {
    // чтобы страница не перезагружалась
    event.preventDefault()
    if (value.trim() && desc.trim()) {
      // метод который мы принимаем в AddToDo.js для создания todo
      onCreate(value, desc)
      setValue('')
      setDesc('')
    }
  }

  // onSubmit={submitHandler} по нажатию на кнопку 
  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input value={value} placeholder='Введите название' onChange={event => setValue(event.target.value)} />
      <input value={desc} placeholder='Введите описание' onChange={event => setDesc(event.target.value)} />
      <button type='submit'>Add todo</button>
    </form>
  )
}

AddToDo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddToDo