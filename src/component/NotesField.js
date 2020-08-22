import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import styles from './NotesField.module.css';

const NotesField = ({ notes, onDeleteNote }) => (
  <ul className={styles.grid}>
    {notes.map(note => (
      <li
        className={styles.notes}
        key={note.id}
        style={{ backgroundColor: note.color }}
      >
        <Note {...note} onDeleteNote={() => onDeleteNote(note.id)} />
      </li>
    ))}
  </ul>
);
NotesField.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default NotesField;
