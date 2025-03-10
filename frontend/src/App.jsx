import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import HotelList from "./pages/HotelList";
import WebCheckin from "./pages/WebCheckin";
import './App.css'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/checkin" element={<WebCheckin />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
