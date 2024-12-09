export type Product1 = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  isNew?: boolean;
  isOnSale?: boolean;
  image: string;
};


export const products: Product1[] = [
    { id: 1, name: "Library Stool Chair", price: 20, isNew: true, image: "/home-images/our-products/1.jpeg" },
    { id: 2, name: "Library Stool Chair", price: 20, oldPrice: 30, isOnSale: true, image: "/home-images/our-products/2.jpeg" },
    { id: 3, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/3.jpeg" },
    { id: 4, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/4.jpeg" },
    { id: 5, name: "Library Stool Chair", price: 20, isNew: true, image: "/home-images/our-products/black-chair.jpeg" },
    { id: 6, name: "Library Stool Chair", price: 20, oldPrice: 30, isOnSale: true, image: "/home-images/our-products/wing-chair.jpeg" },
    { id: 7, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/wood-chair.jpeg" },
    { id: 8, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/3.jpeg" },
    { id: 9, name: "Library Stool Chair", price: 20, oldPrice: 30, isOnSale: true, image: "/home-images/our-products/2.jpeg" },
    { id: 10, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/4.jpeg" },
    { id: 11, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/wood-chair.jpeg" },
    { id: 12, name: "Library Stool Chair", price: 20, image: "/home-images/our-products/3.jpeg" },
  ];



  export type Product2 = {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    isNew?: boolean;
    isOnSale?: boolean;
    description: string;
    image: string;
  };
  
  // Dummy product data (replace with API/database integration if needed)
  export const productsLink: Product2[] = [
      { id: 1, name: "Library Stool Chair", price: 20, isNew: true, description: "A stylish and comfortable chair for any setting.", image: "/home-images/our-products/1.jpeg" },
      { id: 2, name: "Library Stool Chair", price: 20, oldPrice: 30, description: "A sleek, modern chair for library or office use.", image: "/home-images/our-products/2.jpeg" },
      { id: 3, name: "Library Stool Chair", price: 20, description: "Perfect for any room, blending comfort with design.", image: "/home-images/our-products/3.jpeg" },
      { id: 4, name: "Library Stool Chair", price: 20, description: "A durable chair that complements any decor.", image: "/home-images/our-products/4.jpeg" },
      { id: 5, name: "Library Stool Chair", price: 20, isNew: true, description: "A modern black chair that fits all environments.", image: "/home-images/our-products/black-chair.jpeg" },
      { id: 6, name: "Library Stool Chair", price: 20, oldPrice: 30, description: "A luxurious wing chair, ideal for comfort.", image: "/home-images/our-products/wing-chair.jpeg" },
      { id: 7, name: "Library Stool Chair", price: 20, description: "A wooden chair that exudes rustic charm.", image: "/home-images/our-products/wood-chair.jpeg" },
      { id: 8, name: "Library Stool Chair", price: 20, description: "Perfect for any room, blending comfort with design.", image: "/home-images/our-products/3.jpeg" },
      { id: 9, name: "Library Stool Chair", price: 20, oldPrice: 30, description: "A sleek, modern chair for library or office use.", image: "/home-images/our-products/2.jpeg" },
      { id: 10, name: "Library Stool Chair", price: 20, description: "A durable chair that complements any decor.", image: "/home-images/our-products/4.jpeg" },
      { id: 11, name: "Library Stool Chair", price: 20, description: "A wooden chair that exudes rustic charm.", image: "/home-images/our-products/wood-chair.jpeg" },
      { id: 12, name: "Library Stool Chair", price: 20, description: "Perfect for any room, blending comfort with design.", image: "/home-images/our-products/3.jpeg" },
    ];
    