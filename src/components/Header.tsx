
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-white">
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text">
                DTA
              </span>
            </div>
            <div className="ml-2 text-white text-sm font-medium hidden sm:block">
              Digital Transformation Africa
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link to="/about">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Our Mission</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Leading Africa's digital transformation
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    {/*  <Link to="/about">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Leadership</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Meet our expert team
                        </p>
                      </NavigationMenuLink>
                    </Link> */}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Work</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[500px] grid-cols-2">
                    <Link to="/our-work">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Digital ID</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          National identity systems
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link to="/our-work">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">E-Government</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Digital government services
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link to="/our-work">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">DPI</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Digital Public Infrastructure
                        </p>
                      </NavigationMenuLink>
                    </Link>
                    <Link to="/our-work">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Interoperability</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          System integration solutions
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/resources">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
               <NavigationMenuItem>
                <Link to="/news-events">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    News & Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/*<NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}

            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-700/50">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-white hover:text-orange-400 px-3 py-2 rounded-md transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-orange-400 px-3 py-2 rounded-md transition-colors">
                About Us
              </Link>
              <Link to="/our-work" className="text-white hover:text-orange-400 px-3 py-2 rounded-md transition-colors">
                Our Work
              </Link>
              <Link to="/resources" className="text-white hover:text-orange-400 px-3 py-2 rounded-md transition-colors">
                Resources
              </Link>
              <Link to="/news-events" className="text-white hover:text-orange-400 px-3 py-2 rounded-md transition-colors">
                News & Events
              </Link>
              <Link to="/contact" className="text-white hover:text-orange-400 px-3 py-2 rounded-md transition-colors">
                Contact
              </Link>
              <div className="pt-2">
                <Link to="/contact">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
