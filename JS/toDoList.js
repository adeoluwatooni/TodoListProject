
const todoList = [
  {
    name:'eat',
    dueDate: '30-05-2023'
  },
  {
    name: 'cook',
    dueDate: '30-05-2023'
  },
  {
    name: 'drive',
    dueDate: '30-05-2023'
  }]


const showTodoList = () => {
  let todoListHTML = ''

  todoList.forEach((todoObject, i) => {
    let {name, dueDate} = todoObject

    let todoHTML = `
    <div>${name}</div>
    <div>${dueDate}</div>

    <button class="js-delete-todo-button delete-todo-button">
        Delete
    </button>`

    todoListHTML+= todoHTML
  })
  document.querySelector('.js-todo-list').innerHTML = todoListHTML

  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click',() => {
      todoList.splice(index ,1)
      showTodoList()
    })
  })
}

showTodoList()

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
  addTodo()
})

addTodo = () => {
  let inputElement = document.querySelector('.js-name-input')
  let name = inputElement.value
  let dateInputElement = document.querySelector('.js-due-date-input')
  let dueDate = dateInputElement.value

  todoList.push({
    name: name,
    dueDate: dueDate
  })
  inputElement.value = ''
  console.log(todoList);

  showTodoList()
}



// deteteTodo = () => {
//   todoList.splice(${i} ,1)
//   showTodoList()
// }




