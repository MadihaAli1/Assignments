import { countriesData, Country } from "../../data/countriesData";
import CountryCard from "../../components/CountryCard";

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
      <CountryCard country={country} />
    </div>
  );
};

export default CountryDetailPage;

