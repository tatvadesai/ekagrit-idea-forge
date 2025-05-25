
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div className="flex flex-col space-y-2">
            <h3 className="font-space font-bold text-lg text-primary">Ekagrit Ventures</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Ideas wanted. Vision required. A solo-backed platform for early-stage founders.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Ekagrit Ventures. Building the future, one conversation at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
