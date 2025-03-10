# MyHotel - Hotel Booking System

## 📌 Project Overview
MyHotel is a full-stack hotel booking system where users can register, book hotels, and perform web check-ins using their Aadhaar number. The project is built using **React** for the frontend and **Node.js with Prisma ORM & PostgreSQL** for the backend.

## 🔗 Features
- **User Registration & Authentication** (JWT-based authentication)
- **Hotel Management** (Add and list hotels)
- **Booking System** (Users can book hotels)
- **Web Check-in** (Aadhaar-based check-in for users and family members)
- **Fully Responsive UI** (Static JSON for frontend data)
- **API Development & Testing** (Using Postman)

---

## 🚀 Tech Stack
### **Frontend** (React.js)
- React
- Tailwind CSS
- Shadcn UI
- React Router
- Vite

### **Backend** (Node.js + Prisma + PostgreSQL)
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- bcrypt (for password hashing)
- JWT (for authentication)

---

## 🏗️ Installation Guide
### **Prerequisites**
Make sure you have the following installed:
- Node.js (>= 16.x)
- PostgreSQL (Database)
- Prisma CLI
- Git

### **1️⃣ Backend Setup**
1. Clone the repository:
   ```sh
   git clone https://github.com/azishanansari4587/MyHotel.git
   cd MyHotel/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up **.env** file:
   ```sh
   DATABASE_URL="postgresql://user:password@localhost:5432/myhotel"
   JWT_SECRET="your_jwt_secret"
   ```
4. Generate the Prisma Client:
   ```sh
   npx prisma generate
   ```
5. Apply migrations to the database:
   ```sh
   npx prisma migrate dev --name init
   ```
6. Start the server:
   ```sh
   npm start
   ```
   The backend runs on **http://localhost:5000**

---

### **2️⃣ Frontend Setup**
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```
   The frontend runs on **http://localhost:3000**

---

## 📂 Project Structure
```
MyHotel/
├── backend/
│   ├── prisma/ (Database Schema & Migrations)
│   ├── server.js (Main Server File)
│   └── .env
├── frontend/
|   ├── data/
|   |   ├── data.json
│   ├── src/
|   |   ├── assest/
|   |   ├── api/
|   |   ├── lib/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
└── README.md
```

---

## 📌 API Endpoints
### **User Authentication**
| Endpoint          | Method | Description |
|------------------|--------|-------------|
| `/register`      | POST   | Register a new user |
| `/login`         | POST   | Login and receive JWT token |

### **Hotels**
| Endpoint          | Method | Description |
|------------------|--------|-------------|
| `/addHotels`     | POST   | Add a new hotel |
| `/hotels`        | GET    | Fetch all hotels |

### **Booking**
| Endpoint          | Method | Description |
|------------------|--------|-------------|
| `/book`          | POST   | Book a hotel |
| `/checkin`       | POST   | Web check-in |

---

## 🛠 Testing APIs with Postman
1. Open **Postman**
2. Set the `Authorization` header as **Bearer Token** with the JWT
3. Send requests to different API endpoints

---

## 📽️ Demo & Documentation
- **Video Walkthrough:** [🔗 Upload Link]
- **GitHub Repository:** [🔗 https://github.com/azishanansari4587/MyHotel]

---

## 📌 Future Improvements
- Add Payment Gateway for Booking
- Implement Role-Based Access Control (RBAC)
- Integrate Google Maps for Hotel Locations

---

## 🤝 Contribution
Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📞 Contact
For queries or collaborations, reach out to me at:
✉️ Email: [azishanansari4587@gmail.com]

---

Made with ❤️ by Zishan Ansari 🚀

