import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ContactCard from "./ContactCard";
import MessageBox from "./MessageBox";
import { useState } from "react";

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [showMessage, setShowMessage] = useState(true);
  const handleClose = () => setShowMessage(false);
  if (contacts.length === 0 && showMessage) {
    return (
      <MessageBox onClose={handleClose}>
        <p>No Contact Found</p>
        <p>
          Please add contact from <strong>Create Contact</strong> Button
        </p>
      </MessageBox>
    );
  }
  return (
    <div className={`grid xl:grid-cols-10 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 gap-3 p-5`}>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} data={contact} />
      ))}
    </div>
  );
};

export default ContactList;
