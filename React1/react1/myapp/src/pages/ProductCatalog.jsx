import React from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const ProductCatalog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Arts & Crafts Store</h1>
          <p className="text-gray-600 text-lg">Discover unique handmade treasures from talented artisans</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Products by Category */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categoryProducts = products.filter(product => product.category === category);
            
            return (
              <section key={category}>
                <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-gray-900">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categoryProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
