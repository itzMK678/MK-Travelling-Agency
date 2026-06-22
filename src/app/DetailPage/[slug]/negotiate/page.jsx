import React from "react";

const Page = ({ params }) => {
  return (
    <div className="min-h-screen flex items-center justify-center text-2xl">
      Negotiate for package id: {params.slug}
    </div>
  );
};

export default Page;

