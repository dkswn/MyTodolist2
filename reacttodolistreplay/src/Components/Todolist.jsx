
import React from 'react';




export const Todolist = ({todos,setTodos}) =>{
   return <>
      <h2>할 일 목록</h2>
          {todos.filter((todo)=>{
            return todo.isDone === false
          }).map((todo) =>{
              return (<div key={todo.id} style={{
                border:"1px solid black",
                margin: "10px",
                paddingLeft:"20px",
              }}>
                <p>{todo.id}</p>
                <h3>{todo.title}</h3>
                <p>{todo.contents}</p>
                <p> 완료여부: {todo.isDone.toString()}</p>
                      <button onClick={()=>{
                          const completeTodos = todos.map((item)=>{
                              if(item.id=== todo.id){
                                  return{
                                      ...item, isDone: !item.isDone,
                                  };
                              } else {
                                  return item;
                              }});
                          setTodos(completeTodos);
                      }}>
                          완료</button>
                      <button onClick={()=>{
                          const DeleteTodos = todos.filter((item) => {
                              return item.id !== todo.id;
                          });
                          setTodos(DeleteTodos);
                      }}>
                          삭제</button>
              </div>
              )})
          }
    </>
}
