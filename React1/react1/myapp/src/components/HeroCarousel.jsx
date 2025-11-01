import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119",
    title: "Abstract Harmony",
    artist: "Priya Sharma",
    price: "₹45,000",
    tagline: "Where colors meet emotions"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d",
    title: "Urban Dreams",
    artist: "Rahul Dev",
    price: "₹38,000",
    tagline: "Contemporary cityscape interpretation"
  }
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto slide every 4 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full flex items-center justify-center text-white">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-xl mb-2">by {slide.artist}</p>
                <p className="text-lg mb-4">{slide.tagline}</p>
                <p className="text-2xl font-bold">{slide.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        ←
      </button>
      <button
        onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        →
      </button>
    </div>
  );
}

export default HeroCarousel;