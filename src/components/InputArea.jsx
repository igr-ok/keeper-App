import React, { useState } from "react";
import uuid from 'react-uuid';

function InputArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: "",
        id: ""
    });

    function fetchFromForm(event) {

        let { name, value } = event.target;

        setNote(function (prev) {
            function id() {
                return uuid();
            }
            return { ...prev, id: id(), [name]: value }
        })
    }

    function forSubmit(event) {
        event.preventDefault();
        props.addNote(note);
        setNote({
            title: "",
            content: "",
            id: ""
        })
    }

    return (
        <div className="input-area">
            <h3>Add new note</h3>
            <form>                
                <input name="title" value={note.title} onChange={fetchFromForm} placeholder="For title" />
                <textarea name="content" value={note.content} onChange={fetchFromForm} placeholder="For note" />
                <button onClick={forSubmit}>Add note</button>
            </form>
        </div>
    )
}

export default InputArea;