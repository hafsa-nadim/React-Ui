import { useState } from "react";
import "./App.css";
import key1 from "./assets/key1.jpg";
import key2 from "./assets/key2.webp";
import key3 from "./assets/key3.webp";
import key4 from "./assets/key4.jpg";

export default function Products() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Bridal Makeup",
      category: "Bridal",
      price: "25k",
      image: key1,
    },
    {
      id: 2,
      name: "Nikkah Makeup",
      category: "Nikkah",
      price: "12k",
      image: key2,
    },
    {
      id: 3,
      name: "Valima Makeup",
      category: "Valima",
      price: "15k",
      image: key3,
    },
    {
      id: 4,
      name: "Model Makeup",
      category: "Photoshoot",
      price: "6k",
      image: key4,
    },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  
  );

  return (
    
    <div className="p-6">
      {/* Search */}
      <input
        type="text"
        placeholder="Search makeup..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 px-4 py-2 border rounded-lg mb-6"
      />

      {/* Products */}
      <br /><br /><br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-neutral-primary-soft border border-default rounded-base shadow-xs"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-base w-full h-48 object-cover"
            />

            <div className="p-6 text-center">
              <span className="inline-flex items-center bg-brand-softer border border-brand-subtle text-xs font-medium px-2 py-1 rounded-sm">
                Trending
              </span>

              <h5 className="mt-3 text-2xl font-semibold">
                {item.name}
              </h5>

              <p className="text-gray-500 mt-2">{item.category}</p>
              <p className="font-bold mt-1">{item.price}</p>

              <button className="mt-4 inline-flex items-center text-black bg-brand px-4 py-2 rounded-base hover:bg-brand-strong">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-6">No products found</p>
      )}
    </div>
  );
}
