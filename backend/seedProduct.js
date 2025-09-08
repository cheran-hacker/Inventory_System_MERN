require('dotenv').config();
const mongoose = require('mongoose');

// --- 1. Define Product schema ---
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

// --- 2. Helper functions ---
const getRandomPrice = () => parseFloat((Math.random() * 500 + 10).toFixed(2));
const getRandomQuantity = () => Math.floor(Math.random() * 100 + 1);

// --- 3. Product names ---
const productNames = [
  "Wireless Earbuds", "Smartwatch", "Bluetooth Speaker", "Portable Charger", "Fitness Tracker",
  "Gaming Headset", "Action Camera", "LED Desk Lamp", "Ergonomic Chair", "Laptop Stand",
  "USB-C Hub", "Noise Cancelling Headphones", "Digital Camera", "Smart Thermostat", "Electric Kettle",
  "Air Purifier", "Coffee Maker", "Smart Door Lock", "Wireless Mouse", "Keyboard",
  "VR Headset", "Robot Vacuum", "Smart Light Bulb", "Tablet", "Portable Projector",
  "Wireless Router", "Smartphone Tripod", "LED Makeup Mirror", "Hair Dryer", "Blender",
  "Electric Scooter", "Portable Monitor", "Waterproof Speaker", "Smart Home Hub", "Car Dash Cam",
  "Smart Lock", "Foldable Drone", "Smart Glasses", "Mini Fridge", "Gaming Chair",
  "Laptop Backpack", "LED Strip Lights", "Smart Scale", "Digital Photo Frame", "Portable Air Conditioner",
  "Camera Lens", "Electric Shaver", "3D Printer", "Smart Ring", "Portable Generator",
  "Fitness Mat", "Streaming Microphone", "Dash Cam", "Electric Toothbrush", "Bluetooth Car Kit",
  "Wireless Charger", "Smart Light Switch", "Smart Plug", "Tablet Stand", "Gaming Console",
  "Action Figure", "Smart Thermometer", "Wi-Fi Extender", "VR Controller", "Portable Hard Drive",
  "LED Flashlight", "Smart Coffee Machine", "Wireless Earphones", "Smart Backpack",
  "Smart Helmet", "Portable Air Purifier", "Camera Gimbal", "Smart Window Sensor", "Smart Doorbell",
  "Electric Bike", "Smart Fan", "Solar Charger", "Noise Meter",
  "Smart Pet Feeder", "Smart Water Bottle", "Bluetooth Tracker", "Mini Projector", "Laptop Cooling Pad",
  "Electric Grill", "Smart Curtain", "Gaming Keyboard", "LED Wall Light", "Robot Mop",
  "Wireless Security Camera", "Smart Light Panel", "USB Fan", "Smart Thermostat", "Portable Speaker XL",
  "Wireless Game Controller", "Smartwatch Band", "Portable Solar Charger", "Smart Plant Sensor", "Smart Scale Pro",
  "Portable Blender", "Smart Yoga Mat", "Electric Skateboard", "Smart Alarm Clock", "Mini Drone"
];

