import { createContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000/";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There is an error ");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
}
