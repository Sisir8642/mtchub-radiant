export interface Specifications {
  model: string;
  engine: string;
  length: string;
  width: string;
  height: string;
  maxSpeed: string;
  fuelCapacity: string;
}

export interface Product {
  id: string;                     // Unique identifier for dynamic routing
  name: string;  
  category: string;                 // Product name
  image?: string;                 // Optional image path
  type?: string;                  // Optional category/type
  description: string;            // Full description of the product
  specifications: Specifications; // Technical specs
  features: string[];             // List of features
  price?: number | null;          // Optional price
}