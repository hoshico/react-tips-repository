import axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Todo } from './component/Todo';
import { Text } from './component/Text';
import { TodoType } from './types/todo';
import { UserProfile } from './component/UserProfile';
import { User } from './types/User';

const user: User = {
  name: 'じゃけぇ',
  hobbies: ['映画', 'ゲーム'],
};

function App() {
  /* 
    取得したデータを保持する!
    取得データとstateに型をつける！！
    point①: useState後ろで <Array<TodoType>> でstateの型を指定
    point②: axiosのHTTPメソッドの後ろでも同様に <Array<TodoType>> で型指定
  */
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    // axiosのtypeの仕方はHTTPメソッドの後ろで指定
    axios
      .get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('データ取得');
      });
  };
  return (
    <div className="App">
      <UserProfile user={user}/>
      <Text color="red" fontSize="18px" />
      {/*関数名: "onClick" + "内容"*/}
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
