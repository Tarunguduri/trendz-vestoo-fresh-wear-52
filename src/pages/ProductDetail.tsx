
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Heart, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Card, CardContent } from '../components/ui/card';
import { useCart } from '../hooks/useCart';
import CartIcon from '../components/CartIcon';
import Footer from '../components/Footer';
import { toast } from 'sonner';

const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    originalPrice: 1800,
    currentPrice: 576,
    discount: 68,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    description: "Premium quality cotton t-shirt with superior comfort and durability. Perfect for casual wear.",
    sizes: [
      { size: 'S', shoulder: 17, chest: 38, length: 26 },
      { size: 'M', shoulder: 17.5, chest: 40, length: 27 },
      { size: 'L', shoulder: 18, chest: 42, length: 28 },
      { size: 'XL', shoulder: 18.5, chest: 44, length: 29 },
      { size: 'XXL', shoulder: 19, chest: 46, length: 30 }
    ]
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    originalPrice: 1800,
    currentPrice: 576,
    discount: 68,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=500&h=500&fit=crop",
    description: "Classic denim jacket with vintage styling. A timeless piece for your wardrobe.",
    sizes: [
      { size: 'S', shoulder: 17, chest: 38, length: 26 },
      { size: 'M', shoulder: 17.5, chest: 40, length: 27 },
      { size: 'L', shoulder: 18, chest: 42, length: 28 },
      { size: 'XL', shoulder: 18.5, chest: 44, length: 29 },
      { size: 'XXL', shoulder: 19, chest: 46, length: 30 }
    ]
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    originalPrice: 1800,
    currentPrice: 576,
    discount: 68,
    image: "https://images.unsplash.com/photo-1506629905607-d5094ca0e021?w=500&h=500&fit=crop",
    description: "Comfortable slim fit chinos perfect for both casual and semi-formal occasions.",
    sizes: [
      { size: 'S', shoulder: 17, chest: 38, length: 26 },
      { size: 'M', shoulder: 17.5, chest: 40, length: 27 },
      { size: 'L', shoulder: 18, chest: 42, length: 28 },
      { size: 'XL', shoulder: 18.5, chest: 44, length: 29 },
      { size: 'XXL', shoulder: 19, chest: 46, length: 30 }
    ]
  },
  {
    id: 4,
    name: "Casual Hoodie",
    originalPrice: 1800,
    currentPrice: 576,
    discount: 68,
    image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=500&h=500&fit=crop",
    description: "Cozy casual hoodie made from premium cotton blend. Perfect for layering.",
    sizes: [
      { size: 'S', shoulder: 17, chest: 38, length: 26 },
      { size: 'M', shoulder: 17.5, chest: 40, length: 27 },
      { size: 'L', shoulder: 18, chest: 42, length: 28 },
      { size: 'XL', shoulder: 18.5, chest: 44, length: 29 },
      { size: 'XXL', shoulder: 19, chest: 46, length: 30 }
    ]
  },
  {
    id: 5,
    name: "Formal Dress Shirt",
    originalPrice: 1800,
    currentPrice: 576,
    discount: 68,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop",
    description: "Elegant formal dress shirt with crisp finish. Perfect for office and formal events.",
    sizes: [
      { size: 'S', shoulder: 17, chest: 38, length: 26 },
      { size: 'M', shoulder: 17.5, chest: 40, length: 27 },
      { size: 'L', shoulder: 18, chest: 42, length: 28 },
      { size: 'XL', shoulder: 18.5, chest: 44, length: 29 },
      { size: 'XXL', shoulder: 19, chest: 46, length: 30 }
    ]
  },
  {
    id: 6,
    name: "Summer Polo",
    originalPrice: 1800,
    currentPrice: 576,
    discount: 68,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500&h=500&fit=crop",
    description: "Lightweight summer polo shirt with breathable fabric. Ideal for warm weather.",
    sizes: [
      { size: 'S', shoulder: 17, chest: 38, length: 26 },
      { size: 'M', shoulder: 17.5, chest: 40, length: 27 },
      { size: 'L', shoulder: 18, chest: 42, length: 28 },
      { size: 'XL', shoulder: 18.5, chest: 44, length: 29 },
      { size: 'XXL', shoulder: 19, chest: 46, length: 30 }
    ]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product not found</h1>
          <Link to="/catalog">
            <Button variant="outline" className="border-white/20 hover:border-white hover:bg-white hover:text-black">
              Back to Catalog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out this ${product.name} - ₹${product.currentPrice}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: `${product.name} (${selectedSize})`,
        price: product.currentPrice,
        image: product.image
      });
    }
    
    toast.success(`Added ${quantity} item(s) to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      <CartIcon />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/catalog" className="inline-flex items-center mb-8">
          <Button variant="outline" size="sm" className="border-white/20 hover:border-white hover:bg-white hover:text-black">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Catalog
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-card border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-light text-white mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">(4.5 out of 5)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-bold text-white">₹{product.currentPrice}/-</span>
                <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice}</span>
                <span className="text-green-400 font-medium">({product.discount}% OFF)</span>
              </div>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground">{product.description}</p>

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Select Size</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                <div className="grid grid-cols-5 gap-3">
                  {product.sizes.map((sizeOption) => (
                    <div key={sizeOption.size} className="relative">
                      <RadioGroupItem
                        value={sizeOption.size}
                        id={sizeOption.size}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={sizeOption.size}
                        className="flex items-center justify-center w-12 h-12 border border-border rounded-md cursor-pointer hover:border-white peer-checked:border-white peer-checked:bg-white peer-checked:text-black transition-colors"
                      >
                        {sizeOption.size}
                      </label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Size Guide */}
            {selectedSize && (
              <Card className="bg-card border-border">
                <CardContent className="p-4">
                  <h4 className="font-medium text-white mb-3">Size Guide (inches)</h4>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-1">Size</p>
                      <p className="text-white font-medium">{selectedSize}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground mb-1">Shoulder</p>
                      <p className="text-white font-medium">
                        {product.sizes.find(s => s.size === selectedSize)?.shoulder}"
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground mb-1">Chest</p>
                      <p className="text-white font-medium">
                        {product.sizes.find(s => s.size === selectedSize)?.chest}"
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground mb-1">Length</p>
                      <p className="text-white font-medium">
                        {product.sizes.find(s => s.size === selectedSize)?.length}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quantity */}
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-white">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 p-0 border-white/20 hover:border-white hover:bg-white hover:text-black"
                >
                  -
                </Button>
                <span className="text-lg font-medium w-8 text-center text-white">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 p-0 border-white/20 hover:border-white hover:bg-white hover:text-black"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-white text-black hover:bg-gray-200 font-medium py-3"
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleShare}
                className="border-white/20 hover:border-white hover:bg-white hover:text-black"
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:border-white hover:bg-white hover:text-black"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
