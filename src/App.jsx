import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Events from "./Events";
import EventDetails from "./EventDetails.jsx";
import Committees from "./Committees";
import Board from "./Board";
import ContactUs from "./ContactUs"
import JoinUs from "./JoinUs";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      {/* <Section />  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/board" element={<Board />} />
        <Route path="/eventdetails/:id" element={<EventDetails />} />{" "}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
