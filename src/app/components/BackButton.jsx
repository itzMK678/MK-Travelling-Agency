"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute z-10 left-25 top-7 bg-red-500 p-3 rounded-full cursor-pointer"
    >
      <ArrowLeft />
    </button>
  );
};

export default BackButton;