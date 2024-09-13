import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  return (
    <div className={`grid xl:grid-cols-10 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 gap-3 p-5`}>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} data={contact} />
      ))}
    </div>
  );
};

export default ContactList;
