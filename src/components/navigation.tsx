import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "writings", path: "/writings" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-space font-bold text-xl text-primary hover:text-primary/80 transition-colors">
            ekagrit ventures
          </Link>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-inter font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
