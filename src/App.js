import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedcard: [],
      searchValue: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSearchValue = this.handleSearchValue.bind(this);
  }

  handleSearchValue({ target }) {
    const { searchValue } = this.state;
    const { value } = target;
    this.setState({
      searchValue: value,
    }, () => console.log(searchValue));
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
      cardTrunfo,
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
        cardTrunfo,
      }],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: 'false',
    });

    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
      });
    }
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

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const values = type === 'checkbox' ? checked : value;
    this.setState({ [name]: values },
      () => this.setState({ isSaveButtonDisabled: this.saveBtnValidation() }));
  }

  removeCard = ({ cardName }) => {
    const { savedcard } = this.state;
    this.setState((states) => ({
      savedcard: states.savedcard.filter((card) => card.cardName !== cardName),
    }), () => {
      if (savedcard
        .some((card) => card.cardTrunfo === true && card.cardName === cardName)) {
        this.setState({ hasTrunfo: false });
      }
    });
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
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      savedcard,
      searchValue,
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
          hasTrunfo={ hasTrunfo }
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

        <label htmlFor="name-filter">
          Pesquisar
          <input
            type="text"
            name="name-filter"
            id="name-filter"
            data-testid="name-filter"
            onChange={ this.handleSearchValue }
          />
        </label>

        <ul>
          {savedcard
            .filter((card) => card.cardName.includes(searchValue))
            .map((card) => (
              <li key={ card.cardName }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ () => this.removeCard(card) }
                >
                  Remover carta
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
