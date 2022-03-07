import React from 'react';
import Country from './CountryDetails';
import './countryInfo.css';

const CountryInfos = () => (

  <section className="wrapper-details">
    <div className="container">
      <div className="details">
        <img
          className="country-img"
          src={' '}
          alt="country-img"
        />

        <div className="country-text">
          <span className="country-title">
            <h2>{' '}</h2>
            <p>
              Total cases:
              <br />
              {}
              <br />

            </p>
          </span>
          <span className="country-date">
            {}
          </span>
        </div>
      </div>
    </div>
    <Country country={' '} />
  </section>

);

export default CountryInfos;
