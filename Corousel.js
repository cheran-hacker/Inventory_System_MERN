import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "Smartphones",
    image: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Sport Shoes",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Perfumes",
    image: "https://images.unsplash.com/photo-1629077007578-a36bb1056b3e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name:"SmartWatches",
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name:"Ios",
    image:"https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },{

    name:"Cosmetic Products",
    image:"https://images.unsplash.com/photo-1627260125392-af975289f53f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name:"Foods",
    image:"https://images.unsplash.com/photo-1563297782-f4cba03a3fb9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name:"Glasses",
    image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    autoplaySpeed: 1000
  };
  return (
    <div style={{ maxWidth: 400, margin: "30px auto" }}>
      <Slider {...settings}>
        {products.map((product, idx) => (
          <div key={idx} >
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
