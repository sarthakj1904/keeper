import React, { useState } from 'react';


export default function Todo() {
    const [todos, setTodos] = useState(['Task 1','task 2','Take bath']);
    const[input, setInput]= useState('');
    console.log('🐱‍👤', input);
    
    const addTodo=(event) =>{
        // this will fire off when we click the button//
        event.preventDefault();
        console.log('👍', 'I am working');
        setTodos([...todos, input]);
        setInput('');
    }

    return (
        <div className="App">
        <h1> Welcome to your ToDo List</h1>
        <form>
            <input value={input} onChange={event => setInput(event.target.value)}/>
            <button type="submit" onClick={addTodo}> Add Todo</button>
        </form>
    </div>
        )
}
