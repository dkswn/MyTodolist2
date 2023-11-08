
import './App.css';
import {useState} from "react";
import uuid from 'react-uuid';
import {Input} from "./Components/Input";
import {Todolist} from "./Components/Todolist";
import {Donelist} from "./Components/Donelist";

function App() {
  const [todos, setTodos] = useState([
    {id:uuid(),
      title:'제목1',
      contents:'내용1',
      isDone: false,
    },
     {id:uuid(),
      title:'제목2',
      contents:'내용2',
      isDone: true,
    },
     {id:uuid(),
      title:'제목3',
      contents:'내용3',
      isDone: false,
    },
    {id:uuid(),
      title:'제목4',
      contents:'내용4',
      isDone: false,
    },
  ]);
  // const todoList = todos.filter((todo)=>{
  //       return todo.isDone === false;  // 해야할일 false
  //
  // });
  //  const doneList = todos.filter((todo)=>{
  //    return todo.isDone === true;  // 완료한 일
  //  });
  return (
      <div>
          <div>MyTodolist</div>
        <header style={{
          backgroundColor:"black",
          padding:"20px",
        }}> 헤더입니다
        </header>
        <main style={{backgroundColor:"aqua",
                  }}>
            <Input todos={todos} setTodos={setTodos}/>
            <Todolist todos={todos} setTodos={setTodos}/>
            <Donelist todos={todos} setTodos={setTodos}/>
        </main>
        <footer>
        <h3 style={{
            backgroundColor:"yellow",
            padding:"20px",
        }}>푸터입니다</h3>
        </footer>
      </div>
  )
}

export default App;
