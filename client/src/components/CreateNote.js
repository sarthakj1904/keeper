import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';

export default function CreateNote() {
    return (
        <div className="main_note">
            <form>
                <input type="text" placeholder="Title" autoComplete='off' />
                <textarea rows="" column="" placeholder="Write a note..." />
                <button>
                    <AddIcon className="Add" />
                </button>                    
            </form>
        </div>
    )
}