// --- 4. Map product names to fixed image URLs ---
const productImages = {
  "Wireless Earbuds": "https://images.unsplash.com/photo-1517495306984-312f5a4ecb07?auto=format&fit=crop&w=500&q=80",
  "Smartwatch": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80",
  "Bluetooth Speaker": "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=500&q=80",
  "Portable Charger": "https://images.unsplash.com/photo-1508810840427-1a220a1b14e2?auto=format&fit=crop&w=500&q=80",
  "Fitness Tracker": "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=500&q=80",
  "Gaming Headset": "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&w=500&q=80",
  "Action Camera": "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=500&q=80",
  "LED Desk Lamp": "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=500&q=80",
  "Ergonomic Chair": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Laptop Stand": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
  "USB-C Hub": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Noise Cancelling Headphones": "https://images.unsplash.com/photo-1515288683018-25b7f1ec2834?auto=format&fit=crop&w=500&q=80",
  "Digital Camera": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  "Smart Thermostat": "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=500&q=80",
  "Electric Kettle": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Air Purifier": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Coffee Maker": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  "Smart Door Lock": "https://images.unsplash.com/photo-1508810840427-1a220a1b14e2?auto=format&fit=crop&w=500&q=80",
  "Wireless Mouse": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  "Keyboard": "https://images.unsplash.com/photo-1512299289422-8a6a91a65ded?auto=format&fit=crop&w=500&q=80",
  "VR Headset": "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?auto=format&fit=crop&w=500&q=80",
  "Robot Vacuum": "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=500&q=80",
  "Smart Light Bulb": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Tablet": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
  "Portable Projector": "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=500&q=80",
  "Wireless Router": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80",
  "Smartphone Tripod": "https://images.unsplash.com/photo-1508810840427-1a220a1b14e2?auto=format&fit=crop&w=500&q=80",
  "LED Makeup Mirror": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80",
  "Hair Dryer": "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=500&q=80",
  "Blender": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Electric Scooter": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
  "Portable Monitor": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  "Waterproof Speaker": "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=500&q=80",
  "Smart Home Hub": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Car Dash Cam": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Lock": "https://images.unsplash.com/photo-1508810840427-1a220a1b14e2?auto=format&fit=crop&w=500&q=80",
  "Foldable Drone": "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?auto=format&fit=crop&w=500&q=80",
  "Smart Glasses": "https://images.unsplash.com/photo-1519424186757-4e9dffcadd0b?auto=format&fit=crop&w=500&q=80",
  "Mini Fridge": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Gaming Chair": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Laptop Backpack": "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=500&q=80",
  "LED Strip Lights": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Scale": "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=500&q=80",
  "Digital Photo Frame": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  "Portable Air Conditioner": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Camera Lens": "https://images.unsplash.com/photo-1515288683018-25b7f1ec2834?auto=format&fit=crop&w=500&q=80",
  "Electric Shaver": "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=500&q=80",
  "3D Printer": "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=500&q=80",
  "Smart Ring": "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=500&q=80",
  "Portable Generator": "https://images.unsplash.com/photo-1515555235602-55763a1af9fd?auto=format&fit=crop&w=500&q=80",
  "Fitness Mat": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  "Streaming Microphone": "https://images.unsplash.com/photo-1555617117-08dd1d561c9a?auto=format&fit=crop&w=500&q=80",
  "Dash Cam": "https://images.unsplash.com/photo-1508810840427-1a220a1b14e2?auto=format&fit=crop&w=500&q=80",
  "Electric Toothbrush": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Bluetooth Car Kit": "https://images.unsplash.com/photo-1515801267906-b7f56fb67ab8?auto=format&fit=crop&w=500&q=80",
  "Wireless Charger": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Light Switch": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Plug": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Tablet Stand": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
  "Gaming Console": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Action Figure": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Thermometer": "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=500&q=80",
  "Wi-Fi Extender": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "VR Controller": "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?auto=format&fit=crop&w=500&q=80",
  "Portable Hard Drive": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "LED Flashlight": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Coffee Machine": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Wireless Earphones": "https://images.unsplash.com/photo-1517495306984-312f5a4ecb07?auto=format&fit=crop&w=500&q=80",
  "Smart Backpack": "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=500&q=80",
  "Smart Helmet": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Portable Air Purifier": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Camera Gimbal": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Window Sensor": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Doorbell": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Electric Bike": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
  "Smart Fan": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Solar Charger": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Noise Meter": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Pet Feeder": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Water Bottle": "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=500&q=80",
  "Bluetooth Tracker": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Mini Projector": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Laptop Cooling Pad": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  "Electric Grill": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Curtain": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Gaming Keyboard": "https://images.unsplash.com/photo-1512299289422-8a6a91a65ded?auto=format&fit=crop&w=500&q=80",
  "LED Wall Light": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Robot Mop": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Wireless Security Camera": "https://images.unsplash.com/photo-1515801267906-b7f56fb67ab8?auto=format&fit=crop&w=500&q=80",
  "Smart Light Panel": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "USB Fan": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Portable Speaker XL": "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=500&q=80",
  "Wireless Game Controller": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smartwatch Band": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80",
  "Portable Solar Charger": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Plant Sensor": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Scale Pro": "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=500&q=80",
  "Portable Blender": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Smart Yoga Mat": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  "Electric Skateboard": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
  "Smart Alarm Clock": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  "Mini Drone": "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?auto=format&fit=crop&w=500&q=80",
};

// --- 5. Generate 100 products with fixed images ---
const generateProducts = () => {
  const products = [];
  for (let i = 0; i < 100; i++) {
    const name = productNames[i];
    const imageUrl = productImages[name] || `https://source.unsplash.com/500x500/?${name.split(" ")[0].toLowerCase()}`;
    products.push({
      name: `${name} ${i + 1}`,
      price: getRandomPrice(),
      quantity: getRandomQuantity(),
      description: `High-quality ${name.toLowerCase()} perfect for daily use!`,
      imageUrl,
    });
  }
  return products;
};

// --- 6. Seed function ---
const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected");

    const products = generateProducts();

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log(`${products.length} products seeded successfully`);
    mongoose.disconnect();
  } catch (error) {
    console.error("Failed to seed products:", error);
  }
};

seedProducts();
