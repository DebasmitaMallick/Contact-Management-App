import ContactForm from '../components/Contacts/components/ContactForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Contact, contactActions } from '../store/contacts';
import { toast } from 'react-toastify';

const EditContactPage: React.FC = () => {
  const location = useLocation();
  const {state: data} = location;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlEditContact = (updatedData: Contact) => {
    dispatch(contactActions.updateContact(updatedData));
    navigate('..', { state:  updatedData});
    toast.success('Saved Changes');
  }
  return (
    <ContactForm onSubmit={handlEditContact} data={data} />
  )
}

export default EditContactPage