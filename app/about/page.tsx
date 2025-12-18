import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us | ShopEase',
  description: 'Learn more about ShopEase, our story, and our features',
};

export default function AboutPage() {
  return (
    <main className="bg-gray-50">

      {/* 🌟 HERO / OUR STORY */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ShopEase was built with one simple goal — to make online shopping
            easier, smarter, and more enjoyable. From fashion to electronics,
            we bring quality products, seamless experience, and modern design
            together in one place.
          </p>
        </div>
      </section>

      {/* 🚀 FEATURES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="text-3xl mb-4">🔔</div>
              <h3 className="font-semibold text-lg mb-2">
                Wishlist & Smart Tracking
              </h3>
              <p className="text-gray-600 text-sm">
                Save your favorite items to wishlist and access them anytime.
                Never miss what you love.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="text-3xl mb-4">🎛️</div>
              <h3 className="font-semibold text-lg mb-2">
                Advanced Filtering
              </h3>
              <p className="text-gray-600 text-sm">
                Quickly find products using categories, price range, and sorting
                for a smooth shopping experience.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg mb-2">
                Fast & Secure Checkout
              </h3>
              <p className="text-gray-600 text-sm">
                Enjoy a simple, secure, and fast checkout process designed for
                modern users.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🎯 CTA SECTION */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Start Visualizing Your Next Purchase Today
          </h2>
          <p className="mb-6 text-blue-100">
            Discover products curated just for you.
          </p>
          <Link
            href="/products"
            className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Start Shopping →
          </Link>
        </div>
      </section>

    </main>
  );
}
