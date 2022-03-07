import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import CountryCode from './CountryCode';
import './oneCountry.css';

const OneCountry = ({
  countryName,
  todayConfirmed,
}) => {
  const countryImg = CountryCode[countryName];
  const map = countryImg
    ? `https://raw.githubusercontent.com/djaiss/mapsicon/33ba28808f8d32b5bae0ffada9cadd07073852e1/all/${countryImg.toLowerCase()}/vector.svg`
    : '';
  return (
    <li className="card">
      <span className="card-images">
        <img
          className="card-img"
          src={map}
          alt="country"
          width="80"
          height="80"
        />
        <BsArrowRightCircle className="circle" />
      </span>
      <span className="card-text">
        <h3>{countryName}</h3>
        <p>{todayConfirmed}</p>
      </span>
    </li>
  );
};
OneCountry.propTypes = {
  countryName: PropTypes.string.isRequired,
  todayConfirmed: PropTypes.string.isRequired,
};
export default OneCountry;
