import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";
import { motion } from "framer-motion";

function Product() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { addItem } = useCart();

  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
            {product.isNew && (
              <span className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                New
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-xl text-gray-600">by {product.artist}</p>
            <p className="text-2xl font-bold text-indigo-600">{formatINR(product.price)}</p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-600">{product.description || "No description available."}</p>
            </div>

            {product.tags && (
              <div className="flex gap-2 flex-wrap">
                {product.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="space-y-4">
              <button 
                onClick={() => addItem(product, 1)} 
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Add to Cart
              </button>
              
              <button 
                className="w-full border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        {/* Moved Sections: Find Your Perfect Artwork + Shop by Category */}
        <section className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Artwork</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Search through thousands of unique pieces from talented artists worldwide
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input type="text" placeholder="Search for artworks, artists, or categories..." className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                </div>
                <div className="md:w-48">
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="">All Categories</option>
                    <option value="paintings">Paintings</option>
                    <option value="sculptures">Sculptures</option>
                    <option value="handicrafts">Handicrafts</option>
                    <option value="pottery">Pottery</option>
                    <option value="jewelry">Jewelry</option>
                  </select>
                </div>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-medium shadow">
                  Search
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore our diverse collection of artistic categories</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[{ name: "Paintings", icon: "🎨", count: 45, color: "from-indigo-500 to-indigo-600" }, { name: "Sculptures", icon: "🗿", count: 23, color: "from-teal-500 to-teal-600" }, { name: "Handicrafts", icon: "🛠️", count: 67, color: "from-pink-500 to-pink-600" }, { name: "Pottery", icon: "🏺", count: 34, color: "from-sky-500 to-sky-600" }, { name: "Jewelry", icon: "💎", count: 28, color: "from-purple-500 to-pink-500" }].map((category, index) => (
              <motion.div key={category.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -5, scale: 1.03 }} className="group cursor-pointer">
                <div className={`bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} items</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Referred Products */}
        <section className="py-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Referred Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 8).map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{p.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">by {p.artist}</p>
                  <p className="font-medium text-indigo-600">{formatINR(p.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Product;