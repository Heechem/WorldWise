import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

import City from './components/City';
import CityList from './components/CityList';
import CountriesList from './components/CoutriesList';
import Form from './components/Form';
import SpinnerFullPage from './components/SpinnerFullPage';

// import AppLayout from './pages/AppLayout';
// import Homepage from './pages/Homepage';
// import Login from './pages/Login';
// import PageNotFound from './pages/PageNotFound';
// import Pricing from './pages/Pricing';
// import Product from './pages/Product';

const Homepage = lazy(() => import('./pages/Homepage'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Login = lazy(() => import('./pages/Login'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AppLayout = lazy(() => import('./pages/AppLayout'));

const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
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
                element={
                  <ProtectedRoute>
                    <AppLayout />{' '}
                  </ProtectedRoute>
                }
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
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
};

export default App;
