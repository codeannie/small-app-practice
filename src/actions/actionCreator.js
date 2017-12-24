// actions

export const ADD_NUMBER = 'ADD_NUMBER';
export const createAddNmberAction = (number) => ({
  type: ADD_NUMBER,
  payload: {
    number
  }
});

export const DELETE_NUMBER = 'DELETE_NUMBER';
export const createDeleteNumberAction = (number) => ({
  type: DELETE_NUMBER,
  payload: {
    number
  }
});