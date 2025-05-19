import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, Package, MessageSquare } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg border-t border-dark-200 dark:border-dark-700 z-30">
      <div className="flex justify-around items-center py-2 px-4">
        <MobileNavItem to="/" icon={<Home className="h-5 w-5" />} label="Home" />
        <MobileNavItem to="/services" icon={<ShoppingBag className="h-5 w-5" />} label="Services" />
        <MobileNavItem to="/packages" icon={<Package className="h-5 w-5" />} label="Packages" />
        <MobileNavItem to="/contact" icon={<MessageSquare className="h-5 w-5" />} label="Contact" />
      </div>
    </div>
  );
};

interface MobileNavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const MobileNavItem = ({ to, icon, label }: MobileNavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `flex flex-col items-center justify-center px-3 py-1 rounded-full transition-all ${
          isActive
            ? 'text-primary-600 dark:text-primary-400 scale-110 bg-primary-50 dark:bg-primary-900/20'
            : 'text-dark-500 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800'
        }`
      }
    >
      {icon}
      <span className="text-[10px] mt-0.5">{label}</span>
    </NavLink>
  );
};

export default MobileNav;