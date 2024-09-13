# Contacts Management System

## Running the Application

To run the Contacts Management System locally, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/DebasmitaMallick/Contact-Management-App
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd contacts-management-app
    ```

3. **Install Dependencies**:

    ```bash
    npm install
    ```

4. **Run the Development Server**:

    ```bash
    npm start
    ```

    This will start the application on [http://localhost:3000](http://localhost:3000). Open this URL in your web browser to access the app.

## API Endpoints Used

The application fetches COVID-19 data from the following external APIs:

1. **Historical COVID-19 Data**:
    - **Endpoint**: [Historical Data](https://disease.sh/v3/covid-19/historical/all?lastdays=all)
    - **Description**: Provides historical data on COVID-19 cases globally over a specified period. This data is used to render the line chart displaying case fluctuations.

2. **Country-specific COVID-19 Data**:
    - **Endpoint**: [Country Data](https://disease.sh/v3/covid-19/countries)
    - **Description**: Provides current COVID-19 statistics for each country, including active cases, recovered cases, deaths, and more. This data is used to populate the interactive map with markers for each country.

## Additional Information

- **Contact Management**: Users can view, create, edit, and delete contacts. The application uses Redux Toolkit for state management.
- **Charts and Maps**: Interactive visualizations are powered by Recharts (for charts) and Leaflet (for maps).
