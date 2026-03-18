const products = [
  // Elektronik
  {
    id: 1,
    name: "MacBook Pro M3",
    price: 25000000,
    description: "Laptop Apple dengan chip M3, layar Retina 14 inci, RAM 16GB, SSD 512GB",
    category: "Laptop",
    brand: "Apple",
    stock: 15,
    rating: 4.8,
    image: "/images/macbook-pro-m3.jpg",
    specs: {
      processor: "Apple M3 Pro",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14 inch Retina",
      battery: "70Wh"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 19000000,
    description: "HP flagship Samsung dengan kamera 200MP, S-Pen, dan layar 6.8 inch Dynamic AMOLED",
    category: "Smartphone",
    brand: "Samsung",
    stock: 23,
    rating: 4.9,
    image: "/images/samsung-s24-ultra.jpg",
    specs: {
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "256GB",
      camera: "200MP + 12MP + 50MP",
      battery: "5000mAh"
    }
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 3500000,
    description: "Wireless noise cancelling headphone dengan kualitas suara terbaik",
    category: "Audio",
    brand: "Sony",
    stock: 42,
    rating: 4.7,
    image: "/images/sony-wh1000xm5.jpg",
    specs: {
      type: "Over-ear",
      connectivity: "Bluetooth 5.2",
      battery: "30 hours",
      noiseCancelling: "Yes"
    }
  },
  {
    id: 4,
    name: "iPad Pro 12.9",
    price: 15000000,
    description: "Tablet Apple dengan chip M2, layar Liquid Retina XDR, kompatibel dengan Apple Pencil",
    category: "Tablet",
    brand: "Apple",
    stock: 18,
    rating: 4.8,
    image: "/images/ipad-pro.jpg",
    specs: {
      processor: "Apple M2",
      ram: "8GB",
      storage: "256GB",
      display: "12.9 inch Liquid Retina XDR",
      camera: "12MP + 10MP"
    }
  },
  
  // Fashion
  {
    id: 5,
    name: "Adidas Ultraboost 22",
    price: 2100000,
    description: "Sepatu lari dengan teknologi Boost terbaru, nyaman untuk daily run",
    category: "Sepatu",
    brand: "Adidas",
    stock: 56,
    rating: 4.6,
    image: "/images/adidas-ultraboost.jpg",
    specs: {
      type: "Running Shoes",
      material: "Primeknit",
      sole: "Boost Technology",
      gender: "Unisex"
    }
  },
  {
    id: 6,
    name: "Uniqlo Airism T-Shirt",
    price: 199000,
    description: "Kaos polos dengan material airism yang adem dan nyaman dipakai",
    category: "Pakaian",
    brand: "Uniqlo",
    stock: 200,
    rating: 4.5,
    image: "/images/uniqlo-airism.jpg",
    specs: {
      material: "100% Cotton",
      size: ["S", "M", "L", "XL"],
      color: ["Black", "White", "Navy", "Gray"],
      care: "Machine washable"
    }
  },
  {
    id: 7,
    name: "Casio G-Shock GA-2100",
    price: 1500000,
    description: "Jam tangan digital analog dengan desain klasik dan tahan banting",
    category: "Aksesoris",
    brand: "Casio",
    stock: 34,
    rating: 4.7,
    image: "/images/casio-gshock.jpg",
    specs: {
      type: "Digital-Analog",
      waterResistance: "200m",
      battery: "3 years",
      material: "Carbon Core Guard"
    }
  },
  
  // Makanan & Minuman
  {
    id: 8,
    name: "Kopi Kenangan Mantan",
    price: 25000,
    description: "Kopi susu kekinian dengan rasa yang creamy dan strong",
    category: "Minuman",
    brand: "Kopi Kenangan",
    stock: 500,
    rating: 4.6,
    image: "/images/kopi-kenangan.jpg",
    specs: {
      size: "Medium",
      temperature: "Iced/Hot",
      calories: "150 kcal",
      sugar: "Regular/Less/No Sugar"
    }
  },
  {
    id: 9,
    name: "Indomie Goreng Aceh",
    price: 5000,
    description: "Mi instan dengan rasa khas Aceh yang pedas dan gurih",
    category: "Makanan",
    brand: "Indomie",
    stock: 1000,
    rating: 4.9,
    image: "/images/indomie-aceh.jpg",
    specs: {
      weight: "120g",
      type: "Instant Noodles",
      spice: "Spicy",
      halal: true
    }
  },
  
  // Peralatan Rumah
  {
    id: 10,
    name: "Dyson V15 Detect",
    price: 8500000,
    description: "Vacuum cleaner tanpa kabel dengan laser dust detection",
    category: "Elektronik Rumah",
    brand: "Dyson",
    stock: 12,
    rating: 4.8,
    image: "/images/dyson-v15.jpg",
    specs: {
      type: "Cordless Stick",
      power: "660W",
      battery: "60 minutes",
      capacity: "0.76L"
    }
  },
  {
    id: 11,
    name: "Philips Air Fryer XXL",
    price: 2100000,
    description: "Air fryer dengan kapasitas besar untuk memasak tanpa minyak",
    category: "Elektronik Rumah",
    brand: "Philips",
    stock: 28,
    rating: 4.7,
    image: "/images/philips-airfryer.jpg",
    specs: {
      capacity: "3.5L",
      power: "1500W",
      temperature: "80-200°C",
      features: ["Digital Display", "Timer", "Recipe Book"]
    }
  },
  
  // Buku
  {
    id: 12,
    name: "Atomic Habits - James Clear",
    price: 120000,
    description: "Buku self-development tentang membangun kebiasaan baik",
    category: "Buku",
    brand: "Gramedia",
    stock: 150,
    rating: 4.9,
    image: "/images/atomic-habits.jpg",
    specs: {
      author: "James Clear",
      language: "English",
      pages: 320,
      isbn: "978-0735211292"
    }
  },
  {
    id: 13,
    name: "Laut Bercerita - Leila S. Chudori",
    price: 95000,
    description: "Novel tentang kisah persahabatan dan kehilangan di masa reformasi",
    category: "Buku",
    brand: "Gramedia",
    stock: 85,
    rating: 4.8,
    image: "/images/laut-bercerita.jpg",
    specs: {
      author: "Leila S. Chudori",
      language: "Indonesian",
      pages: 384,
      isbn: "978-602-424-856-6"
    }
  },
  
  // Olahraga
  {
    id: 14,
    name: "Yonex Astrox 100 ZZ",
    price: 3200000,
    description: "Raket bulutangkis premium dengan teknologi Rotational Generator System",
    category: "Olahraga",
    brand: "Yonex",
    stock: 22,
    rating: 4.8,
    image: "/images/yonex-astrox.jpg",
    specs: {
      type: "Badminton Racket",
      weight: "4U (83g)",
      balance: "Head Heavy",
      flexibility: "Stiff"
    }
  },
  {
    id: 15,
    name: "Lululemon Align Legging",
    price: 950000,
    description: "Celana yoga dengan material buttery soft yang nyaman untuk workout",
    category: "Olahraga",
    brand: "Lululemon",
    stock: 45,
    rating: 4.7,
    image: "/images/lululemon-align.jpg",
    specs: {
      material: "Nylon/Lycra",
      size: ["XS", "S", "M", "L"],
      length: "25 inch",
      features: ["High Waist", "Pockets"]
    }
  },
  
  // Kecantikan
  {
    id: 16,
    name: "SK-II Facial Treatment Essence",
    price: 2300000,
    description: "Essence wajah dengan kandungan Pitera untuk kulit glowing",
    category: "Skincare",
    brand: "SK-II",
    stock: 30,
    rating: 4.9,
    image: "/images/skii-essence.jpg",
    specs: {
      volume: "230ml",
      type: "Facial Essence",
      skinType: "All Skin Types",
      ingredients: "Pitera, Galactomyces"
    }
  },
  {
    id: 17,
    name: "Skintific Retinol Serum",
    price: 120000,
    description: "Serum anti-aging dengan retinol untuk mengurangi tanda-tanda penuaan",
    category: "Skincare",
    brand: "Skintific",
    stock: 200,
    rating: 4.6,
    image: "/images/skintific-retinol.jpg",
    specs: {
      volume: "20ml",
      concentration: "2.5% Retinol",
      skinType: "Mature/Aging Skin",
      benefits: ["Anti-aging", "Brightening", "Smoothing"]
    }
  },
  
  // Gaming
  {
    id: 18,
    name: "PlayStation 5 Digital Edition",
    price: 7500000,
    description: "Konsol gaming next-gen dengan SSD ultra-cepat dan DualSense controller",
    category: "Gaming",
    brand: "Sony",
    stock: 8,
    rating: 4.9,
    image: "/images/ps5-digital.jpg",
    specs: {
      storage: "825GB SSD",
      controller: "DualSense",
      resolution: "4K/120fps",
      edition: "Digital"
    }
  },
  {
    id: 19,
    name: "Logitech G Pro X Superlight",
    price: 1800000,
    description: "Mouse gaming wireless super ringan untuk performa maksimal",
    category: "Gaming",
    brand: "Logitech",
    stock: 56,
    rating: 4.8,
    image: "/images/logitech-gpro.jpg",
    specs: {
      weight: "63g",
      connectivity: "Wireless",
      sensor: "HERO 25K",
      battery: "70 hours"
    }
  },
  {
    id: 20,
    name: "Steam Deck 512GB",
    price: 8500000,
    description: "Handheld gaming PC untuk main game Steam dimana saja",
    category: "Gaming",
    brand: "Valve",
    stock: 14,
    rating: 4.7,
    image: "/images/steam-deck.jpg",
    specs: {
      storage: "512GB NVMe SSD",
      screen: "7 inch LCD",
      ram: "16GB LPDDR5",
      battery: "2-8 hours"
    }
  }
];

export default products;