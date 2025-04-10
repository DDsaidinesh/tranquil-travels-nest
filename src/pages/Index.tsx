
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { getAllProperties, getFeaturedProperties } from '@/services/propertyService';

const Index = () => {
  const properties = getAllProperties();
  const featuredProperties = getFeaturedProperties();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col ghibli-background">
      <Navbar />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4">
        <Hero />
        
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 ghibli-heading">Find your dream getaway</h2>
          <FilterBar />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {featuredProperties.slice(0, 4).map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/listings">
              <Button variant="outline" size="lg" className="ghibli-button">View all listings</Button>
            </Link>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 ghibli-heading">Experience something unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl overflow-hidden relative group hover-scale ghibli-card">
              <img 
                src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&q=80" 
                alt="Mountain retreat" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent ghibli-overlay"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-medium mb-1">Mountain Retreats</h3>
                <p>Escape to the mountains</p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden relative group hover-scale ghibli-card">
              <img 
                src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80" 
                alt="Beach houses" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent ghibli-overlay"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-medium mb-1">Oceanside Escapes</h3>
                <p>Wake up to the sound of waves</p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden relative group hover-scale ghibli-card">
              <img 
                src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80" 
                alt="Desert homes" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent ghibli-overlay"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-medium mb-1">Desert Getaways</h3>
                <p>Find peace in the wilderness</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="bg-secondary/40 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center ghibli-host-card">
            <div className="max-w-2xl z-10 md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4 ghibli-heading">Ready to become a host?</h2>
              <p className="text-lg mb-6">Share your space and earn extra income while connecting with travelers from around the world.</p>
              <Button size="lg" className="btn-shine relative z-10 ghibli-button">Learn more about hosting</Button>
            </div>
            
            <div className="md:absolute md:right-0 md:top-0 md:h-full w-full md:w-1/3 mt-8 md:mt-0 overflow-hidden">
              <div className="w-full h-full transform transition-transform duration-700 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                  alt="Hosting illustration"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8 ghibli-heading">Trending destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 6).map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
