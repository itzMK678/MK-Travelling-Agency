"use client";

import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer travel packages, hotel bookings, and guided tours.",
    },
    {
      question: "How can I book a trip?",
      answer: "You can book directly from our website or contact our support team.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, refunds are available based on our cancellation policy.",
    },
    {
      question: "Are your packages customizable?",
      answer: "Yes, you can customize packages according to your needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      
      <h1 className="text-3xl font-bold text-center mb-6">FAQs</h1>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 border border-gray-300 rounded-xl p-4 cursor-pointer transition-all duration-300"
          onClick={() => toggleFAQ(index)}
        >
          {/* Question */}
          <h2 className="font-semibold text-lg flex justify-between">
            {faq.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </h2>

          {/* Answer */}
          <p
            className={`mt-2 text-gray-600 transition-all duration-300 ${
              activeIndex === index ? "block" : "hidden"
            }`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;