const GET_DATA = 'covid-19-app/redux/GET_DATA';

const initialState = [];

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const GlobalDataFromAPI = () => (dispatch) => fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    dispatch({
      type: GET_DATA,
      payload: data.map((c) => ({
        name: c.name,
        region: c.region,
        code: c.cca2,
      })),
    });
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
