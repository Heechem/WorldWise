import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";

const App = () => {
  return (
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
        />{" "}
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="app"
          element={<AppLayout />}
        >
          <Route
            path="cities"
            element={<p>List of cities</p>}
          />
          <Route
            path="countrie"
            element={<p>Countries</p>}
          />
          <Route
            path="form"
            element={<p>Form</p>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
