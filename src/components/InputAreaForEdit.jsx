import React, { useState } from "react";
import uuid from 'react-uuid';

function InputAreaForEdit(props) {

    const [note, setNote] = useState({
        title: "",
        content: "",
        id: ""
    });

    function fetchFromForm(event) {        

        let { name, value } = event.target;        

        setNote(function (prev) {
            
            return { ...prev, id: props.noteForEdit.id, [name]: value }
        })
    }

    function forSubmit(event) {
        event.preventDefault();
        props.addEditedNote(note);        
        props.changeEditStatus(false);
    }

    return (
        <div className="input-area">
            <h3>Edit note</h3>
            <form>                
                <input name="title" value={note.title} onChange={fetchFromForm} placeholder={props.noteForEdit.title} />
                <textarea name="content" value={note.content} onChange={fetchFromForm} placeholder={props.noteForEdit.content} />
                <button onClick={forSubmit}>Save</button>
            </form>
        </div>
    )
}

export default InputAreaForEdit;