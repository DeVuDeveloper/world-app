import './countryDetails.css';

const Country = () => (
  <ul className="details-wrapper">
    <li className="country-detail">
      <span> Total Confirmed </span>
      {' '}
      <small>
        {' '}
        {}
      </small>
      {' '}
    </li>
    {' '}
    <li className="country-detail">
      <span> Total Deaths </span>
      {' '}
      <small>
        {' '}
        {}
      </small>
      {' '}
    </li>
    {' '}
    <li className="country-detail">
      <span> total Recovered </span>
      {' '}
      <small>
        {' '}
        {}
      </small>
      {' '}
    </li>
    {' '}
    <li className="country-detail">
      <span> Today New Confirmed </span>
      {' '}
      <small>
        {' '}
        {}
      </small>
      {' '}
    </li>
    {' '}
    <li className="country-detail">
      <span> Today New Deaths </span>
      {' '}
      <small>
        {' '}
        {}
      </small>
      {' '}
    </li>
    {' '}
    <li className="country-detail">
      <span> Today New Recovered </span>
      {' '}
      <small>
        {' '}
        {}
      </small>
      {' '}
    </li>
  </ul>
);

export default Country;
