'use client';
import { use } from 'react';
import { products } from '@/data/products';
import ProductDetailPage from '@/app/components/ProductDetails';

interface Props {
  params: Promise<{ category: string; id: string }>;
}

export default function ProductDetail({ params }: Props) {
  const { id } = use(params); 

  const idStr = decodeURIComponent(id);

  const product = products.find(
    (p) => p.id === idStr 
  );

  if (!product) {
    return <p className="p-10 text-red-600">Product not found</p>;
  }

  return <ProductDetailPage product={product} />;
}
