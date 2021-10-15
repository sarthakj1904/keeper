import React from 'react'

export default function Notes(){
    return (
        <>
            <div className = {grid}>
                <div className="noteWrapper">
                    <h3>{noteTitle}</h3>
                    <p>{noteContent}</p>
                    <div className="actionButtons">
                        <button type="button" className="btn btn-warning"><DeleteForeverIcon onClick={handleDeleteNotes} /></button>
                        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#exampleModal-${id}`}><EditIcon /></button>
                    </div>
                    <EditNote noteTitle={noteTitle} noteContent={noteContent} handleEdit={handleEdit} id={id} />
                </div>

            </div>
        </>
    )
}