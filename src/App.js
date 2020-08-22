import React from 'react';
import Notes from './component/Notes';
import styled from './App.module.css';

const App = () => (
  <div className={styled.title}>
    <p> NotesApp</p>
    <Notes />
  </div>
);
export default App;
