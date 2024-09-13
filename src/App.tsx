import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ContactPage from './pages/Contact';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import ContactRootLayout from './pages/ContactRoot';
import ContactDetailPage from './pages/ContactDetail';
import EditContactPage from './pages/EditContact';
import ChartsAndMapsRootLayout from './pages/ChartsAndMapsRoot';
import ChartsAndMapsPage from './pages/ChartsAndMaps';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true, element: <Home />,
        },
        {
          path: 'contacts',
          element: <ContactRootLayout />,
          children: [
            {
              index: true,
              element: <ContactPage />
            },
            {
              path: ':contactId',
              // id: 'contact-detail',
              // loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <ContactDetailPage />,
                  // action: deleteEventAction,
                },
                {
                  path: 'edit',
                  element: <EditContactPage />,
                  // action: manipulateEventAction,
                },
              ],
            },
          ]
        },
        {
          path: 'charts-maps',
          element: <ChartsAndMapsRootLayout />,
          children: [
            {
              index: true,
              element: <ChartsAndMapsPage />
            }
          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
