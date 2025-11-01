import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-indigo-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
  >
    <FaChevronLeft className="w-5 h-5" />
  </motion.button>
);

const NextArrow = ({ onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-indigo-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
  >
    <FaChevronRight className="w-5 h-5" />
  </motion.button>
);

const FashionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fashion-focused products with enhanced data
  const fashionProducts = [
    {
      ...products[0],
      tagline: "Premium Quality Canvas Art",
      discountText: "UNDER ₹999",
      originalPrice: 1299,
      price: 899,
      discount: 31
    },
    {
      ...products[1],
      tagline: "Modern Abstract Collection",
      discountText: "UNDER ₹799",
      originalPrice: 1099,
      price: 699,
      discount: 36
    },
    {
      ...products[2],
      tagline: "Handcrafted Landscape Art",
      discountText: "UNDER ₹1199",
      originalPrice: 1599,
      price: 1099,
      discount: 31
    },
    {
      ...products[3],
      tagline: "Contemporary Portrait Series",
      discountText: "UNDER ₹999",
      originalPrice: 1299,
      price: 899,
      discount: 31
    },
    {
      ...products[4],
      tagline: "Elegant Sculpture Collection",
      discountText: "UNDER ₹1999",
      originalPrice: 2599,
      price: 1899,
      discount: 27
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
        i === currentSlide ? 'bg-indigo-600 scale-125' : 'bg-white/50'
      }`} />
    ),
    appendDots: dots => (
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <Slider {...settings}>
        {fashionProducts.map((product, index) => (
          <div key={product.id} className="relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundPosition: 'center center'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-[70vh] md:h-[80vh] flex items-center">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white"
                  >
                    {/* Product Name */}
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                      {product.title}
                    </h2>
                    
                    {/* Tagline */}
                    <p className="text-xl md:text-2xl text-gray-200 mb-6 font-light">
                      {product.tagline}
                    </p>

                    {/* Price & Discount */}
                    <div className="flex items-center gap-4 mb-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg"
                      >
                        {product.discountText}
                      </motion.div>
                      
                      <div className="text-white">
                        <span className="text-3xl md:text-4xl font-bold">
                          ₹{product.price}
                        </span>
                        <span className="text-lg text-gray-300 line-through ml-2">
                          ₹{product.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <Link
                        to={`/product/${product.id}`}
                        className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        SHOP NOW
                        <FaArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Product Image Overlay (Right Side) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
            >
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* Custom CSS for slick dots */}
      <style jsx global>{`
        .slick-dots {
          bottom: 24px !important;
        }
        .slick-dots li {
          margin: 0 4px !important;
        }
        .slick-dots li button:before {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default FashionSlider;

