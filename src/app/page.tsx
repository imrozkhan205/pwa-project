import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-16 bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div className="text-2xl font-bold">ShopEase</div>
        <nav className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Cart</a>
        </nav>
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
        {[
          { name: "Classic T-Shirt", price: "₹499", img: "/product1.jpg" },
          { name: "Casual Sneakers", price: "₹1499", img: "/product2.jpg" },
          { name: "Stylish Backpack", price: "₹999", img: "/product3.jpg" },
        ].map((product, index) => (
          <div
            key={index}
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
            <p className="text-gray-500 dark:text-gray-300">{product.price}</p>
            <button className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        &copy; 2025 ShopEase. All rights reserved.
      </footer>
    </div>
  );
}
