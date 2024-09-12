import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CgSearch } from "react-icons/cg";

function FilterSearch() {
  return (
    <div className="flex flex-col items-center text-black w-full justify-around h-fit bg-white lg:flex-row dark:bg-black ">
      <Select className="lg:w-[25%] ">
        <SelectTrigger className="text-black hover:text-primary font-light dark:bg-black dark:text-white">
          <SelectValue placeholder="Any Makes" />
        </SelectTrigger>
        <SelectContent className=" backdrop-blur-sm w-full text-nowrap">
          <SelectItem value="item 1">Item 1</SelectItem>
          <SelectItem value="item 2">Item 2</SelectItem>
          <SelectItem value="item 3">Item 3</SelectItem>
        </SelectContent>
      </Select>
      <Select className="lg:w-[25%] ">
        <SelectTrigger className="text-black hover:text-primary font-light dark:bg-black dark:text-white">
          <SelectValue placeholder="Items" />
        </SelectTrigger>
        <SelectContent className=" backdrop-blur-sm w-full text-nowrap">
          <SelectItem value="item 1">Item 1</SelectItem>
          <SelectItem value="item 2">Item 2</SelectItem>
          <SelectItem value="item 3">Item 3</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex w-full max-w-sm items-center space-x-2 relative">
        <Input
          type="email"
          placeholder="Email"
          className="dark:text-white w-full max-w-[200px]"
        />
        <Button
          type="submit"
          className="flex gap-1 px-14 py-5 absolute right-0"
        >
          <CgSearch />
          Search
        </Button>
      </div>
    </div>
  );
}

export default FilterSearch;
