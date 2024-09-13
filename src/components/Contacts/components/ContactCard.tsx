import React from "react";
import { Contact } from "../../../store/contacts";
import Button from "../../Button";
import { Link } from "react-router-dom";

interface ContactCardProps {
  data: Contact;
}
const ContactCard: React.FC<ContactCardProps> = ({ data }) => {
  return (
    <div className="w-fit px-16 py-10 bg-slate-100 rounded-md grid-cols-1">
      <div>
        Name: {data.firstName} {data.lastName}
      </div>
      <Link to={data.id.toString()} state={data}>
        <Button>Details</Button>
      </Link>
    </div>
  );
};

export default ContactCard;
