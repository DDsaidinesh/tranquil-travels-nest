
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-4 md:px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Safety information</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Cancellation options</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Our COVID-19 Response</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Community</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">TranquilStay Magazine</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Accessibility</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">TranquilStay Associates</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Frontline Stays</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Host your home</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Host an Experience</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Resource Center</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Community Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">How it works</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Newsroom</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Investors</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2023 TranquilStay, Inc. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram size={20} />
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={20} />
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
