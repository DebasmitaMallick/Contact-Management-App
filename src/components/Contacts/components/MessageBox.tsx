import { IoMdClose as CloseIcon } from "react-icons/io";

interface MessageBoxProps {
  children: any;
  onClose: () => void;
}
const MessageBox = ({ children, onClose }: MessageBoxProps) => {
  return (
    <div className="m-auto w-fit px-8 py-5 mt-4 bg-white-smoke shadow-md rounded-sm relative">
      <button onClick={onClose} className="absolute right-3 top-3">
        <CloseIcon />
      </button>
      {children}
    </div>
  );
};

export default MessageBox;
