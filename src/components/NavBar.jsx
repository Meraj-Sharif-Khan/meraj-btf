import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import brandLogo from "../assets/images/brandLogo.png";
import { ChevronDown, Search } from "lucide-react";
import searchIcon from "../assets/icons/searchIcon.svg"

const NavBar = () => {
  return (
    <div className="container">
      <div className="flex flex-row items-center justify-between">
        {/* brand logo */}
        <div className="bg-primary w-[195px] px-[11px] py-[9px]">
          <img
            className="w-full h-full object-contain"
            src={brandLogo}
            alt="brand logo"
          />
        </div>
        {/* nav button */}
        <div className="flex flex-row items-center gap-[11px] ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex gap-1">
                About Us
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>What We Do</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex gap-1">
                Thalassemia
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>What We Do</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex gap-1">
                Hospital
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>What We Do</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex gap-1">
                Zakat for Life
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>About Us</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>What We Do</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="bg-primary px-[40px] py-[11.5px] rounded-full text-white whitespace-nowrap">Donate Us</button>
          <button className="h-[18px] w-[18px]">
           <img className="h-full w-full" src={searchIcon} alt="searchIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
