import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
const menuLinks = {
  Home: ["Links1", "Links2"],
  Listings: ["Links3", "Link4"],
  Blog: ["Links3", "Link4"],
  Pages: ["Links3", "Link4"],
};
function Header() {
  return (
    <header className="absolute top-0 left-0 py-4 z-10 w-full">
      <nav className="container flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {/* menu lines */}
          <div className="flex flex-col gap-2">
            <span className="block w-8 h-[1px] bg-white"></span>
            <span className="block w-5 h-[1px] bg-white ms-auto"></span>
          </div>
          <p className="text-white font-light">Menu</p>
          <p className="uppercase font-medium text-white text-2xl ms-2 tracking-wide">
            Boxcars
          </p>
        </div>
        <div className="flex gap-3 items-center">
          {Object.keys(menuLinks).map((category) => (
            <NavigationMenu key={category}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{category}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {menuLinks[category].map((item, index) => (
                      <NavigationMenuLink key={index}>
                        {item}
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
          <a
            href=""
            className="text-sm font-medium text-white px-4 py-2  relative z-10 flex max-w-max flex-1 items-center justify-center"
          >
            About
          </a>
          <a
            href=""
            className="text-sm font-medium text-white px-4 py-2 relative z-10 flex max-w-max flex-1 items-center justify-center"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
