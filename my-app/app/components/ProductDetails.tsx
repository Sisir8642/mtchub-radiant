'use client';

import { Package, ChevronLeft, Info } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/types/products";
import Link from "next/link";

interface Props {
  product: Product;
  onBack?: () => void;
}

export default function ProductDetailPage({ product, onBack }: Props) {
  return (
    <div className="min-h-screen bg-purple-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 text-[#763721] hover:text-[#763721] font-medium transition-colors"
          >
            <ChevronLeft size={18} /> Back to Products
          </button>
        )}

        <Card className="overflow-hidden shadow-xl">
          <div className="md:grid md:grid-cols-2 gap-8">

            <CardContent className="p-0">
              <div className="relative w-full h-95 md:h-125 bg-linear-to-br from-blue-50 to-purple-50">
                <Image
                  src={product.image ?? "/images/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </CardContent>

            <CardContent className="p-8 space-y-6">

              {product.type && (
                <span className="inline-block bg-purple-100 text-[#763721] px-3 py-1 rounded-full text-sm font-semibold">
                  {product.type}
                </span>
              )}

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                {product.name}
              </h1>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Overview
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Package size={20} className="text-[#e74b12]" />
                  Specifications
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                  {Object.entries(product.specifications).map(
                    ([key, value]) =>
                      value !== "N/A" && (
                        <div key={key}>
                          <strong className="capitalize">
                            {key.replace(/([A-Z])/g, " $1")}:
                          </strong>{" "}
                          {value}
                        </div>
                      )
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Info size={20} className="text-[#ee470a]" />
                  Key Features
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4 pt-6">
                <button className="w-full bg-[#763721] text-white py-3 rounded-lg hover:bg-[#d94c19] transition-colors font-semibold">
                  Add To Favorite
                </button>

                <Link
                  href="/contact"
                  className="w-full inline-block text-center border-2 border-[#763721] text-[#c44416] py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
                >
                  Contact Sales Team
                </Link>
              </div>

            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
