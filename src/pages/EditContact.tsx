import ContactForm from '../components/Contacts/components/ContactForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Contact, contactActions } from '../store/contacts';
import { toast } from 'react-toastify';

/**
 * EditContactPage Component
 * This page component allows the user to edit an existing contact.
 * It retrieves the contact data passed via `useLocation` and submits the updated data.
 */
const EditContactPage: React.FC = () => {
  // Retrieve the current contact data from the route's state
  const location = useLocation();
  const { state: data } = location; // Extract the contact data from state

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * handlEditContact - Handles editing a contact
   * This function dispatches the updated contact data to the Redux store
   * and navigates back to the previous page with the updated data.
   * It also displays a success notification using toast.
   */
  const handlEditContact = (updatedData: Contact) => {
    // Dispatch the updated contact to the Redux store
    dispatch(contactActions.updateContact(updatedData));
    
    // Navigate back to the previous page with updated contact data
    navigate('..', { state: updatedData });
    
    // Display a success toast message
    toast.success('Saved Changes');
  };

  return (
    // Render the contact form and pass the existing contact data to be edited
    <ContactForm onSubmit={handlEditContact} data={data} />
  );
};

export default EditContactPage;