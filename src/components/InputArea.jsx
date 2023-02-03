import React, { useState } from "react";

function InputArea(props) {   

    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    function fetchFromForm(event){        

        let {name, value} = event.target;
        
        setNote(function(prev){
            return {...prev, [name]: value}
        })
    }    

    function forSubmit(event){
        event.preventDefault();        
        props.addNote(note);
    }

    return (
        <div className="input-area">
            <h3>Add new note</h3>
            <form>
                {/* в инпуте и текстареа обошлись без value= */}
                <input name="title" onChange={fetchFromForm} placeholder="For title" />
                <textarea name="content" onChange={fetchFromForm} placeholder="For note" />
                <button onClick={forSubmit}>Add note</button>
            </form>
        </div>
    )
}

export default InputArea;