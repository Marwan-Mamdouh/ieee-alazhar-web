import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, ScrollToTop } from "./component";
import {
	Home,
	About,
	Events,
	Committees,
	Board,
	EventDetails,
	ContactUs,
	JoinUs,
} from "./pages";

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
			<Footer />
		</BrowserRouter>
	);
}

export default App;
