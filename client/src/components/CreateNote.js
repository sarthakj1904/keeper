import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';


export default function CreateNote({submitButton,onAdd}) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    
    function handleChange(e) {
        const { name, value} = e.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    function handleExpanded() {
        setExpanded(true);
    }

    function submitButton(event) {
        onAdd(note);
        setNote({
            title: "",
            content: "",
        });
        event.preventDefault();
    }
    
    return (
        <div className="main_note">
            <form>
                {isExpanded && (
                <input 
                    value={note.title} 
                    type="text" 
                    placeholder="Title" 
                    autoComplete='off' 
                    name="title" 
                    onChange={handleChange} />
                )}
                <textarea 
                    value={note.content}
                    onClick={handleExpanded} 
                    placeholder="Write a note..." 
                    name="content" 
                    onChange={handleChange} 
                    rows={isExpanded ? 3:1}
                />
                <button onClick={submitButton}>
                    <AddIcon size={35} className="Add" />
                </button>                    
            </form>
        </div>
    )
}