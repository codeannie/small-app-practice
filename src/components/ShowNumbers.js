import React from 'react';

const ShowNumbers = (props) => {
  return (
    <div className="numberContainer" style={styles.inputContainer}>
      <ul className="numberList" style={styles.list}>
        {/* {this.props.map(number => (<li className="number">{number}</li>))} */}
      </ul>
    </div>
  )
}

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

export default ShowNumbers; 