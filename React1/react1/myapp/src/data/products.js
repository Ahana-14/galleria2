// src/data/products.js

export const products = [
  // Paintings
  {
    id: 1,
    name: "Sunset Canvas",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center",
    title: "Sunset Canvas",
    artist: "Nature Artist",
    stock: 5,
    isNew: true,
    tags: ["Nature", "Sunset", "Canvas"]
  },
  {
    id: 2,
    name: "Abstract Colors",
    price: 75.50,
    originalPrice: 95.50,
    discount: 21,
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center",
    title: "Abstract Colors",
    artist: "Modern Artist",
    stock: 8,
    isNew: false,
    tags: ["Abstract", "Modern", "Colorful"]
  },
  {
    id: 3,
    name: "Landscape Art",
    price: 120.00,
    originalPrice: 150.00,
    discount: 20,
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Landscape Art",
    artist: "Landscape Master",
    stock: 3,
    isNew: true,
    tags: ["Landscape", "Nature", "Oil"]
  },
  {
    id: 4,
    name: "Modern Portrait",
    price: 95.75,
    originalPrice: 125.75,
    discount: 24,
    category: "Paintings",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center",
    title: "Modern Portrait",
    artist: "Portrait Artist",
    stock: 6,
    isNew: false,
    tags: ["Portrait", "Modern", "Human"]
  },

  // Sculptures
  {
    id: 5,
    name: "Marble Buddha",
    price: 250.00,
    category: "Sculptures",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Marble Buddha",
    artist: "Sculpture Master",
    stock: 2,
    isNew: true,
    tags: ["Marble", "Buddha", "Spiritual"]
  },
  {
    id: 6,
    name: "Wooden Horse",
    price: 180.25,
    category: "Sculptures",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Wooden Horse",
    artist: "Wood Carver",
    stock: 4,
    isNew: false,
    tags: ["Wood", "Animal", "Handmade"]
  },
  {
    id: 7,
    name: "Stone Warrior",
    price: 320.50,
    category: "Sculptures",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Stone Warrior",
    artist: "Stone Artist",
    stock: 1,
    isNew: true,
    tags: ["Stone", "Warrior", "Ancient"]
  },
  {
    id: 8,
    name: "Bronze Lion",
    price: 275.00,
    category: "Sculptures",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Bronze Lion",
    artist: "Bronze Master",
    stock: 3,
    isNew: false,
    tags: ["Bronze", "Lion", "Royal"]
  },

  // Handicrafts
  {
    id: 9,
    name: "Handwoven Basket",
    price: 45.99,
    category: "Handicrafts",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Handwoven Basket",
    artist: "Weaving Artist",
    stock: 10,
    isNew: true,
    tags: ["Basket", "Handwoven", "Natural"]
  },
  {
    id: 10,
    name: "Bamboo Lamp",
    price: 65.50,
    category: "Handicrafts",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Bamboo Lamp",
    artist: "Bamboo Craftsman",
    stock: 7,
    isNew: false,
    tags: ["Bamboo", "Lamp", "Eco-friendly"]
  },
  {
    id: 11,
    name: "Jute Wall Hanging",
    price: 35.75,
    category: "Handicrafts",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Jute Wall Hanging",
    artist: "Jute Artist",
    stock: 12,
    isNew: true,
    tags: ["Jute", "Wall Art", "Decorative"]
  },
  {
    id: 12,
    name: "Crochet Bag",
    price: 28.00,
    category: "Handicrafts",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Crochet Bag",
    artist: "Crochet Master",
    stock: 15,
    isNew: false,
    tags: ["Crochet", "Bag", "Fashion"]
  },

  // Pottery
  {
    id: 13,
    name: "Clay Vase",
    price: 55.25,
    category: "Pottery",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Clay Vase",
    artist: "Pottery Artist",
    stock: 8,
    isNew: true,
    tags: ["Clay", "Vase", "Ceramic"]
  },
  {
    id: 14,
    name: "Blue Ceramic Bowl",
    price: 42.50,
    category: "Pottery",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Blue Ceramic Bowl",
    artist: "Ceramic Master",
    stock: 6,
    isNew: false,
    tags: ["Ceramic", "Bowl", "Blue"]
  },
  {
    id: 15,
    name: "Terracotta Plate",
    price: 38.99,
    category: "Pottery",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Terracotta Plate",
    artist: "Terracotta Artist",
    stock: 9,
    isNew: true,
    tags: ["Terracotta", "Plate", "Traditional"]
  },
  {
    id: 16,
    name: "Painted Mug",
    price: 25.75,
    category: "Pottery",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Painted Mug",
    artist: "Mug Artist",
    stock: 20,
    isNew: false,
    tags: ["Mug", "Painted", "Daily Use"]
  },

  // Jewelry
  {
    id: 17,
    name: "Beaded Necklace",
    price: 85.00,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Beaded Necklace",
    artist: "Jewelry Designer",
    stock: 5,
    isNew: true,
    tags: ["Necklace", "Beads", "Fashion"]
  },
  {
    id: 18,
    name: "Silver Earrings",
    price: 125.50,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Silver Earrings",
    artist: "Silver Smith",
    stock: 3,
    isNew: false,
    tags: ["Silver", "Earrings", "Elegant"]
  },
  {
    id: 19,
    name: "Handmade Ring",
    price: 75.99,
    category: "Jewelry",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    title: "Handmade Ring",
    artist: "Ring Maker",
    stock: 7,
    isNew: true,
    tags: ["Ring", "Handmade", "Unique"]
  }
];

export const categories = ["Paintings", "Sculptures", "Handicrafts", "Pottery", "Jewelry"];
