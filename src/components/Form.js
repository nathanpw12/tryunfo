import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          <input type="text" data-testid="name-input" />
        </label>
        <label>
          <input type="textarea" data-testid="description-input" />
        </label>
        <label>
          <input type="number" data-testid="attr1-input" />
        </label>
        <label>
          <input type="number" data-testid="attr2-input" />
        </label>
        <label>
          <input type="number" data-testid="attr3-input" />
        </label>
        <label>
          <input type="text" data-testid="image-input" />
        </label>

        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <label>
          <input type="checkbox" data-testid="trunfo-input" />
        </label>

        <button data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
