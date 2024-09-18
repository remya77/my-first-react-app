
import './App.css'

const App = () => {

  const todos = [{
    text: "do not forget to commit after a change",
    done: true
  },
  {
    text: "clean the kitchen",
    done: false
  },
  {
    text: "cook food",
    done: true
  }];

  return (
    <>
      <h1>ToDos</h1>
      <p>Undone ToDos</p>
      {todos.map(todo=>{
        return <p>{todo.done ? "all todos are done" : <p>{todo.text}</p>}</p>
      })}
      {/* {todos[0].done ? "all todos are done" : <p>{todos[0].text}</p>}
      {todos[1].done ? "all todos are done" : <p>{todos[1].text}</p>}
      {todos[2].done ? "all todos are done" : <p>{todos[2].text}</p>} */}
    </>
  );
}

export default App
