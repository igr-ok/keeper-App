import React from "react";
import {Delete} from "@mui/icons-material";

function Note({delNote, editNote, id, title, content}){

    function forDel(){        
        delNote(id);
    }

    function forEdit(){
        editNote(id, title, content);
    }

    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={forEdit}>Edit</button>
            <button onClick={forDel}><Delete /></button>
        </div>
    )
}

export default Note;