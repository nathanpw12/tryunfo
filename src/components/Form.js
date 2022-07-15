import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input id="name" type="text" data-testid="name-input" />
        </label>

        <label htmlFor="description">
          <input
            id="description"
            type="textarea"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1">
          <input id="attr1" type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="attr2">
          <input id="attr2" type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="attr3">
          <input id="attr3" type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="image">
          <input id="image" type="text" data-testid="image-input" />
        </label>

        <div>
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </div>

        <label htmlFor="trunfo">
          <input id="trunfo" type="checkbox" data-testid="trunfo-input" />
        </label>

        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
