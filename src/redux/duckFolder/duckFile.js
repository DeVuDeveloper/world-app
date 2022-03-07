const GET_DATA = 'covid-19-app/redux/GET_DATA';

const initialState = [];

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload];

    default: {
      return state;
    }
  }
};

export default globalReducer;
