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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CgSearch } from "react-icons/cg";

function FilterSearch() {
  return (
    <div className="flex flex-col items-center text-black w-full justify-around h-fit bg-white lg:flex-row">
      <NavigationMenu className="lg:w-[25%] ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-black hover:text-primary font-light">
              Any Makes
            </NavigationMenuTrigger>
            <NavigationMenuContent className=" backdrop-blur-sm w-full text-nowrap">
              <NavigationMenuLink>item 1</NavigationMenuLink>
              <NavigationMenuLink>item 2</NavigationMenuLink>
              <NavigationMenuLink>item 3</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-black hover:text-primary font-light">
              Item One
            </NavigationMenuTrigger>
            <NavigationMenuContent className="backdrop-blur-sm w-full text-nowrap">
              <NavigationMenuLink>Link 1</NavigationMenuLink>
              <NavigationMenuLink>Link 2</NavigationMenuLink>
              <NavigationMenuLink>Link 3</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit" className="flex gap-1 px-14 py-5">
          <CgSearch />
          Search
        </Button>
      </div>
    </div>
  );
}

export default FilterSearch;
