import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for styling the map
import { useQuery } from "@tanstack/react-query";
import CovidMap from './CovidMap';

// Interface for country information
export interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string; // Assuming flag is included
}

// Interface for COVID-19 data specific to a country
export interface CountryCovidData {
  active: number;
  activePerOneMillion: number;
  cases: number;
  casesPerOneMillion: number;
  continent: string;
  country: string;
  countryInfo: CountryInfo;
  critical: number;
  criticalPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  population: number;
  recovered: number;
  recoveredPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  todayRecovered: number;
  updated: number;
}

const CaseInfo: React.FC = () => {
  // Fetching COVID-19 data for countries with useQuery from Tanstack React Query
  const { isLoading, error, data } = useQuery({
    queryKey: ["countryData"], // Unique key for the query
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/countries") // Fetching data from the provided API URL
        .then((res) => res.json()), // Parsing the response to JSON
  });

  // Handle loading state
  if (isLoading) {
    return <div className='text-center'>Loading...</div>; // Display loading message
  }

  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>; // Display error message if fetch fails
  }

  // Log data for debugging (optional)
  if (data) {
    console.log(data); // Optional: Log the data to console for debugging
  }

  return (
    <div className="w-4/5 h-96 m-auto">
      <h1 className="font-semibold text-center py-4">Global COVID-19 Map</h1>
      <CovidMap data={data} /> {/* Rendering the CovidMap component with fetched data */}
    </div>
  );
};

export default CaseInfo;