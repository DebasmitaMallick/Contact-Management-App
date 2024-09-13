import { useQuery } from "@tanstack/react-query";
import CustomLineChart from "./LineChart";

// Interface for case data where the key is a date string and the value is the number of cases
export interface CaseData {
  [date: string]: number;
}

const CaseFluctuations: React.FC = () => {
  // Fetching data with useQuery from Tanstack React Query
  const { isLoading, error, data } = useQuery({
    queryKey: ["covidData"], // Unique key for the query
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
        .then((res) => res.json()), // Fetching and parsing the response to JSON
  });

  // Handling loading state
  if (isLoading) {
    return <div className="text-center">Loading...</div>; // Displaying a loading message
  }

  // Handling error state
  if (error) {
    return <div>Error: {error.message}</div>; // Displaying error message if fetch fails
  }

  return (
    <div className="w-4/5 h-96 m-auto">
      <h1 className="font-semibold text-center py-4">Case Fluctuations</h1>
      {
        data && <CustomLineChart data={data.cases} /> // Rendering the line chart if data is available
      }
    </div>
  );
};

export default CaseFluctuations;