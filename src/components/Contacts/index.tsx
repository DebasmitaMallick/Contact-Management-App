import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Button from "../Button";
import ContactList from "./components/ContactList";
import { useDispatch } from "react-redux";
import { Contact, contactActions } from "../../store/contacts";
import { toast } from "react-toastify";

const Contacts: React.FC = () => {
  // Initialize Redux dispatch and navigation
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Extract query parameters from the URL
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  // Handle the creation of a new contact
  const handleCreateContact = (contactData: Contact) => {
    dispatch(contactActions.addContact(contactData)); // Add the contact to the Redux store
    toast.success("New contact added!"); // Display a success message
    navigate("/contacts"); // Redirect to the contacts list page
  }

  return (
    <div className="pt-10">
      {/* Render ContactForm if the mode is "create-contact", otherwise render the contact list and the create button */}
      {mode === "create-contact" ? (
        <ContactForm onSubmit={handleCreateContact} />
      ) : (
        <>
          {/* Link to switch to contact creation mode */}
          <Link to="?mode=create-contact" className="flex justify-center">
            <Button>Create Contact</Button>
          </Link>
          {/* Render the list of contacts */}
          <ContactList />
        </>
      )}
    </div>
  );
};

export default Contacts;
