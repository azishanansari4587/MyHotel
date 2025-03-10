

// server.js
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");


const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5001;
const SECRET_KEY = process.env.SECRET_KEY;



app.use(cors());
app.use(express.json());

//! User Registration
app.post("/register", async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: { email, password: hashedPassword }
        });
        res.json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(400).json({ error: "User already exists" });
    }
});

//! User Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});


//! Post Hotel Details
app.post("/addHotels", async (req, res) => {
    const { name, location } = req.body;
    try {
        const hotel = await prisma.hotel.create({
            data: { name, location }
        });
        res.json({ message: "Hotel added successfully!", hotel });
    } catch (error) {
        res.status(400).json({ error: "Hotel already exists" });
    }
});

//! Fetch Hotels
app.get("/hotels", async (req, res) => {
    const hotels = await prisma.hotel.findMany();
    res.json(hotels);
});

//! Book Hotel
app.post("/book", async (req, res) => {
    const { userId, hotelId } = req.body;
    try {
        const booking = await prisma.booking.create({
            data: { userId, hotelId }
        });
        res.json({ message: "Hotel booked successfully!", booking });
    } catch (error) {
        res.status(400).json({ error: "Booking failed" });
    }
});

//! Web Check-in
app.post("/checkin", async (req, res) => {
    const { bookingId, aadhaar } = req.body;
    try {
        const booking = await prisma.booking.update({
            where: { id: bookingId },
            data: { checkIn: true, aadhaar }
        });
        res.json({ message: "Checked in successfully!", booking });
    } catch (error) {
        res.status(400).json({ error: "Check-in failed" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
