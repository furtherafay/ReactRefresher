import React from "react";
import { useState, useEffect } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"

const SearchBar = () => {

    const [city, setCity] = useState("Select a city");


  return (
    <>
      <div className="w-15 h-22">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white"><Button variant="default">{city}</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={()=>setCity("Islamabad")}>Islamabad</DropdownMenuItem>
            <DropdownMenuItem onSelect={()=>setCity("Lahore")}>Lahore</DropdownMenuItem>
            <DropdownMenuItem onSelect={()=>setCity("Karachi")}>Karachi</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default SearchBar;
