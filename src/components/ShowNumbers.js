import React from 'react';
import { connect } from 'react-redux';

const ShowNumbers = (props) => {
  return (
    <div className="numberContainer" style={styles.inputContainer}>
      <ul className="numberList" style={styles.list}>
        {/* this is a functional component, so no this */}
        {/* add index to map so it'll add index position from the array */}
        {props.numbers.map((number, index) => (<li className="number" key={index}> {number} </li>))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numbers: state.numbers
  }
};

export default connect(mapStateToProps)(ShowNumbers);

const styles = {
  container: {
    margin: '0 auto',
    marginTop: 10,
    width: 350,
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 0,
    padding: 5,
    listStyle: 'none'
  },
}