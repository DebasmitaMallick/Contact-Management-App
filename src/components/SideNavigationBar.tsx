import { NavLink } from "react-router-dom";
import { MdContacts } from "react-icons/md";

const SideNavigationBar: React.FC = () => {
    let linkClasses = "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    let activeClass = "bg-gray-100"
    return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => `${linkClasses} ${isActive ? activeClass : undefined}`}
            >
              <MdContacts className="text-gray-500 group-hover:text-gray-900" />
              <span className="flex-1 ms-3 whitespace-nowrap">Contacts</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/charts-maps"
              className={({ isActive }) => `${linkClasses} ${isActive ? activeClass : undefined}`}
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Charts and Maps</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNavigationBar;
