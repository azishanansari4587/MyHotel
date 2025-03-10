

export const fetchHotels = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/hotels`);
  return res.json();
};

export const registerUser = async (user) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const loginUser = async (email) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/user?email=${email}`);
  const data = await res.json();
  return data.length ? data[0] : null;
};

export const bookHotel = async (booking) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  });
  return res.json();
};

export const bookingsByUser = async (userId) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings?userId=${userId}`);
  return res.json();
  // return data.length ? data[0] : null;
}

export const submitCheckin = async (checkin) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/checkins`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(checkin),
  });
  return res.json();
};
