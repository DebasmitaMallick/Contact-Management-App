import React from "react";
import { Contact } from "../../../store/contacts";
import { Link } from "react-router-dom";

interface ContactCardProps {
  data: Contact;
}
const ContactCard: React.FC<ContactCardProps> = ({ data }) => {
  return (
    <Link to={data.id.toString()} state={data}>
      <div className={`w-fit max-w-[90px] min-w-[88px] h-[56px] px-3  rounded-md grid-cols-1 text-center text-sm flex items-center font-semibold ${data.status === 'active' ? 'bg-emerald-50' : 'bg-orange-100'}`}>
        {data.firstName} {data.lastName}
      </div>
    </Link>
  );
};

export default ContactCard;
