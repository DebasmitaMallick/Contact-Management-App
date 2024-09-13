import { ReactNode } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";

interface MessageBoxProps {
  children: ReactNode;
  onClose: () => void;
}
const MessageBox: React.FC<MessageBoxProps> = ({ children, onClose }) => {
  return (
    <div className="m-auto w-fit px-8 py-5 mt-4 bg-white-smoke shadow-md rounded-sm relative">
      <button onClick={onClose} className="absolute right-3 top-3 text-slate-500 hover:text-slate-900">
        <CloseIcon />
      </button>
      {children}
    </div>
  );
};

export default MessageBox;
