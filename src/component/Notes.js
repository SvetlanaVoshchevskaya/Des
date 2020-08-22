/* eslint-disable react/destructuring-assignment */
import React, { Component, createRef } from 'react';
import shortid from 'shortid';
import Masonry from 'masonry-layout';
import NotesInput from './NotesInput';
import NotesField from './NotesField';

class Notes extends Component {
  state = {
    notes: [],
    text: '',
  };

  masonryRef = createRef();

  componentDidMount() {
    if (localStorage.getItem('notes')) {
      const notes = JSON.parse(localStorage.getItem('notes'));
      this.setState({ notes });
    }

    const grid = this.masonryRef;
    const msnry = new Masonry(grid, {
      columnWidth: 200,
      itemSelector: 'li',
    });
    msnry.layout();
  }

  componentDidUpdate(prevstate) {
    const { notes } = this.state;

    if (prevstate.notes !== notes) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }

  addNotes = text => {
    const newNotes = {
      ...text,
      id: shortid.generate(),
    };
    this.setState(state => {
      return { notes: [...state.notes, newNotes] };
    });
  };

  deleteNotes = id => {
    this.setState(state => ({
      notes: state.notes.filter(note => note.id !== id),
    }));
  };

  render() {
    const { text, notes } = this.state;
    return (
      <div>
        <NotesInput value={text} addNotes={this.addNotes} />
        <NotesField
          notes={notes}
          onDeleteNote={this.deleteNotes}
          ref={this.masonryRef}
        />
      </div>
    );
  }
}
export default Notes;
