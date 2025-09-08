import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "Smartphone XYZ",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Sport Shoes",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Leather Wallet",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=500&q=80"
  }
];

export default function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div style={{ maxWidth: 400, margin: "30px auto" }}>
      <Slider {...settings}>
        {products.map((product, idx) => (
          <div key={idx}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "12px", maxHeight: "280px", objectFit: "cover" }}
            />
            <h3 style={{
              textAlign: "center",
              fontWeight: 500,
              marginTop: 12,
              fontSize: 22
            }}>{product.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
