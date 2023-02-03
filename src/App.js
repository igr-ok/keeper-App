import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes';
import InputArea from "./components/InputArea";
import { useState } from 'react';
import uuid from 'react-uuid';


function App() {

  const [fromNotes, operateNotes] = useState(notes);

  const newNotes = fromNotes.map(function (elem){
    return <Note key={key()} title={elem.title} content={elem.content}/>
  })

  function key(){
    return uuid();
  }

  function addNote(note){
    //operateNotes([...fromNotes, {title: inputTitle, content: inputContent}]);
    operateNotes((prevItems) => {
      return [...prevItems, note];
    });
  }

  return (
    <div>
      <Header />
      <InputArea addNote={addNote} />
      {newNotes}      
      <Footer />
    </div>
  );
}

export default App;
