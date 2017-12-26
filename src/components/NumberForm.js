import React from 'react';
import { connect } from 'react-redux';
import { createAddNmberAction } from '../actions/actionCreator';

class NumberForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const number = this.refs.numberInput.value;
    console.log('input number ->', number);
    console.log('props?->', this.props);
    this.props.addNumber(number); 
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
    number: state.numbers
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

export default connect(mapStateToProps, mapDispatchToProps)(NumberForm);
// this connect line is what binds the mapState/distpatch to props to Number form
// connects form to redux stuff 