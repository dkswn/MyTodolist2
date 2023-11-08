import React, {useState} from "react";
import uuid from 'react-uuid';



export const Input = ({todos, setTodos}) =>{
      const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");
    const titleChangeHandler = (event) => {
            setTitle(event.target.value);
        }
        const contentsChangeHandler = (event) => {
            setContent(event.target.value);
        }
    return (
        <div>
            <div>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    const NewTodo = {
                        id: uuid(),
                        title: title,
                        contents: contents,
                        isDone: false,
                    };
                    setTodos([...todos, NewTodo]);
                }}>
                    <input value={title} onChange={titleChangeHandler}/>
                    <input value={contents} onChange={contentsChangeHandler}/>
                    <button type="submit">확인</button>
                </form>
            </div>
            </div>
)
};
