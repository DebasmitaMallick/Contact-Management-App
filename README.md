# Contacts Management System

A modern web application for managing contacts, including functionalities to view, create, edit, and delete contacts. This application also features interactive charts and maps displaying COVID-19 data globally.

## Features

- **Contact Management**:
  - View a list of contacts.
  - Create new contacts.
  - Edit existing contacts.
  - Delete contacts.

- **Interactive Charts**:
  - View COVID-19 case fluctuations over time with a line chart.

- **Interactive Maps**:
  - Visualize COVID-19 data on a global map with country-specific details.

## Technologies Used

- **Frontend**:
  - React
  - TypeScript
  - Redux Toolkit
  - React Router DOM
  - React Query
  - Leaflet (for maps)
  - Recharts (for charts)

- **Backend**:
  - No backend included; data is fetched from external APIs.

- **Styling**:
  - Tailwind CSS

## Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/DebasmitaMallick/Contact-Management-App
    ```

2. **Navigate to the project directory**:

    ```bash
    cd contacts-management-system
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Run the development server**:

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

- **Contacts Page**: View the list of contacts, or click on "Create Contact" to add a new one. Use the "Details" button to view more information about a contact.
- **Edit Contact**: Modify contact details and save changes.
- **Charts and Maps**: Explore global COVID-19 data through interactive charts and maps.

## API Endpoints

- **COVID-19 Data**:
  - [Historical Data](https://disease.sh/v3/covid-19/historical/all?lastdays=all)
  - [Country Data](https://disease.sh/v3/covid-19/countries)

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact [yourname@example.com](mailto:yourname@example.com).
