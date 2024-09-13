import React, { FormEvent, useState } from "react";
import Button from "../../Button";
import { Contact } from "../../../store/contacts";

// Define props for ContactForm component
interface ContactFormProps {
  onSubmit: (data: Contact) => void; // Function to handle form submission
  data?: Contact; // Optional contact data for pre-filling the form
}

// Define the shape of form data
interface FormData {
  firstName: string;
  lastName: string;
  status: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, data }) => {
  // Initialize form state with optional pre-filled data
  const [formData, setFormData] = useState<FormData>({
    firstName: data?.firstName || "",
    lastName: data?.lastName || "",
    status: data?.status || "active",
  });

  // Handle input changes and update form state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const contactData = {
      id: data?.id || Math.random(), // Generate a new ID if none exists
      ...formData,
    };
    onSubmit(contactData); // Call the onSubmit function with form data
  };

  return (
    <div className="w-fit px-10 py-8 m-auto shadow-md rounded-md">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="first-name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="first-name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="last-name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="last-name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last Name
            </label>
          </div>
        </div>

        <div className="mb-5">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Status
          </p>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              id="status-active"
              name="status"
              value="active"
              checked={formData.status === "active"}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <label
              htmlFor="status-active"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Active
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="status-inactive"
              name="status"
              value="inactive"
              checked={formData.status === "inactive"}
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <label
              htmlFor="status-inactive"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Inactive
            </label>
          </div>
        </div>

        {/* Submit button */}
        <Button type="submit">Save {data && 'Editted '}Contact</Button>
      </form>
    </div>
  );
};

export default ContactForm;
