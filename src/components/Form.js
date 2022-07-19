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
      // hasTrunfo
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="cardName">
          Nome:
          <input
            id="cardName"
            name="cardName"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription ">
          Descrição:
          <input
            id="cardDescription"
            name="cardDescription"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1">
          Atributo 1:
          <input
            id="cardAttr1"
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2">
          Atributo 2:
          <input
            id="cardAttr2"
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          Atributo 3:
          <input
            id="cardAttr3"
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage">
          Imagem:
          <input
            id="cardImage"
            name="cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRare">
          Raridade:
          <select
            id="cardRare"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            className="display-flex-margin-18"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo">
          CardTrunfo:
          <input
            id="cardTrunfo"
            name="cardTrunfo"
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
          className="display-flex-margin-18"
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
