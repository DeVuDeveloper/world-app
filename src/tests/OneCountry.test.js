import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import OneCountry from '../components/oneCountry/OneCountry';

const data = [
  {
    id: 'afghanistan',
    name: 'Afghanistan',
    today_confirmed: 4,
  },
  {
    id: 'angola',
    name: 'Angola',
    today_confirmed: 4,
  },
];

const initialState = [];
const mockStore = configureStore();
let store;

it('renders correctly', () => {
  store = mockStore(initialState);

  const oneCountry = data.map((country) => (
    <Provider store={store} key={country.id}>
      <BrowserRouter>
        <OneCountry />
      </BrowserRouter>
    </Provider>
  ));

  const tree = renderer.create(oneCountry).toJSON();
  expect(tree).toMatchSnapshot();
});
