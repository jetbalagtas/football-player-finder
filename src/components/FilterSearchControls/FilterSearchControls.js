import React, { useState } from 'react';
import { connect } from 'react-redux';

import { updateObject, checkValidity } from '../../utils/utility';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './FilterSearchControls.module.css';
import * as actions from '../../store/actions/index';

function FilterSearchControls(props) {
  console.log('CONTROLS: ', props);
  
  const [searchFilterForm, setSearchFilterForm] = useState({
    playerName: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Player Name'
      },
      value: '',
      validation: {
        isString: true
      },
      valid: false,
      touched: false
    },
    position: {
      elementType: 'select',
      elementConfig: {
        options: [
          {value: '', displayValue: 'Position'},
          {value: 'attackingMidfield', displayValue: 'Attacking Midfield'},
          {value: 'centralMidfield', displayValue: 'Central Midfield'},
          {value: 'centreBack', displayValue: 'Centre-Back'},
          {value: 'centreForward', displayValue: 'Centre-Forward'},
          {value: 'defensiveMidfield', displayValue: 'Defensive Midfield'},
          {value: 'keeper', displayValue: 'Keeper'},
          {value: 'leftMidfield', displayValue: 'Left Midfield'},
          {value: 'leftWing', displayValue: 'Left Wing'},
          {value: 'leftBack', displayValue: 'Left-Back'},
          {value: 'rightBack', displayValue: 'Right-Back'},
        ]
      },
      value: '',
      validation: {},
      valid: true,
      touched: false
    },
    jerseyNumber: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Jersey Number'
      },
      value: '',
      validation: {
        isWithinRange: true,
        isNumeric: true,
        minVal: 18,
        maxVal: 40
      },
      valid: false,
      touched: false
    }
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const searchHandler = (event) => {
    event.preventDefault();

    const formData = {};
    for (let formElementIdentifier in searchFilterForm) {
      formData[formElementIdentifier] = searchFilterForm[formElementIdentifier].value;
    }
    const search = {
      players: props.players,
      searchData: formData
    }
    props.onSearch(search);
  }

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(searchFilterForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, searchFilterForm[inputIdentifier].validation),
      touched: true
    });
    const updatedSearchFilterFormForm = updateObject(searchFilterForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedSearchFilterFormForm) {
      formIsValid = updatedSearchFilterFormForm[inputIdentifier].valid && formIsValid;
    }
    setSearchFilterForm(updatedSearchFilterFormForm);
    setFormIsValid(formIsValid);
  }

  const formElementsArray = [];
  for (let key in searchFilterForm) {
    formElementsArray.push({
      id: key,
      config: searchFilterForm[key]
    });
  }
  let form = (
    <form className={classes.FilterSearchControls} onSubmit={searchHandler}>
      {formElementsArray.map(formElement => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          errorMessage={formElement.config.elementErrorMessage}
          changed={(event) => inputChangedHandler(event, formElement.id)} />
      ))}
      <Button btnType='Success' disabled={!formIsValid}>Search</Button>
    </form>
  );
  if (props.loading) {
    form = <Spinner />
  }
  return (
    <div>
      <h4>Football Player Finder</h4>
      {form}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    players: state.footballPlayerFinder.players
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (searchData) => dispatch(actions.findPlayer(searchData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSearchControls);
