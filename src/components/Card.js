import React from 'react';
import ProtTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;

    return (
      <div>
        <h2 data-testid="name-card">{cardName}</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <p data-testid="attr1-card">{cardAttr1}</p>
        <p data-testid="attr2-card">{cardAttr2}</p>
        <p data-testid="attr3-card">{cardAttr3}</p>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo ? <div data-testid="trunfo-card">Super Trunfo</div> : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: ProtTypes.string.isRequired,
  cardDescription: ProtTypes.string.isRequired,
  cardAttr1: ProtTypes.string.isRequired,
  cardAttr2: ProtTypes.string.isRequired,
  cardAttr3: ProtTypes.string.isRequired,
  cardImage: ProtTypes.string.isRequired,
  cardRare: ProtTypes.string.isRequired,
  cardTrunfo: ProtTypes.bool.isRequired,
};

export default Card;
