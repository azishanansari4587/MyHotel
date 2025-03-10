import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { fetchHotels, bookHotel } from "../api/api";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchHotels().then(setHotels);
  }, []);

  const handleBooking = async (hotelId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      //* User not found 
      if (!user) {
        alert("User not found. Please log in.");
        return;
      }
  
      await bookHotel({
        userId: user.id,
        hotelId,
        checkInDate: new Date().toISOString(), // Convert to proper format
        checkOutDate: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(), // Checkout next day
        members: 2,
      });
  
      console.log("Booking Successful: ",user.id, hotelId);
      
       // Show toast and delay navigation properly
       alert("Booking Successful...!");
        navigate("/bookings");
    } catch (error) {
      alert("Booking failed! Please try again.");
      console.error("Booking Error:", error);
    }
  };

  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold py-12">Available Hotels</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      
      {hotels.map((hotel) => (
        <Card className="mb-4 w-[380px]" key={hotel.id}>
            <CardHeader>{hotel.name}</CardHeader>
            <CardContent>
                <img src={hotel.image} alt={hotel.name} className="w-full h-[250px] border rounded-lg"/>
                <p className="mt-2">Location: {hotel.location}</p>
                <p className="mt-2">Price: {hotel.price}</p>
                <p className="mt-2">Amenities: {hotel.amenities.join(",  ")}</p>
            </CardContent>
          <CardFooter>
          <Button onClick={() => handleBooking(hotel.id)} className="bg-green-500 text-white p-2 mt-2 w-full">Book Now</Button>
          </CardFooter>
          
        </Card>
      ))}
    </div>
    </div>
    
  );
};

export default HotelList;
