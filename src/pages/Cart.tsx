import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import Footer from '../components/Footer';
import FloatingClothes from '../components/FloatingClothes';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [userDetails, setUserDetails] = useState({
    name: '',
    mobile: '',
    state: '',
    city: '',
    pincode: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setUserDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckout = () => {
    if (!userDetails.name || !userDetails.mobile || !userDetails.state || !userDetails.city || !userDetails.pincode) {
      alert('Please fill in all required fields');
      return;
    }

    const orderDetails = cartItems.map(item => 
      `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const message = `*New Order from Trendz Vestoo*

*Customer Details:*
Name: ${userDetails.name}
Mobile: ${userDetails.mobile}
State: ${userDetails.state}
City: ${userDetails.city}
Pincode: ${userDetails.pincode}

*Order Details:*
${orderDetails}

*Total Amount: ₹${getTotalPrice().toFixed(2)}*

Thank you for shopping with Trendz Vestoo! 🛍️

Powered by ReView`;

    const whatsappUrl = `https://wa.me/917730003355?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col py-8 px-4 relative overflow-hidden">
        <FloatingClothes />
        <div className="max-w-4xl mx-auto flex-1 flex flex-col relative z-10">
          <div className="flex items-center mb-8">
            <Link to="/catalog">
              <Button variant="outline" size="sm" className="mr-4 border-white/20 hover:border-white hover:bg-white hover:text-black">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Catalog
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-light tracking-wider text-white">
              CART
            </h1>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-8">Your cart is empty</p>
              <Link to="/catalog">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col py-8 px-4 relative overflow-hidden">
      <FloatingClothes />
      <div className="max-w-4xl mx-auto flex-1 flex flex-col relative z-10">
        <div className="flex items-center mb-8">
          <Link to="/catalog">
            <Button variant="outline" size="sm" className="mr-4 border-white/20 hover:border-white hover:bg-white hover:text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Catalog
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-light tracking-wider text-white">
            CART
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
          {/* Cart Items */}
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-white mb-6">Your Items</h2>
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-lg p-6 animate-fade-in">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">{item.name}</h3>
                    <p className="text-muted-foreground">₹{item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 p-0 border-white/20 hover:border-white hover:bg-white hover:text-black"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-white w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 p-0 border-white/20 hover:border-white hover:bg-white hover:text-black"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="w-8 h-8 p-0 border-red-500/50 hover:border-red-500 hover:bg-red-500 hover:text-white ml-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-right text-white font-medium">
                    Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-right">
                <p className="text-2xl font-light text-white">
                  Total: ₹{getTotalPrice().toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-light text-white mb-6">Delivery Details</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">Name *</Label>
                <Input
                  id="name"
                  value={userDetails.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  className="bg-background border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <Label htmlFor="mobile" className="text-white">Mobile Number *</Label>
                <Input
                  id="mobile"
                  value={userDetails.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="Your mobile number"
                  className="bg-background border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <Label htmlFor="state" className="text-white">State *</Label>
                <Input
                  id="state"
                  value={userDetails.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  placeholder="Your state"
                  className="bg-background border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <Label htmlFor="city" className="text-white">City *</Label>
                <Input
                  id="city"
                  value={userDetails.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Your city"
                  className="bg-background border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <Label htmlFor="pincode" className="text-white">Pincode *</Label>
                <Input
                  id="pincode"
                  value={userDetails.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  placeholder="Your pincode"
                  className="bg-background border-white/20 text-white placeholder:text-gray-500"
                />
              </div>
              
              <Button 
                onClick={handleCheckout}
                className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3 mt-6"
              >
                Checkout via WhatsApp
              </Button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
