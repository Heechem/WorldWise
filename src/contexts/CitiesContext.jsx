import { createContext, useContext, useEffect, useState } from "react";

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

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCitites() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("the context is used where it shouldnt");
  return context;
}

export { CitiesProvider, useCitites };
