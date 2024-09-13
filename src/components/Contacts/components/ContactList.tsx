import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ContactCard from "./ContactCard";
import MessageBox from "./MessageBox";
import { useState } from "react";

const ContactList: React.FC = () => {
  // Retrieve contacts from the Redux store
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  // Local state to control the visibility of the message box
  const [showMessage, setShowMessage] = useState(true);

  // Handler to close the message box
  const handleClose = () => setShowMessage(false);

  // If there are no contacts and the message box should be shown
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

  // Render the list of contacts as cards
  return (
    <div className="grid grid-cols-2 gap-3 p-5 justify-items-center">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} data={contact} />
      ))}
    </div>
  );
};

export default ContactList;
