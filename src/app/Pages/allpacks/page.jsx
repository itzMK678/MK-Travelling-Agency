"use client";

import React, { useState } from "react";
import PlaceCard from "../../components/PlaceCard";

const AllPacks = () => {
  const [search, setSearch] = useState("");

  const places = [
    {
      id: 1,
      name: "Mountain Escape",
      description: "Beautiful peaceful mountains.",
      price: 120,
      image: "/Nature1.jpg",
    },
    {
      id: 2,
      name: "Beach Paradise",
      description: "Relax near the ocean.",
      price: 150,
      image: "/Nature2.jpg",
    },
    {
      id: 3,
      name: "Forest Retreat",
      description: "Enjoy greenery and fresh air.",
      price: 100,
      image: "/Nature3.png",
    },
    {
      id: 4,
      name: "Mountain Escape",
      description: "Beautiful peaceful mountains.",
      price: 120,
      image: "/Nature1.jpg",
    },
    {
      id: 5,
      name: "Beach Paradise",
      description: "Relax near the ocean.",
      price: 150,
      image: "/Nature2.jpg",
    },
    {
      id: 6,
      name: "Forest Retreat",
      description: "Enjoy greenery and fresh air.",
      price: 100,
      image: "/Nature3.png",
    },
  ];

  const filteredPlaces = places.filter((place) => {
    return (
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.description.toLowerCase().includes(search.toLowerCase()) ||
      place.price.toString().includes(search)
    );
  });

  return (
    <div id="AllPacks" className="py-5 pb-10">
      
      {/* Heading */}
      <div className="m-4 text-center">
        <h1 className="text-[45px] font-bold">Our All Packages</h1>
        <p className="text-[15px] font-normal">
          you can visit anywhere u like with us and we will make sure to give you the best experience and the best price for your trip
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search by name, description, or price..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[300px] md:w-[400px] px-4 py-2 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))
        ) : (
          <p className="text-gray-500 text-lg">No results found 😢</p>
        )}
      </div>
    </div>
  );
};

export default AllPacks;