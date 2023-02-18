import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import InputArea from "./components/InputArea";
import InputAreaForEdit from './components/InputAreaForEdit';
import { useState } from 'react';

function App() {

  const [fromNotes, operateNotes] = useState([]);

  const [isEdit, changeEditStatus] = useState(false);

  const [noteForEdit, setNoteForEdit] = useState({
    title: "",
    content: "",
    id: ""
  });

  const newNotes = fromNotes.map(function (elem) {

    return <Note id={elem.id} delNote={delNote} editNote={editNote} key={elem.id} title={elem.title} content={elem.content} />
  })


  function addNote(note) {
    operateNotes((prevItems) => {
      return [...prevItems, note];
    }
    );
  }

  function addEditedNote(note) {
    operateNotes((prevItems) => {
      return [...prevItems.map(function (elem) {
        if (elem.id === noteForEdit.id) {
          return { ...elem, title: note.title, content: note.content }
        }
        return elem
      })]
    });
  }

  function delNote(id) {
    operateNotes((prevItems) => {
      return prevItems.filter((elem) => {
        return elem.id !== id;
      });
    });
  }

  function editNote(id, title, content) {
    changeEditStatus(true);
    setNoteForEdit({
      title: title,
      content: content,
      id: id
    })
  }


  return (
    <div>
      <Header />
      {isEdit ? <InputAreaForEdit changeEditStatus={changeEditStatus} noteForEdit={noteForEdit} addEditedNote={addEditedNote} /> : <InputArea addNote={addNote} />}
      {newNotes}
      <Footer />
    </div>
  );
}

export default App;
