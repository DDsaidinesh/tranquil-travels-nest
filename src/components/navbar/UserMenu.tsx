
import { Link } from 'react-router-dom';
import { User, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const UserMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-full border border-border flex items-center gap-2 transition-all duration-300 hover:shadow-md">
          <Menu size={16} />
          <User size={16} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="py-6 space-y-4">
          <h3 className="font-semibold mb-4 gradient-text">Menu</h3>
          <div className="space-y-2 flex flex-col">
            <Link to="/sign-up" className="py-2 px-3 rounded-md hover:bg-muted transition-colors font-medium hover:text-primary">Sign up</Link>
            <Link to="/login" className="py-2 px-3 rounded-md hover:bg-muted transition-colors hover:text-primary">Log in</Link>
            <div className="w-full h-px bg-border my-2"></div>
            <Link to="/listings" className="py-2 px-3 rounded-md hover:bg-muted transition-colors hover:text-primary">All listings</Link>
            <Link to="/" className="py-2 px-3 rounded-md hover:bg-muted transition-colors hover:text-primary">Host your home</Link>
            <Link to="/" className="py-2 px-3 rounded-md hover:bg-muted transition-colors hover:text-primary">Help Center</Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UserMenu;
