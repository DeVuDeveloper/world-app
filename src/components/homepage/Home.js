import React from 'react';
import { useSelector } from 'react-redux';
import OneCountry from '../oneCountry/OneCountry';
import worldMap from '../../img/worldmap.png';
import './home.css';

const Homepage = () => {
  const data = useSelector(
    (state) => state.globalReducer,
  );
  return (
    <section>
      <header className="header">
        <img className="img" src={worldMap} alt="world-map" width="60%" height="60%" />
        <div className="wrapper">
          <h1 className="header-title">World</h1>
          <h3 className="header-number">444,638,071</h3>
        </div>
      </header>
      <form className="search-form">
        <span className="form-span">Infections by Country</span>
      </form>
      <div className="countries">
        {data.map((country) => (

          <OneCountry
            key={country.id}
            id={country.id}
            countryName={country.name}
            todayConfirmed={country.today_confirmed}
          />

        ))}
      </div>
    </section>
  );
};
export default Homepage;
