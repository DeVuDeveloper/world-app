import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OneCountry from '../oneCountry/OneCountry';
import worldMap from '../../img/worldmap.png';
import './home.css';

const Homepage = () => {
  const data = useSelector(
    (state) => state.globalReducer,
  );

  const [findCountry, setSearchCountry] = useState('');
  const filteringCountres = data.filter((country) => {
    if (findCountry === '') {
      return country;
    } if (country.id.includes(findCountry)) {
      return country;
    }
    return '';
  });

  const selectCountry = (element) => setSearchCountry(element.target.value);
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
        <input className="search-input" name="search" type="text" placeholder="Country Name" onChange={selectCountry} />
      </form>
      <div className="countries">
        {filteringCountres.map((country) => (

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
