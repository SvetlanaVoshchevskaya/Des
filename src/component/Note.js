import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotesField.module.css';

const Note = ({ text, onDeleteNote }) => (
  <div>
    <button
      type="button"
      className={styles.deleteBatton}
      onClick={onDeleteNote}
    ></button>
    <p> {text}</p>
  </div>
);
Note.propTypes = {
  text: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};
export default Note;
