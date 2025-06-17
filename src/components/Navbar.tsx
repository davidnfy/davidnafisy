
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-all duration-500 ease-in-out ${
                isScrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                  : 'text-white'
              }`}>
                DavNfyy
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out flex items-center gap-2 transform hover:scale-105 ${
                        isScrolled
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          : 'text-white/90 hover:text-white hover:bg-white/20'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className={`transition-all duration-300 ease-in-out transform hover:scale-110 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <>
        {/* Overlay */}
        <div 
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Sidebar - Slides from right to left */}
        <div className={`fixed top-0 right-0 h-full w-80 z-50 bg-white/95 backdrop-blur-lg shadow-2xl transform transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DavNfyy
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-4 px-4 py-4 font-semibold text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 ease-in-out text-lg transform hover:scale-105 hover:translate-x-2"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: isOpen ? 'slide-in-right 0.6s ease-out forwards' : 'none'
                      }}
                    >
                      <Icon className="h-6 w-6" />
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;
