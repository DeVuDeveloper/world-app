import PropTypes from 'prop-types';
import './oneCountry.css';

const OneCountry = ({
  countryName,
  todayConfirmed,
}) => (
  <li className="card">
    <span className="card-images">
      <img
        className="card-img"
        src={' '}
        alt="country"
        width="80"
        height="80"
      />
    </span>
    <span className="card-text">
      <h3>{countryName}</h3>
      <p>{todayConfirmed}</p>
    </span>
  </li>
);

OneCountry.propTypes = {
  countryName: PropTypes.string.isRequired,
  todayConfirmed: PropTypes.string.isRequired,
};
export default OneCountry;
