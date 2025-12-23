'use client';

import { products } from "@/data/products";
import ProductCard from "../components/ProductCard";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => router.push(`/products/${product.id}`)}
        />
      ))}
    </div>
  );
}
