
import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const originalPrice = 1800;
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden group hover:shadow-lg smooth-transition animate-fade-in cursor-pointer">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-medium mb-2 text-gray-900">{product.name}</h3>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-light text-gray-900">₹{product.price}/-</span>
              <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
            </div>
            <span className="text-green-600 text-sm font-medium">({discount}% OFF)</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
