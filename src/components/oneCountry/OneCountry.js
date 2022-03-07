import './singleCountry.css';

const SingleCountry = () => (
  <li className="card">
    <span className="card-images">
      <img
        className="card-img"
        src={map}
        alt="country"
        width="80"
        height="80"
      />
    </span>
    <span className="card-text">
      <h3>{}</h3>
      <p>{}</p>
    </span>
  </li>
);

export default SingleCountry;
