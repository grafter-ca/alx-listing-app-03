import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="flex space-x-4 p-4 bg-gray-800 text-white border-b-2 border-gray-700">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <Link href="about">About Us</Link>
      </nav>
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
     <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition flex flex-col items-center">
      <Card
        title="Cozy Apartment"
        description="A beautiful apartment in the city center."
        imageUrl="/assets/image 1.jpg"
        price={120}
      />
      <Button
        label="Book Now"
        onClick={() => alert("Booked!")}
        variant="primary"
      />
     </article>
     <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition flex flex-col items-center">
      <Card
        title="Cozy Apartment"
        description="A beautiful apartment in the city center."
        imageUrl="/assets/image 1.jpg"
        price={120}
      />
      <Button
        label="Book Now"
        onClick={() => alert("Booked!")}
        variant="primary"
      />
     </article>
     <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition flex flex-col items-center">
      <Card
        title="Cozy Apartment"
        description="A beautiful apartment in the city center."
        imageUrl="/assets/image 1.jpg"
        price={120}
      />
      <Button
        label="Book Now"
        onClick={() => alert("Booked!")}
        variant="primary"
      />
     </article>
    </section>
    </main>
  );
}
