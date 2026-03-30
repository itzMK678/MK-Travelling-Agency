import React from 'react'
import PlaceCard from '../components/PlaceCard';
import Image from 'next/image';
import pic from "../../../public/Nature1.jpg";
const Favtpack = () => {
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
    image:"/Nature2.jpg",
  },
  {
    id: 3,
    name: "Beach Paradise",
    description: "Relax near the ocean.",
    price: 150,
    image:"/Nature3.png",
  },
];


  return (
    <div className='py-15 pb-10' >
    <div className='m-4 text-center'>
    <h1 className='text-[45px] font-bold'>Our Best Offers </h1>
    <p  className='text-[15px] font-normal'>there are some of our most popular destinations in different seasons . Where most of people like to go in specific seaosn</p>
   </div>
    <div className='flex flex-wrap gap-5 justify-center '>
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
    </div>
  )
}

export default Favtpack