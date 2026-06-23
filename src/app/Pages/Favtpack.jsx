"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlaceCard from "../components/PlaceCard";
import { places } from "../../data/packages";
gsap.registerPlugin(ScrollTrigger);

const Favtpack = () => {
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const featuredPlaces = places.filter(
  (place) => place.special === true
);

  useEffect(() => {
    // 🔹 Heading parallax
    gsap.fromTo(
      ".section-title",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    // 🔹 Cards move WITH scroll
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let fromAnim;
      let toAnim;

      if (index === 0) {
        fromAnim = { x: 200, opacity: 0 };
        toAnim = { x: 0, opacity: 1 };
      } else if (index === 1) {
        fromAnim = { y: 140, opacity: 0 };
        toAnim = { y: 0, opacity: 1 };
      } else {
        fromAnim = { x: -100, opacity: 0 };
        toAnim = { x: 0, opacity: 1 };
      }

      gsap.fromTo(card, fromAnim, {
        ...toAnim,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 50%",
          scrub: true, 
        },
      });
    });
  }, []);

  return (
    <div ref={sectionRef} className="py-40 pb-10 overflow-hidden">
      {/* Heading */}
      <div className="overflow-hidden m-4 text-center">
        <h1 className="section-title text-[45px] font-bold">
          Our Best Offers
        </h1>
        <p className="text-[15px] font-normal">
          there are some of our most popular destinations in different seasons.
          Where most of people like to go in specific season
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-5 justify-center">
        {featuredPlaces.map((place, index) => (
          <div
            key={place.id}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <PlaceCard place={place} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favtpack;