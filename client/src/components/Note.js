import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note({title,content,onDelete,id}){
    return (
        <>
            <div> 
                <div className="note">
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <button onClick={() => onDelete(id)}><DeleteIcon /></button>
                </div>
            </div>
        </>
    )
}