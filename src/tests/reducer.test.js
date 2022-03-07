import globalReducer from '../redux/duckFolder/duckFile';

test('if load data to state', () => {
  const previousState = [];
  const mock = [
    {
      id: 1,
      name: 'Afghanistan',
      todayConfirmed: 4,
      todayDeath: 5,
      todayNewConfirmed: 6,
      todayNewDeaths: 1,
      todayNewOpenCases: 0,
      todayNewRecovered: 10,
      todayOpenCases: 7,
      todayRecovered: 6,
      yesterdayDeaths: 3,
      yesterdayOpenCases: 9,
      yesterdayRecovered: 5,
    },

  ];

  expect(
    globalReducer(previousState, {
      type: 'covid-19-app/redux/GET_DATA',
      payload: mock,
    }),
  ).toEqual(
    [
      {

        id: 1,
        name: 'Afghanistan',
        todayConfirmed: 4,
        todayDeath: 5,
        todayNewConfirmed: 6,
        todayNewDeaths: 1,
        todayNewOpenCases: 0,
        todayNewRecovered: 10,
        todayOpenCases: 7,
        todayRecovered: 6,
        yesterdayDeaths: 3,
        yesterdayOpenCases: 9,
        yesterdayRecovered: 5,

      },

    ],
  );
});
