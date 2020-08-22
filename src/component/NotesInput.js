/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from './NotesInput.module.css';

const Color = {
  RED: 'DarkSalmon',
  ORANGE: 'DarkOrange',
  YELLOW: 'Gold',
  BLUE: 'DeepSkyBlue',
  PURPLE: 'MediumPurple',
  LIGHTBLUE: 'LightSteelBlue',
  GREEN: 'SpringGreen',
};

class NotesInput extends Component {
  static propTypes = { addNotes: PropTypes.func.isRequired };

  state = {
    text: '',
    color: Color.RED,
  };

  handleSubmit = event => {
    this.props.addNotes({ ...this.state });
    event.preventDefault();
    this.setState({
      text: '',
      color: Color.RED,
    });
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;

    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { text, color } = this.state;
    return (
      <div className={styled.formConteiner}>
        <form className={styled.form} onSubmit={this.handleSubmit}>
          <textarea
            className={styled.textNotes}
            name="text"
            value={text}
            onChange={this.handleChange}
            placeholder="Enter your note here..."
          ></textarea>
          <div className={styled.addColor}>
            <input
              type="radio"
              name="color"
              onChange={this.handleChange}
              value={Color.RED}
              checked={color === Color.RED}
              id={Color.RED}
            />
            <label htmlFor={Color.RED}></label>
            <input
              type="radio"
              name="color"
              onChange={this.handleChange}
              value={Color.ORANGE}
              checked={color === Color.ORANGE}
              id={Color.ORANGE}
            />
            <label htmlFor={Color.ORANGE}></label>
            <input
              type="radio"
              name="color"
              onChange={this.handleChange}
              value={Color.YELLOW}
              checked={color === Color.YELLOW}
              id={Color.YELLOW}
            />
            <label htmlFor={Color.YELLOW}></label>
            <input
              type="radio"
              name="color"
              onChange={this.handleChange}
              value={Color.PURPLE}
              checked={color === Color.PURPLE}
              id={Color.PURPLE}
            />
            <label htmlFor={Color.PURPLE}></label>
            <input
              type="radio"
              name="color"
              onChange={this.handleChange}
              value={Color.BLUE}
              checked={color === Color.BLUE}
              id={Color.BLUE}
            />
            <label htmlFor={Color.BLUE}></label>
            <input
              type="radio"
              name="color"
              onChange={this.handleChange}
              value={Color.LIGHTBLUE}
              checked={color === Color.LIGHTBLUE}
              id={Color.LIGHTBLUE}
            />
            <label htmlFor={Color.LIGHTBLUE}></label>
            <input
              type="radio"
              name="color"
              onChange={this.handleChange}
              value={Color.GREEN}
              checked={color === Color.GREEN}
              id={Color.GREEN}
            />
            <label htmlFor={Color.GREEN}></label>
          </div>

          <button type="submit" className={styled.add}>
            {' '}
            ADD{' '}
          </button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
