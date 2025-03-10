import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookingsByUser } from "../api/api";

const Booking = () => {
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchBooking = async () => {
      const data = await bookingsByUser(user.id);
      if (data.length) {
        setBooking(data[0]);
      }
    };
    fetchBooking();
  }, [user.id]);


  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl">Your Booking</h2>
      {booking ? (
        <div className="border p-4 my-2">
          <p><strong>Hotel ID:</strong> {booking.hotelId}</p>
          <p><strong>Check-in Date:</strong> {booking.checkInDate.split("T")[0]}</p>
          <p><strong>Check-out Date:</strong> {booking.checkOutDate.split("T")[0]}</p>
          <p><strong>Members:</strong> {booking.members}</p>
          <button className="btn mt-4 text-white bg-blue-500 border p-3" onClick={() => navigate("/checkin")}>Proceed to Check-in</button>
        </div>
      ) : (
        <p>No booking found. Please book a hotel first.</p>
      )}
    </div>
  );
};

export default Booking;
