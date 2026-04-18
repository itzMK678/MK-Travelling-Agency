"use client";

import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer travel packages, hotel bookings, and guided tours.",
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
    {
      question: "Are your packages customizable?",
      answer:
        "Yes, you can customize packages according to your needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className=" w-full mx-auto p-6">
      <h1 className=" text-black text-3xl font-bold text-center mb-6 py-2 rounded-lg">
        FAQs
      </h1>

      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className="mb-4 border border-gray-300 rounded-xl p-4 cursor-pointer transition-all duration-300 bg-white"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">
                {faq.question}
              </h2>

              <span className="text-xl font-bold">
                {isActive ? "−" : "+"}
              </span>
            </div>

            {/* Answer (animated) */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isActive ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQs;