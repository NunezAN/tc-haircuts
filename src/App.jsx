import Header from "./components/Header";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <div className="mx-auto font-italiana min-h-screen overflow-hidden overflow-y-scroll font-black">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </div>
  );
}

export default App;
