import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,deletetodo } from './Todoslice'


function Todolist() {
    const todo = useSelector((state) => state.todo);
    const [input, setinput] = useState("");
    
    const dispatch = useDispatch();
    const click = () => {
     
        dispatch(addTodo(input));
        setinput("");
      }
  
      
 
    const del = (id) => {
      dispatch(deletetodo(id));
    };
   
    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder='add'
        />
        <button onClick={click}>add</button>
        <ul>
          {todo.map((tex) => {
            return (
              <li key={tex.id}>
                {tex.text}
                <button onClick={() => del(tex.id)}>delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default Todolist
