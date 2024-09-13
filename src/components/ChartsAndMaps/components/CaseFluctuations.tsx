import { useQuery } from "@tanstack/react-query";
import CustomLineChart from "./LineChart";

export interface CaseData {
  [date: string]: number;
}
const CaseFluctuations = () => {
  // Fetch data with useQuery
  const { isLoading, error, data } = useQuery({
    queryKey: ["covidData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
        (res) => res.json()
      ),
  });

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Log data for debugging (optional)
  return (
    <div className="w-4/5 h-96 m-auto">
      <h1 className="text-xl text-center py-4">Case Fluctuations</h1>
      {
        data && <CustomLineChart data={data.cases} />
      }
    </div>
  );
};

export default CaseFluctuations;
