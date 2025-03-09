import MainPage from "./Pages/MainPage";
import AboutUs from "./Pages/AboutUs";
import Error from "./Pages/Error";
import { Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
