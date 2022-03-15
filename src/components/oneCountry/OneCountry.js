import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import CountryCode from './CountryCode';

import './oneCountry.css';

const OneCountry = ({
  id,
  countryName,
  todayConfirmed,
}) => {
  const countryImg = CountryCode[countryName];
  const map = countryImg
    ? `https://raw.githubusercontent.com/VuDej/worldMaps/main/maps/${countryImg.toLowerCase()}/128.png`
    : '';

  return (

    <li
      key={id}
      className="card"
    >

      <Link
        to={`/${id}`}
        style={{ textDecoration: 'none' }}
      >
        <div>

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

        </div>

      </Link>

    </li>

  );
};
OneCountry.propTypes = {
  id: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  todayConfirmed: PropTypes.number.isRequired,
};
export default OneCountry;
