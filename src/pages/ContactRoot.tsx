import { Link, Outlet } from "react-router-dom"; 
/**
 * ContactRootLayout Component
 * This component serves as a layout for the contact-related pages.
 * It includes a link to the main "Contacts" page and a placeholder (Outlet)
 * where child routes (like viewing contact details or adding a new contact) will be rendered.
 */

const ContactRootLayout: React.FC = () => {
  return (
    <>
      {/* Link component provides navigation to the main "Contacts" page when clicked */}
      <Link to={"/contacts"}>
        {/* Header element styled with Tailwind classes */}
        <h1 className="py-4 text-center bg-slate-100 mb-4 font-semibold text-lg">
          Contact Page
        </h1>
      </Link>

      {/* The Outlet component renders the child route components defined within the Contact section */}
      <Outlet />
    </>
  );
};

export default ContactRootLayout;
// Exporting the ContactRootLayout component to be used in the routing structure
