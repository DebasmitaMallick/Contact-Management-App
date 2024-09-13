import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Contact Manager & COVID-19 Dashboard</h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your contacts efficiently and explore real-time global COVID-19 data.
        </p>
        <p className="text-md text-gray-500">
          Use the navigation bar to access the contact management system or view the COVID-19 dashboard.
        </p>
      </div>
    </div>
  );
};

export default Home;
