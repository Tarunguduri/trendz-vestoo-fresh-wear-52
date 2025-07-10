
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Button } from './ui/button';

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
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden group hover:border-white/20 smooth-transition animate-fade-in">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium mb-2 text-foreground">{product.name}</h3>
        <p className="text-2xl font-light mb-4 text-white">₹{product.price}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 p-0 border-white/20 hover:border-white hover:bg-white hover:text-black"
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="text-lg font-medium w-8 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 p-0 border-white/20 hover:border-white hover:bg-white hover:text-black"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Button 
          onClick={handleAddToCart}
          className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
