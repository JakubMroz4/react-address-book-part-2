import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Dashboard from "./components/Dashboard";
import ContactView from "./components/ContactView";

export const ApiContext = createContext();

function App() {
  const apiUrl = "https://boolean-uk-api-server.fly.dev/JakubMroz4/contact";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("DATA", data);
  }, [data]);

  return (
    <>
      <ApiContext.Provider value={{ data, isLoading }}>
        <header>
          <h1>Address book</h1>
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/contact/:id" element={<ContactView />} />
        </Routes>
      </ApiContext.Provider>
    </>
  );
}

export default App;
