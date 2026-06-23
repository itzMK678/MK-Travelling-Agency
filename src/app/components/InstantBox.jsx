"use client";
import React, { useState } from "react";

const InstantBox = () => {
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    days: "",
    place: "",
    persons: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      ...(e.target.name === "days" && { place: "" }),
    });
  };

  const placeOptions = {
    "1": ["Murree"],
    "3": ["Swat", "Murree"],
    "5": ["Hunza"],
    "7": ["Skardu"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(
`🧳 New Booking Request

 Name: ${formData.name}
CNIC: ${formData.cnic}
Persons: ${formData.persons}
Days: ${formData.days}
Place: ${formData.place}

Please confirm availability.`
    );

    const whatsappURL = `https://wa.me/923326325661?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="w-full flex justify-center items-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-[320px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
      >
        <h2 className="text-xl font-semibold text-center mb-4 text-black">
          Instant Booking
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 rounded-lg bg-transparent border border-gray-300 text-black outline-none"
        />

        {/* CNIC */}
        <input
          type="text"
          name="cnic"
          placeholder="Enter CNIC"
          value={formData.cnic}
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 rounded-lg bg-transparent border border-gray-300 text-black outline-none"
        />

        {/* Persons */}
        <input
          type="text"
          name="persons"
          placeholder="Enter Number of Persons"
          value={formData.persons}
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 rounded-lg bg-transparent border border-gray-300 text-black outline-none"
        />

        {/* Days */}
        <select
          name="days"
          value={formData.days}
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 rounded-lg bg-transparent border border-gray-300 text-black outline-none"
        >
          <option value="">Select Days</option>
          <option value="1">1 Day</option>
          <option value="3">3 Days</option>
          <option value="5">5 Days</option>
          <option value="7">7 Days</option>
        </select>

        {/* Places */}
        <select
          name="place"
          value={formData.place}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 rounded-lg bg-transparent border border-gray-300 text-black"
          disabled={!formData.days}
        >
          <option value="">Select Place</option>
          {placeOptions[formData.days]?.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-2 bg-[#a5bfef] hover:bg-[#8aa8d9] rounded-lg text-white font-semibold"
        >
          Send on WhatsApp
        </button>
      </form>
    </div>
  );
};

export default InstantBox;