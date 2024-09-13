import 'leaflet/dist/leaflet.css';
import { useQuery } from "@tanstack/react-query";
import CovidMap from './CovidMap';

export interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string; // Assuming flag is included
}

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
    const { isLoading, error, data } = useQuery({
        queryKey: ["countryData"],
        queryFn: () =>
          fetch("https://disease.sh/v3/covid-19/countries").then(
            (res) => res.json()
          ),
      });
    
      // Handle loading state
      if (isLoading) {
        return <div className='text-center'>Loading...</div>;
      }
    
      // Handle error state
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      // Log data for debugging (optional)
      if (data) {
        console.log(data)
      }

      return (
        <div className="w-4/5 h-96 m-auto">
          <h1 className="font-semibold text-center py-4">Global COVID-19 Map</h1>
          <CovidMap data={data} />
        </div>
      );
};

export default CaseInfo;
