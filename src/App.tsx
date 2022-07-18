import axios from 'axios'
import { useState } from 'react'
import './App.css'
import { Todo } from './component/Todo'

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: false;
};

function App() {
  /* 
    取得したデータを保持する!
    取得データとstateに型をつける！！
    point①: useState後ろで <Array<TodoType>> でstateの型を指定
    point②: axiosのHTTPメソッドの後ろでも同様に <Array<TodoType>> で型指定
  */
  const [todos, setTodos] = useState<Array<TodoType>>([])
  const onClickFetchData = () => {
    // axiosのtypeの仕方はHTTPメソッドの後ろで指定
    axios
      .get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log('データ取得')
      })
  }
  return (
    <div className="App">
      {/*関数名: "onClick" + "内容"*/}
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  )
}

export default App
