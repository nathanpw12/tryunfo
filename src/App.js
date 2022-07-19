import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedcard: [],
    };
  }

  saveBtnValidation = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const maxValue = 90;
    const sumValue = 210;

    const sum = Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3)
    <= sumValue;

    const verify = cardName !== ''
    && cardDescription !== ''
    && cardImage !== '';

    const min = Number(cardAttr1) >= 0
    && Number(cardAttr2) >= 0
    && Number(cardAttr3) >= 0;

    const max = Number(cardAttr1) <= maxValue
    && Number(cardAttr2) <= maxValue
    && Number(cardAttr3) <= maxValue;
    if (verify && min && max && sum) {
      return false;
    }
    return true;
  }

  onSaveButtonClick = () => {
    const { savedcard,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    this.setState({
      savedcard: [...savedcard, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
  }

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const values = type === 'checkbox' ? checked : value;
    this.setState({ [name]: values },
      () => this.setState({ isSaveButtonDisabled: this.saveBtnValidation() }));
  }

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
      onSaveButtonClick,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
