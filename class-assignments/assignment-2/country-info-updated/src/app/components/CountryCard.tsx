import React from 'react';
import { Country } from '../data/countriesData';

type CountryCardProps = {
  country: Country;
};

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="space-y-2 text-lg text-center">
      <h1 className="text-4xl font-bold mb-6">{country.name}</h1>
      <p>
        <span className="text-blue-400">Population - </span>
        {country.population}
      </p>
      <p>
        <span className="text-blue-400">Capital - </span>
        {country.capital}
      </p>
      <p>
        <span className="text-blue-400">Official Language - </span>
        {country.language}
      </p>
      <p>
        <span className="text-blue-400">Country Profile - </span>
        {country.description}
      </p>
    </div>
  );
};

export default CountryCard;
