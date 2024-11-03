import Link from "next/link";

const CountryListPage = () => {
  const countries = ["Pakistan", "India", "China", "Japan", "Italy"];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mt-4 mb-2">Country List</h1>
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl font-bold mb-6">Select country</h1>
        <ul className="space-y-4">
          {countries.map((country) => (
            <li key={country} className="text-lg">
              <Link
                href={`/countries/${country}`}
                className=" text-blue-400 hover:text-blue-600"
              >
                {country.charAt(0).toUpperCase() + country.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryListPage;
