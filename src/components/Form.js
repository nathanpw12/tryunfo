import React from 'react';
import ProtTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          <input
            id="description"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          <input
            id="attr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          <input
            id="attr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          <input
            id="attr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          <input
            id="image"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <select
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <label htmlFor="trunfo">
          <input
            id="trunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: ProtTypes.string.isRequired,
  cardDescription: ProtTypes.string.isRequired,
  cardAttr1: ProtTypes.string.isRequired,
  cardAttr2: ProtTypes.string.isRequired,
  cardAttr3: ProtTypes.string.isRequired,
  cardImage: ProtTypes.string.isRequired,
  cardRare: ProtTypes.string.isRequired,
  cardTrunfo: ProtTypes.bool.isRequired,
  // hasTrunfo: ProtTypes.bool.isRequired,
  isSaveButtonDisabled: ProtTypes.bool.isRequired,
  onInputChange: ProtTypes.func.isRequired,
  onSaveButtonClick: ProtTypes.func.isRequired,
};

export default Form;
