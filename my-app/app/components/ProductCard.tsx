'use client';
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { Product } from "@/types/products";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const router = useRouter();

  return (
    <Card
  onClick={() => router.push(`/products/${product.id}`)}
  className="cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl group max-w-lg mx-auto"
>
  <CardHeader className="bg-[#562718] text-white py-4 px-6 text-center space-y-1">
    {product.type && (
      <span className="text-xs font-medium uppercase tracking-wide opacity-90">
        {product.type}
      </span>
    )}

    <h3 className="text-lg font-bold">
      {product.name}
    </h3>
  </CardHeader>

  <div className="relative h-70 bg-linear-to-br from-blue-50 to-purple-50 overflow-hidden">
    <Image
      src={product.image ?? "/images/loading.png"}
      alt={product.name ?? "Product image"}
      fill
      className="object-contain group-hover:scale-105 transition-transform duration-500"
    />
  </div>

  <CardContent className="p-6">
    <p className="text-gray-600 text-sm line-clamp-3">
      {product.description}
    </p>
  </CardContent>

  <CardFooter className="px-6 pb-4">
    <button
     className="ml-auto bg-[#6c2c16] text-white px-4 py-2 rounded-lg hover:bg-[#562718] transition-colors flex items-center gap-2">
      View Details <ChevronRight size={16} />
    </button>
  </CardFooter>
</Card>

  );
}
