import CaseFluctuations from "./components/CaseFluctuations";
import CaseInfo from "./components/CaseInfo";

const ChartsAndMaps: React.FC = () => {
  return (
    <div className="flex flex-col gap-20">
      <CaseFluctuations />
      <CaseInfo />
    </div>
  );
};

export default ChartsAndMaps;
