import { Link, Outlet } from "react-router-dom";

/**
 * ChartsAndMapsRootLayout Component
 * This layout component serves as a wrapper for the charts and maps pages.
 * It displays a heading that links back to the "Charts and Maps" page.
 * The `Outlet` component is used to render child routes.
 */
const ChartsAndMapsRootLayout: React.FC = () => {
  return (
    <>
      {/* Link to the Charts and Maps main page */}
      <Link to={"/charts-maps"}>
        <h1 className="py-4 text-center bg-slate-100 mb-4 font-semibold text-lg">
          Charts And Maps Page
        </h1>
      </Link>

      {/* Outlet component to render child routes */}
      <Outlet />
    </>
  );
};

export default ChartsAndMapsRootLayout;