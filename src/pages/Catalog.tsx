
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CartIcon from '../components/CartIcon';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 576,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 576,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=500&h=500&fit=crop"
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    price: 576,
    image: "https://images.unsplash.com/photo-1506629905607-d5094ca0e021?w=500&h=500&fit=crop"
  },
  {
    id: 4,
    name: "Casual Hoodie",
    price: 576,
    image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=500&h=500&fit=crop"
  },
  {
    id: 5,
    name: "Formal Dress Shirt",
    price: 576,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop"
  },
  {
    id: 6,
    name: "Summer Polo",
    price: 576,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop"
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col py-8 px-4">
      <CartIcon />
      <div className="max-w-7xl mx-auto flex-1 flex flex-col">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="mr-4 border-gray-300 hover:border-gray-600 hover:bg-gray-100 text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl md:text-5xl font-light tracking-wider text-gray-900">
              CATALOG
            </h1>
            <p className="text-gray-600 mt-2 font-light">
              Discover our latest collection
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Catalog;
