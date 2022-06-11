/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import './countryDetails.css';

const Country = ({ officialName, region }) => {
  return (
    <ul className="details-wrapper">
      <li className="country-detail">
        <span>Official name</span>
        <small>
          {officialName}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
      <li className="country-detail">
        <span>Region</span>
        <small>
          {region}
          <BsArrowRightCircle className="infos-circle" />
        </small>
      </li>
    </ul>
  );
};
Country.propTypes = {
  officialName: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};
export default Country;
