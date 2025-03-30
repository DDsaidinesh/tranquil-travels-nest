
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './navbar/Logo';
import SearchBar from './navbar/SearchBar';
import CountrySelector from './navbar/CountrySelector';
import UserMenu from './navbar/UserMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show the search bar when scrolled down more than 100px
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 px-4 md:px-6 py-4 border-b border-border transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Search bar - desktop */}
        <SearchBar isScrolled={isScrolled} />

        {/* Right Nav Items */}
        <div className="flex items-center gap-3">
          <Link to="/listings" className="hover:bg-muted px-3 py-2 rounded-full hidden md:flex text-sm font-medium transition-all duration-300 hover:text-primary">
            Explore
          </Link>
          
          <div className="flex items-center gap-2">
            <CountrySelector />
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
