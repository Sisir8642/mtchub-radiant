import { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: "tmx-450",
    name: "TMX-450 Aircraft Towing Tractor",
    category:"Towbarless",
    type: "Aircraft Towing Tractor",
    description: "The TMX-450 Aircraft Towing Tractor, with a maximum driveline capability of 32,000daN (70,500lbs), is designed to perform push back and towing operations on medium and wide body aircraft. Its ergonomic design provides maximum driver comfort and increased visibility. Engineered for exceptional performance, the TMX-450 combines power, durability, and advanced technology to meet modern aviation demands.",
    specifications: {
      model: "TMX-450",
      engine: "Diesel, turbocharged",
      length: "4.5 meters (14.8 feet)",
      width: "2.5 meters (8.2 feet)",
      height: "2.2 meters (7.2 feet)",
      maxSpeed: "25 km/h (15.5 mph)",
      fuelCapacity: "200 liters (52.8 gallons)"
    },
    features: [
      "Powerful Engine",
      "Heavy-Duty Construction",
      "Advanced Towing Capabilities",
      "Ergonomic Design",
      "Efficient Maneuverability"
    ],
    image: "/images/tmx450.png"
  },
  {
    id: "tbl-300",
    name: "Towbarless Aircraft Tractor (Capacity 300T)",
    category:"Towbarless",
    type: "Aircraft Towing Tractor",
    description: "The Towbarless Aircraft Tractor (Capacity 300T) is designed for handling the heaviest aircraft efficiently and safely. It eliminates the need for traditional towbars, providing a versatile and streamlined approach to aircraft ground handling.",
    specifications: {
      model: "TBL-300",
      engine: "Diesel or electric options available",
      length: "N/A",
      width: "N/A",
      height: "N/A",
      maxSpeed: "30 km/h (18.6 mph)",
      fuelCapacity: "250 liters (66 gallons)"
    },
    features: [
      "Powerful Engine Options",
      "Towbarless Design",
      "Robust Construction",
      "Advanced Control Systems",
      "Enhanced Safety Features"
    ],
    image: "/images/towbarless.png"
  },
  {
    id: "nbl-belt-loader",
    name: "NBL Belt Loader",
    category:"Belt",
    type: "Belt Loader",
    description: "The NBL belt loader is modular equipment with various engine and transmission options. Designed for reliability, low maintenance, and ergonomic operator comfort with excellent visibility.",
    specifications: {
      model: "NBL",
      engine: "Diesel or electric options available",
      length: "4.5 meters (14.8 feet)",
      width: "N/A",
      height: "N/A",
      maxSpeed: "N/A",
      fuelCapacity: "60 liters (15.8 gallons)"
    },
    features: [
      "Versatile Conveyor System",
      "Robust Construction",
      "Efficient Performance",
      "Ergonomic Operator Cabin",
      "Enhanced Visibility and Lighting"
    ],
    image: "/images/belt.png"
  },
  {
  id: "tmx-450-pax", // unique id for dynamic routing
  name: "TMX-450 Aircraft Towing Tractor (Pax)",
  category: "Pax",
  type: "Aircraft Towing Tractor",
  description:
    "The TMX-450 Aircraft Towing Tractor, with a maximum driveline capability of 32,000daN (70,500 lbs), is designed to perform push back and towing operations on medium and wide body aircraft such as the B767, A300, A310, A330, A340 (500 & 600), B777, B747, and A380. Its ergonomic design provides maximum driver comfort and increased visibility. Engineered for exceptional performance, the TMX-450 combines power, durability, and advanced technology to meet the demanding needs of modern aviation. TLD’s high standards of build and component quality make the TMX-450 a durable and reliable tractor.",
  specifications: {
    model: "TMX-450",
    engine: "Diesel, turbocharged",
    length: "4.5 meters (14.8 feet)",
    width: "2.5 meters (8.2 feet)",
    height: "2.2 meters (7.2 feet)",
    maxSpeed: "25 km/h (15.5 mph)",
    fuelCapacity: "200 liters (52.8 gallons)"
  },
  features: [
    "Powerful Engine",
    "Heavy-Duty Construction",
    "Advanced Towing Capabilities",
    "Ergonomic Design",
    "Efficient Maneuverability"
  ],
  image: "/images/pax.png"
},
  {
    id: "potable-water-truck",
    name: "Aircraft Potable Water Truck",
    category:"Lavatory",
    type: "Support Vehicle",
    description: "The Aircraft Potable Water Truck supplies safe, clean water to aircraft, ensuring passenger and crew comfort. Built with advanced features for reliable operations at airports.",
    specifications: {
      model: "N/A",
      engine: "Diesel or electric options available",
      length: "N/A",
      width: "N/A",
      height: "N/A",
      maxSpeed: "N/A",
      fuelCapacity: "1,000 to 5,000 liters (264 to 1,320 gallons)"
    },
    features: [
      "High-Quality Water Tank",
      "Advanced Pumping System",
      "User-Friendly Controls",
      "Robust and Durable Construction",
      "Flexible Hose and Nozzle System"
    ],
    image: "/images/water.png"
  },
  {
    id: "cobus-ramp-bus",
    name: "COBUS Aircraft Ramp Bus",
    category:"Ramp",
    type: "Passenger Transport",
    description: "The COBUS Aircraft Ramp Bus provides efficient and comfortable transport between terminal and aircraft. Known for reliability, spacious design, and advanced features for airport ground operations.",
    specifications: {
      model: "N/A",
      engine: "Diesel Euro VI compliant",
      length: "N/A",
      width: "N/A",
      height: "N/A",
      maxSpeed: "50 km/h (31 mph)",
      fuelCapacity: "N/A"
    },
    features: [
      "Spacious Interior",
      "Advanced Safety Features",
      "Robust Construction",
      "Efficient Performance",
      "Passenger Comfort"
    ],
    image: "/images/ramp.png"
  },
  {
    id: "ground-power-unit",
    name: "Ground Power Unit (GPU)",
    category:"Gpu",
    type: "Aircraft Support Equipment",
    description: "GPUs provide reliable electrical power to aircraft on the ground. Available in diesel and electric versions, designed for efficiency, safety, and user-friendly operation.",
    specifications: {
      model: "Various",
      engine: "Diesel or Electric",
      length: "N/A",
      width: "N/A",
      height: "N/A",
      maxSpeed: "N/A",
      fuelCapacity: "N/A"
    },
    features: [
      "High Reliability",
      "Efficient Power Delivery",
      "Environmentally Friendly Options",
      "User-Friendly Interface",
      "Robust Safety Features"
    ],
    image: "/images/gpu.png"
  }
];
