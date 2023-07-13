import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import City from './components/City';
import CityList from './components/CityList';
import CountriesList from './components/CoutriesList';
import Form from './components/Form';
import AppLayout from './pages/AppLayout';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Product';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';

const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Homepage />}
            />
            <Route
              path="product"
              element={<Product />}
            />
            <Route
              path="pricing"
              element={<Pricing />}
            />
            <Route
              path="*"
              element={<PageNotFound />}
            />{' '}
            <Route
              path="login"
              element={<Login />}
            />
            <Route
              path="app"
              element={<AppLayout />}
            >
              <Route
                index
                element={
                  <Navigate
                    replace
                    to="cities"
                  />
                }
              />
              <Route
                path="cities/:id"
                element={<City />}
              />
              <Route
                path="cities"
                element={<CityList />}
              />
              <Route
                path="countries"
                element={<CountriesList />}
              />
              <Route
                path="form"
                element={<Form />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
};

export default App;
