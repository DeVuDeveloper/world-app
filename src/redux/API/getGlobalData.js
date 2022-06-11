// import { getData } from '../duckFolder/duckFile';

// // const today = new Date();

// // const currentDate = `${today.getFullYear()}
// // -${(`0${today.getMonth() + 1}`).slice(-2)}-${(`0${today.getDate() - 1}`).slice(-2)}`;
// export const GlobalDataFromAPI = () => (dispatch) => fetch('https://restcountries.com/v3.1/all')
//   .then((response) => response.json())
//   .then((data) => {
//     dispatch({
//       payload: data.map((c) => ({
//         name: c.name,
//         region: c.region,
//         code: c.cca2,
//       })),
//     });
//   });
// export const GlobalData = () => async (dispatch) => {
//   const countryData = await GlobalDataFromAPI();
//   console.log(countryData);
//   const { countries } = countryData;
//   dispatch(getData(Object.values(countries)));
// };
// export default GlobalData;
