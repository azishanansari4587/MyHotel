import { useState } from "react";
import { submitCheckin } from "../api/api";
import { useNavigate } from "react-router-dom";

const WebCheckin = () => {
  const [aadhaarNumbers, setAadhaarNumbers] = useState([""]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newNumbers = [...aadhaarNumbers];
    newNumbers[index] = value;
    setAadhaarNumbers(newNumbers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitCheckin({ userId: user.id, aadhaarNumbers });
    alert("Web Check-in Successful!");
    navigate("/hotels");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Web Check-in</h2>
      {aadhaarNumbers.map((num, index) => (
        <input
          key={index}
          type="number"
          placeholder="Aadhaar Number"
          value={num}
          onChange={(e) => handleChange(index, e.target.value)}
          className="block w-full p-2 border mt-2"
          required
        />
      ))}
      <button onClick={() => setAadhaarNumbers([...aadhaarNumbers, ""])} className="bg-gray-500 text-white p-2 mt-2">+ Add Member</button>
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 mt-2">Submit Check-in</button>
    </div>
  );
};

export default WebCheckin;
