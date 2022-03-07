import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import './countryDetails.css';

const Country = ({ country }) => {
  const data = {
    todayConfirmed: country.today_confirmed,
    todayDeaths: country.today_deaths,
    todayNewConfirmed: country.today_new_confirmed,
    todayNewDeaths: country.today_new_deaths,
    todayNewOpenCases: country.today_new_open_cases,
    todayNewRecovered: country.today_new_recovered,
    todayOpenCases: country.today_open_cases,
    todayRecovered: country.today_recovered,
    yesterdayDeaths: country.yesterday_deaths,
    yesterdayOpenCases: country.yesterday_open_cases,
    yesterdayRecovered: country.yesterday_recovered,
  };

  return (

    <ul className="details-wrapper">
      <li className="country-detail">
        <span>Total Confirmed</span>
        <small>
          {data.todayConfirmed}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Total Deaths</span>
        <small>
          {data.todayDeaths}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">

        <span>total Recovered</span>
        <small>
          {data.yesterdayDeaths}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Today New Confirmed</span>
        <small>
          {data.todayNewConfirmed}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Today New Deaths</span>
        <small>
          {data.todayNewDeaths}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Today New Recovered</span>
        <small>
          {data.todayNewRecovered}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>

    </ul>

  );
};

Country.propTypes = {

  today_confirmed: PropTypes.number.isRequired,
  today_deaths: PropTypes.number.isRequired,
  today_new_confirmed: PropTypes.number.isRequired,
  today_new_deaths: PropTypes.number.isRequired,
  today_new_open_cases: PropTypes.number.isRequired,
  today_new_recovered: PropTypes.number.isRequired,
  today_open_cases: PropTypes.number.isRequired,
  today_recovered: PropTypes.number.isRequired,
  yesterday_deaths: PropTypes.number.isRequired,
  yesterday_open_cases: PropTypes.number.isRequired,
  yesterday_recovered: PropTypes.number.isRequired,
  country: PropTypes.objectOf.isRequired,

};
export default Country;
