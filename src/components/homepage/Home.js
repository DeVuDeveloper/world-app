import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import OneCountry from '../oneCountry/OneCountry';
import worldMap from '../../img/worldmap.png';
import spinner from '../../img/virus.png';
import './home.css';

const Homepage = () => {
  const data = useSelector(
    (state) => state.globalReducer,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const [findCountry, setSearchCountry] = useState('');
  const filteringCountres = data.filter((country) => {
    if (findCountry === '') {
      return country;
    } if (country.name.common.includes(findCountry)) {
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
          <h3 className="header-number">Countries</h3>
        </div>
      </header>
      <form className="search-form">
        <span className="form-span">Countries</span>
        <input className="search-input" name="search" type="text" placeholder="country" onChange={selectCountry} />
      </form>
      {loading === false ? (

        <div className="countries">

          {filteringCountres.map((country) => (

            <OneCountry
              key={country.code}
              country={country}
              countryName={country.name.common}
              code={country.code}
            />

          ))}

        </div>
      ) : (
        <img className="spin" src={spinner} alt="virus" />
      )}
    </section>
  );
};

export default Homepage;
