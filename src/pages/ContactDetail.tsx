import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Contact, contactActions } from "../store/contacts"; // Importing Contact type and contact actions
import Button from "../components/Button"; // Custom button component
import { useDispatch } from "react-redux";
import { toast } from "react-toastify"; // For notifications
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri"; // Importing icons for delete
import { MdOutlineEdit as EditIcon } from "react-icons/md"; // Importing icons for edit
import ConfirmDialog from "../components/ConfirmModal"; // Confirmation modal for delete action

/**
 * ContactDetailPage Component
 * This page displays the details of a selected contact, with options to edit or delete the contact.
 * It handles deletion with a confirmation dialog and uses React Router and Redux for navigation and state management.
 */
const ContactDetailPage: React.FC = () => {
  const location = useLocation(); // Getting the current location (used to pass data from the contact list)
  const data = location.state as Contact; // Type assertion to treat the passed data as a Contact type
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
  const navigate = useNavigate(); // Hook to navigate programmatically

  const [isDialogOpen, setIsDialogOpen] = useState(false); // Local state to manage dialog visibility

  // Function to open the delete confirmation dialog
  const openDialog = () => setIsDialogOpen(true);

  // Function to close the delete confirmation dialog
  const closeDialog = () => setIsDialogOpen(false);

  // Function to handle confirmed deletion of the contact
  const handleConfirmDelete = () => {
    dispatch(contactActions.deleteContact(data.id)); // Dispatching Redux action to delete contact
    navigate(".."); // Navigate back to the previous page
    toast.info("Contact Deleted"); // Show toast notification
    closeDialog(); // Close the dialog
  };

  // Function to handle cancelation of the delete action
  const handleCancelDelete = () => {
    console.log('Cancelled'); // Optional: Log cancelation action
    closeDialog(); // Close the dialog
  };

  // If no contact data is available, render a fallback message
  if (!data) {
    return <div>No contact data available.</div>;
  }

  // Function to open the confirmation dialog when delete button is clicked
  const handleDelete = () => {
    openDialog();
  };

  return (
    <div className="pl-4">
      {/* Displaying the contact details with labels for each field */}
      <div className="font-semibold text-lg text-slate-700">
        <div>
          <span className="inline-block min-w-32">First Name: </span>
          {data.firstName}
        </div>
        <div>
          <span className="inline-block min-w-32">Last Name: </span>
          {data.lastName}
        </div>
        <div>
          <span className="inline-block min-w-32">Status: </span>
          <span
            className={`${
              data.status === "active" ? "text-green-500" : "text-orange-400"
            } capitalize`}
          >
            {data.status}
          </span>
        </div>
      </div>
      
      {/* Separator line */}
      <hr className="my-4" />
      
      {/* Buttons for editing and deleting the contact */}
      <div className="flex gap-2">
        <Link to="edit" state={data}>
          <Button type="button">
            <EditIcon size={20} />
          </Button>
        </Link>
        <Button
          type="button"
          onClick={handleDelete}
          classes="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          <DeleteIcon size={20} />
        </Button>

        {/* ConfirmDialog component for handling delete confirmation */}
        <ConfirmDialog
          isOpen={isDialogOpen} // Control the visibility of the dialog
          onRequestClose={closeDialog} // Function to close the dialog
          onConfirm={handleConfirmDelete} // Action when delete is confirmed
          onCancel={handleCancelDelete} // Action when delete is canceled
          message="Delete this contact?" // Message shown in the dialog
        />
      </div>
    </div>
  );
};

export default ContactDetailPage; 
