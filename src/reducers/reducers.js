import { ADD_NUMBER } from "../actions/actionCreator";

// reducers

const initialState = {
  numbers: [ 5, 7, 8]
};

const numberReducer = (initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: 
    console.log('adding number...');
      return [
        ...initialState,
        action.payload.number
      ];
    default: 
      return initialState;
  }
}

export default numberReducer;
