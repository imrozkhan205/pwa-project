'use client';

import { useState } from "react";
import Image from "next/image";

const products = [
  { id: 1, name: "Classic T-Shirt", price: 499, img: "/product1.jpg" },
  { id: 2, name: "Casual Sneakers", price: 1499, img: "/product2.jpg" },
  { id: 3, name: "Stylish Backpack", price: 999, img: "/product3.jpg" },
];

export default function Home() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  const addToCart = (productId: number) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === productId);
      if (exists) {
        return prev.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id: productId, quantity: 1 }];
      }
    });
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () =>
    cart.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.id);
      return sum + (product?.price || 0) * item.quantity;
    }, 0);

  return (
    <div className="min-h-screen p-8 sm:p-16 bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div className="text-2xl font-bold">ShopEase</div>
        <div className="text-sm">
          🛒 Cart: <strong>{getTotalItems()} item(s)</strong> - ₹{getTotalPrice()}
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Discover Your Style</h1>
        <p className="text-lg mb-6">Trendy products at unbeatable prices.</p>
        <a
          href="#products"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Shop Now
        </a>
      </section>

      {/* Products Section */}
      <section id="products" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-[200px]"
            />
            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500 dark:text-gray-300">₹{product.price}</p>
            <button
              className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <section className="mt-20 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
          <ul className="space-y-4">
            {cart.map((item) => {
              const product = products.find((p) => p.id === item.id);
              if (!product) return null;
              return (
                <li key={item.id} className="flex justify-between items-center">
                  <span>
                    {product.name} x {item.quantity}
                  </span>
                  <span>₹{product.price * item.quantity}</span>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 font-semibold">Total: ₹{getTotalPrice()}</p>
        </section>
      )}

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        &copy; 2025 ShopEase. All rights reserved.
      </footer>
    </div>
  );
}
