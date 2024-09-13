import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  return (
    <div className="grid grid-cols-3 gap-3 p-5">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} data={contact} />
      ))}
    </div>
  );
};

export default ContactList;
