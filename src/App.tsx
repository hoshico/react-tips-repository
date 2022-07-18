import axios from 'axios';
import './App.css';

function App() {
  const onClickFetchData = () => {
    axios.get("url")
      .then()
  };
  return (
    <div className="App">
      {/*関数名: "onClick" + "内容"*/}
      <button onClick={onClickFetchData}>データ取得</button>
    </div>
  );
}

export default App;
