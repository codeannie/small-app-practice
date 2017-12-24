import React from 'react';
import { connect } from 'react-redux';
import { createAddNmberAction } from '../actions/actionCreator';

export default class NumberForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const number = this.refs.numberInput;
    console.log('input number ->', number);
    this.props.addNumber(number); //how to call the reducer? 
  }

  render () {
    return (
      <form className="numberForm" onSubmit={this.handleSubmit}>
        <label> Enter a number </label>  
          <input type="text" ref="numberInput" />
        <button type="submit"> Submit </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber(number) {
      const action = createAddNmberAction(number);
      dispatch(action);
    }
  }
};

connect(mapStateToProps, mapDispatchToProps)(NumberForm);