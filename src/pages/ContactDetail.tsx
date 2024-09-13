import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Contact, contactActions } from "../store/contacts";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { RiDeleteBin6Line as DeleteIcon } from "react-icons/ri";
import { MdOutlineEdit as EditIcon } from "react-icons/md";
import ConfirmDialog from "../components/ConfirmModal";

const ContactDetailPage: React.FC = () => {
  const location = useLocation();
  const data = location.state as Contact; // Type assertion
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleConfirmDelete = () => {
    // Handle confirmation action
    dispatch(contactActions.deleteContact(data.id));
    navigate("..");
    toast.info("Contact Deleted");
    closeDialog();
  };

  const handleCancelDelete = () => {
    // Handle cancel action
    console.log('Cancelled');
    closeDialog();
  };

  if (!data) {
    return <div>No contact data available.</div>; // Handle the case where data might be undefined
  }

  const handleDelete = () => {
    openDialog();
  };

  return (
    <div className="pl-4">
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
      <hr className="my-4" />
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
        <ConfirmDialog
          isOpen={isDialogOpen}
          onRequestClose={closeDialog}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          message="Delete this contact?"
        />
      </div>
    </div>
  );
};

export default ContactDetailPage;
