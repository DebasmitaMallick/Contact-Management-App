import React from "react";
import { Contact } from "../../../store/contacts";
import { Link } from "react-router-dom";
import Button from "../../Button";
import { FaCircle } from "react-icons/fa";

// Define the props for ContactCard component
interface ContactCardProps {
  data: Contact; // Data for a single contact
}

// ContactCard component to display contact details in a card format
const ContactCard: React.FC<ContactCardProps> = ({ data }) => {
  return (
    <div
      className={`w-fit min-w-80 h-56 rounded-md text-lg font-semibold flex flex-col items-center ${
        // Conditional styling based on contact status
        data.status === "active" ? "bg-emerald-50" : "bg-orange-100"
      }`}
    >
      <div className="pt-6 pb-10 text-center">
        {/* Display contact's first and last name */}
        <div>
          {data.firstName} {data.lastName}
        </div>
        <div>
          {/* Display status indicator with a color depending on the status */}
          <FaCircle color={data.status === "active" ? "green" : "red"} className="inline-block" />{" "} {data.status}
        </div>
      </div>
      {/* Link to contact details page */}
      <Link to={data.id.toString()} state={data}>
        <Button>Details</Button>
      </Link>
    </div>
  );
};

export default ContactCard;