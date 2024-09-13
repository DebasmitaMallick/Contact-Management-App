// src/components/ConfirmDialog.tsx
import React from "react";
import Modal from "react-modal";
import { GrCircleAlert } from "react-icons/gr";
import Button from "./Button";

interface ConfirmDialogProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

Modal.setAppElement("#root");

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,
  onCancel,
  message,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Dialog"
      className="fixed inset-0 flex items-center justify-center bg-slate-600 bg-opacity-50"
      overlayClassName="fixed inset-0 bg-slate-600 bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
        <GrCircleAlert size={100} className="m-auto text-orange-400 mb-4" />
        <div className="mb-4 ">
          <p className="text-2xl pb-2">{message}</p>
          <p className="text-sm">This process cannot be undone</p>
        </div>

        <div className="flex justify-center space-x-2">
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            type="button"
            onClick={onConfirm}
            classes="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
