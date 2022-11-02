let itemsArray = [
  {
    name: "Waifu Body Pillow",
    url: "/shopping-cart/assets/images/body-pillow.webp",
    category: "body-pillow anime",
    price: 30,
    rating: 3.4,
    id: 0,
    sold: 504,
    description: "body pillow for all your weebu needs",
  },
  {
    name: "500GB SSD",
    url: "/shopping-cart/assets/images/ssd.webp",
    category: "computer storage ssd",
    price: 25.3,
    rating: 4.1,
    id: 1,
    sold: 302,
    description: "Storage for your soon-to-be high end computer!",
  },
  {
    name: "Waifu Body Pillow v2.0",
    url: "/shopping-cart/assets/images/body-pillow.webp",
    category: "body-pillow anime",
    price: 50,
    rating: 2.1,
    id: 2,
    sold: 203,
    description: "body pillow for all your weebu needs",
  },
  {
    name: "Ganyu Figurine",
    url: "/shopping-cart/assets/images/ganyu-figurine.webp",
    category: "figurine anime",
    price: 130,
    rating: 5.0,
    id: 3,
    sold: 1323,
    description: "Very high quality Genshin Impact figurine!",
  },
  {
    name: "Keqing Figurine",
    url: "/shopping-cart/assets/images/keqing-figurine.webp",
    category: "figurine anime",
    price: 125,
    rating: 4.8,
    id: 4,
    sold: 234,
    description: "Very high quality Genshin Impact figurine!",
  },
  {
    name: "RTX 3090",
    url: "/shopping-cart/assets/images/rtx-3090.jpg",
    category: "computer gpu",
    price: 1300,
    rating: 2.0,
    id: 5,
    sold: 423,
    description: "GPU for your high end computer!",
  },
  {
    name: "RTX 4090",
    url: "/shopping-cart/assets/images/rtx-4090.jpg",
    category: "computer gpu",
    price: 2000,
    rating: 3.6,
    id: 6,
    sold: 235,
    description: "GPU for your high end computer!",
  },
  {
    name: "RX 570",
    url: "/shopping-cart/assets/images/rx-570.jpg",
    category: "computer gpu",
    price: 570,
    rating: 4.5,
    id: 7,
    sold: 432,
    description: "GPU for your high end computer!",
  },
  {
    name: "RX 580",
    url: "/shopping-cart/assets/images/rx-580.jpg",
    category: "computer gpu",
    price: 600,
    rating: 4.3,
    id: 8,
    sold: 123,
    description: "GPU for your high end computer!",
  },
  {
    name: "Ryzen 5 1600",
    url: "/shopping-cart/assets/images/cpu.jpg",
    category: "computer cpu",
    price: 350,
    rating: 3.2,
    id: 9,
    sold: 353,
    description: "Cpu for your high end computer!",
  },
  {
    name: "Intel i5 6500",
    url: "/shopping-cart/assets/images/cpu.jpg",
    category: "computer cpu",
    price: 400,
    rating: 4.5,
    id: 10,
    sold: 493,
    description: "Cpu for your high end computer!",
  },
  {
    name: "Raiden Mei Figurine",
    url: "/shopping-cart/assets/images/raiden-figurine.webp",
    category: "anime figurine",
    price: 135,
    rating: 4.2,
    id: 11,
    sold: 983,
    description: "Very high quality Honkai Impact figurine!",
  },
  {
    name: "Ryzen 7 1300X",
    url: "/shopping-cart/assets/images/cpu.jpg",
    category: "computer cpu",
    price: 500,
    rating: 3.2,
    id: 12,
    sold: 873,
    description: "Cpu for your high end computer!",
  },
  {
    name: "1TB SSD",
    url: "/shopping-cart/assets/images/ssd.webp",
    category: "computer storage ssd",
    price: 150,
    rating: 4.9,
    id: 13,
    sold: 720,
    description: "Storage for your soon-to-be high end computer!",
  },
  {
    name: "2TB HDD",
    url: "/shopping-cart/assets/images/hdd.webp",
    category: "computer storage hdd",
    price: 125,
    rating: 2.2,
    id: 14,
    sold: 345,
    description: "Storage for your soon-to-be high end computer!",
  },
  {
    name: "10TB HDD",
    url: "/shopping-cart/assets/images/hdd.webp",
    category: "computer storage hdd",
    price: 228,
    rating: 3.9,
    id: 15,
    sold: 500,
    description: "Storage for your soon-to-be high end computer!",
  },
  {
    name: "4TB SSD",
    url: "/shopping-cart/assets/images/ssd.webp",
    category: "computer storage ssd",
    price: 364,
    rating: 5.0,
    id: 16,
    sold: 600,
    description: "Storage for your soon-to-be high end computer!",
  },
  {
    name: "G.SKILL Aegis 16GB (2x8GB) DDR4 3200MHz",
    url: "/shopping-cart/assets/images/ram.jpg",
    category: "computer ram",
    price: 40,
    rating: 3.2,
    id: 17,
    sold: 394,
    description: "Ram for your soon-to-be high end computer!",
  },
  {
    name: "Kingston FURY Beast 16GB (2x8GB) DDR4 3200MHz",
    url: "/shopping-cart/assets/images/ram.jpg",
    category: "computer ram",
    price: 42,
    rating: 4.7,
    id: 18,
    sold: 234,
    description: "Ram for your soon-to-be high end computer!",
  },
  {
    name: "Kingston FURY Renegade 32GB (2x16GB) DDR4 3600MHz",
    url: "/shopping-cart/assets/images/ram.jpg",
    category: "computer ram",
    price: 86,
    rating: 4.2,
    id: 19,
    sold: 100,
    description: "Ram for your soon-to-be high end computer!",
  },
  {
    name: "Kingston FURY Beast RGB 16GB (2x8GB) DDR4 3200MHz",
    url: "/shopping-cart/assets/images/ram.jpg",
    category: "computer ram",
    price: 62,
    rating: 3.5,
    id: 20,
    sold: 350,
    description: "Ram for your soon-to-be high end computer!",
  },
  {
    name: "Corsair VENGEANCE LPX 32GB (2x16GB) DDR4 3200MHz",
    url: "/shopping-cart/assets/images/ram.jpg",
    category: "computer ram",
    price: 70,
    rating: 4.2,
    id: 21,
    sold: 290,
    description: "Ram for your soon-to-be high end computer!",
  },
  {
    name: "Team Group DELTA RGB 32GB (2x16GB) DDR5 6200MHz",
    url: "/shopping-cart/assets/images/ram.jpg",
    category: "computer ram",
    price: 150,
    rating: 0,
    id: 22,
    sold: 200,
    description: "Ram for your soon-to-be high end computer!",
  },
  {
    name: "Kingston FURY Beast 64GB (2x32GB) DDR4 3200MHz",
    url: "/shopping-cart/assets/images/ram.jpg",
    category: "computer ram",
    price: 120,
    rating: 0,
    id: 23,
    sold: 920,
    description: "Ram for your soon-to-be high end computer!",
  },
];

function getItem(id) {
  return itemsArray.filter((item) => item.id === parseInt(id));
}

function getItems() {
  return itemsArray;
}

export default getItems;

export { getItem };
