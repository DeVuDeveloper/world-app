import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Country from './CountryDetails';
import CountryCode from '../oneCountry/CountryCode';
import spinner from '../../img/virus.png';
import './countryInfo.css';

const CountryInfos = () => {
  const { cd } = useParams();

  const countryData = useSelector((state) => {
    if (state === undefined) {
      return state;
    }
    return state.globalReducer.find((country) => country.code === cd);
  });

  const countryImg = CountryCode[countryData.name.common];
  const map = countryImg
    ? `https://raw.githubusercontent.com/VuDej/worldMaps/main/maps/${countryImg.toLowerCase()}/128.png`
    : '';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section className="wrapper-details">
      <div className="container">
        <div className="details">
          <img className="country-img" src={map} alt="country-img" />

          <div className="country-text">
            <span className="country-title">
              <h2>{countryData.name.common}</h2>
              <p>
                <br />
                {countryData.code}
                <br />
              </p>
            </span>
            {/* <span className="country-date">
              {countryData.date}
            </span> */}
          </div>
        </div>
      </div>
      {loading === false ? (
        <Country
          key={countryData.code}
          country={countryData}
          officialName={countryData.name.official}
          region={countryData.region}
          nativeName={countryData.name.nativeName.deu.official}
        />
      ) : (
        <img className="spin" src={spinner} alt="virus" />
      )}
    </section>
  );
};

Country.propTypes = {
  img: PropTypes.string,
};
export default CountryInfos;
