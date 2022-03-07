import { getData } from '../duckFolder/duckFile';

const today = new Date();

const currentDate = `${today.getFullYear()}-${(`0${today.getMonth() + 1}`).slice(-2)}-${(`0${today.getDate() - 1}`).slice(-2)}`;
export const GlobalDataFromAPI = async () => {
  const response = await fetch(`https://api.covid19tracking.narrativa.com/api/${currentDate}`)
    .then((res) => res.json());
  return response;
};
export const GlobalData = () => async (dispatch) => {
  const countryData = await GlobalDataFromAPI();
  const { countries } = countryData.dates[currentDate];
  dispatch(getData(Object.values(countries)));
};
export default GlobalData;
