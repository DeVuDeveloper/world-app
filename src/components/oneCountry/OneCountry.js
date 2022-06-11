import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import CountryCode from './CountryCode';

import './oneCountry.css';

const OneCountry = ({
  code,
  countryName,
}) => {
  const countryImg = CountryCode[countryName];
  const map = countryImg
    ? `https://raw.githubusercontent.com/VuDej/worldMaps/main/maps/${countryImg.toLowerCase()}/128.png`
    : '';

  return (

    <li
      key={code}
      className="card"
    >

      <Link
        to={`/${code}`}
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
            <p>{code}</p>
          </span>

        </div>

      </Link>

    </li>

  );
};
OneCountry.propTypes = {
  code: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
};
export default OneCountry;
