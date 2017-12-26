import { ADD_NUMBER } from "../actions/actionCreator";

// reducers

// initial state should outline what state should look like
// if have multiple properties, easier to reference or set an empty {}

// const initialState = {}
// if set initial state to {} so when other components reference it as a prop
// those components will errors initially if there is no empty {} to start with
// otherwise need do null checks everywhere 
const initialState = {
  numbers: [ 5, 7, 8 ]
};

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: 
    console.log('adding number...');
      return {
        ...state, // { numbers: [5, 7, 8] } = original state
        numbers: [...state.numbers, action.payload.number] //this overrides the properties in the state 
      };
    default: 
      return state;
  }
}

export default numberReducer;
