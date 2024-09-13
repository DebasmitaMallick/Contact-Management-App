import { Link, Outlet } from "react-router-dom";

const ChartsAndMapsRootLayout = () => {
  return (
    <>
      <Link to={"/charts-maps"}>
        <h1 className="py-4 text-center bg-slate-100 mb-4">
          Charts And Maps Page
        </h1>
      </Link>
      <Outlet />
    </>
  );
};

export default ChartsAndMapsRootLayout;
