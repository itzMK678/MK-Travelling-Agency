"use client";

import React, { useState } from "react";
import Image from "next/image";
import compass from "../../../public/Compass.png";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer travel packages, hotel bookings, and guided nature tours.",
    },
    
    {
      question: "How can I book a trip?",
      answer:
        "You can book directly from our website or contact our support team.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, refunds are available based on our cancellation policy.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div  className="bg-gradient-to-b from-[#f8fafc]  to-white" >
<h1 className="text-center text-3xl font-bold">FAQs</h1>
<p className="text-center text-gray-500 mt-2">
  Frequently Asked Questions
</p>
    <div className="flex flex-wrap gap-8 max-w-3xl mx-auto py-16 px-4 space-y-10">
      
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;

        return (
          <div key={index} className="relative">
                    
            {/* ANSWER CARD (comes from below) */}
            <div
              className={`absolute left-0 w-full rounded-['8px'] bg-green-100 px-6 py-5 text-gray-700 shadow-md transition-all duration-500
              ${
                isActive
                  ? "top-16 opacity-100 translate-y-0"
                  : "top-0 opacity-0 -translate-y-4"
              }`}
            >
              {faq.answer}
            </div>

            {/* QUESTION CARD */}
           <div
  onClick={() => toggleFAQ(index)}
  className="p-4 w-['300px'] border border-[#8cb0f3] relative z-10 flex items-center justify-between bg-[#ccdbf7] rounded-[12px] overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition"
>
  <h2 className="text-lg p-3 pr-10 font-semibold text-gray-800">
    {faq.question}
  </h2>

  {/* IMAGE */}
  <div className="absolute right-[-59px] top-1/2 -translate-y-1/2 w-[120px] h-[120px] z-20">
    <Image
      src={compass}
      alt="img"
      fill
      className="object-cover"
    />
  </div>
</div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default FAQs;