
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="fixed top-6 right-6 z-50 group">
      <div className="relative bg-white text-black p-3 rounded-full shadow-lg hover:shadow-xl smooth-transition hover-scale">
        <ShoppingBag className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-scale-in">
            {itemCount}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
