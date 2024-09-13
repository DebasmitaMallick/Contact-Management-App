import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Button from "../Button";
import ContactList from "./components/ContactList";
import { useDispatch } from "react-redux";
import { Contact, contactActions } from "../../store/contacts";
import { toast } from "react-toastify";

const Contacts = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const handleCreateContact = (contactData: Contact) => {
    dispatch(contactActions.addContact(contactData));
    toast.success("New contact added!");
    navigate("/contacts");
  }

  return (
    <div className="pt-10">
      {mode === "create-contact" ? (
        <ContactForm onSubmit={handleCreateContact} />
      ) : (
        <>
          <Link to="?mode=create-contact" className="flex justify-center">
            <Button>Create Contact</Button>
          </Link>
          <ContactList />
        </>
      )}
    </div>
  );
};

export default Contacts;
