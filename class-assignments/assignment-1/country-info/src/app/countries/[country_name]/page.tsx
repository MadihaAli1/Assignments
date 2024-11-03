import { countriesData, Country } from "../../data/countriesData";
type Props = {
  params: {
    country_name: string;
  };
};

const CountryDetailPage = ({ params }: Props) => {
  const country: Country | undefined =
    countriesData[params.country_name.toLowerCase()];

  if (!country) {
    return <h1 className="text-white text-center">Country not found.</h1>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-6">{country.name}</h1>
      <div className="flex flex-grow items-center justify-center">
        <div className="space-y-2 text-lg text-center">
          <p>
            <span className="text-blue-400">Population - </span>{" "}
            {country.population}
          </p>
          <p>
            <span className="text-blue-400">Capital - </span> {country.capital}
          </p>
          <p>
            <span className="text-blue-400">Official Language - </span>{" "}
            {country.language}
          </p>
          <p>
            <span className="text-blue-400">Country Profile - </span>{" "}
            {country.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
