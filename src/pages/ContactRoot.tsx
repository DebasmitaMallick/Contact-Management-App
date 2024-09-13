import { Link, Outlet } from "react-router-dom";

const ContactRootLayout: React.FC = () => {
  return (
    <>
      <Link to={"/contacts"}>
        <h1 className="py-4 text-center bg-slate-100 mb-4 font-semibold text-lg">Contact Page</h1>
      </Link>
      <Outlet />
    </>
  );
};

export default ContactRootLayout;
