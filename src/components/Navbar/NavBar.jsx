import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "../mode-toggle";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div
      id="navbar-cont"
      className="p-4 fixed  top-0 left-0 right-0 flex justify-between h-[7rem] w-[full] z-50 bg-white  dark:bg-[#020817]"
    >
      <Link to="/">
        <img src="/logo3.png" alt="Logo" className="h-[5rem] w-[5rem]" />
      </Link>
      <div className="lg:flex gap-3 hidden">
        <div className="nav-menu flex gap-2">
          <Link to="/">
            <Button variant="secondary">Home</Button>
          </Link>
          <Link to="/movies">
            <Button variant="secondary">Movies</Button>
          </Link>
          <Link to="/shows">
            <Button variant="secondary">TV Shows</Button>
          </Link>
        </div>

        <div className="searchBar flex gap-2">
          <Input placeholder="Enter something " />
          <Button>Search</Button>
        </div>
        <ModeToggle />
      </div>
      <div className="flex lg:!hidden">
        <Sheet>
          <SheetTrigger>
            <Button variant="secondary" className="h-[3rem] w-[3rem]">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col pt-8 gap-3">
              <div className="flex gap-4">
                <Input id="filter" placeholder="Enter something" />
                <Button>Search</Button>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="w-full flex justify-center align-center border-b"
                >
                  <Button variant="link">Home</Button>
                </Link>
                <Link
                  to="/movies"
                  className="w-full flex justify-center align-center border-b"
                >
                  <Button variant="link">Movies</Button>
                </Link>
                <Link
                  to="/shows"
                  className="w-full flex justify-center align-center border-b"
                >
                  <Button variant="link">Shows</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
