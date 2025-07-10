
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import CartIcon from '../components/CartIcon';
import Footer from '../components/Footer';

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Amazing quality! The fabric feels so fresh and comfortable. Highly recommend Trendz Vestoo!"
  },
  {
    id: 2,
    name: "Rahul Patel",
    rating: 5,
    comment: "Fast delivery and excellent customer service. The clothes fit perfectly and look great!"
  },
  {
    id: 3,
    name: "Sneha Gupta",
    rating: 4,
    comment: "Love the modern designs. Perfect for both casual and formal occasions."
  },
  {
    id: 4,
    name: "Arjun Singh",
    rating: 5,
    comment: "Best online clothing brand I've shopped from. Quality is outstanding!"
  }
];

const KnowMore = () => {
  return (
    <>
      <CartIcon />
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="mr-4 border-white/20 hover:border-white hover:bg-white hover:text-black">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl md:text-5xl font-light tracking-wider text-white">
                KNOW MORE
              </h1>
              <p className="text-muted-foreground mt-2 font-light">
                About our journey and what customers say
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-wide">Our Founder</h2>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium text-white">Rajesh Kumar</h3>
                    <p className="text-lg text-muted-foreground font-light">
                      Founder & CEO
                    </p>
                    <p className="text-white leading-relaxed font-light">
                      With over 15 years of experience in the textile industry, Rajesh founded Trendz Vestoo 
                      with a vision to make premium quality clothing accessible to everyone. His passion for 
                      sustainable fashion and innovative designs has made Trendz Vestoo a trusted name in 
                      contemporary clothing.
                    </p>
                    <p className="text-white leading-relaxed font-light">
                      "We believe that fashion should not only make you look good but also feel fresh and 
                      confident. Every piece we create is crafted with love and attention to detail."
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-light">Founder Photo</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer Reviews */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-white mb-8 tracking-wide">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-card border-border animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <h3 className="text-lg font-medium text-white mr-3">{review.name}</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      "{review.comment}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card border border-border rounded-lg p-12">
            <h3 className="text-2xl font-light text-white mb-4">Ready to Experience Fresh Fashion?</h3>
            <p className="text-muted-foreground mb-8 font-light">
              Join thousands of satisfied customers and discover your new favorite wardrobe
            </p>
            <Link to="/catalog">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-medium">
                Shop Now
              </Button>
            </Link>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default KnowMore;
