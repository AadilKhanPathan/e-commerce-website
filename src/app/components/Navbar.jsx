"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

function Navbar() {
  const [search, setSearch] = useState();

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white font-semibold tracking-tight">
      <header className="text-3xl flex h-17 bg-white items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="font-bold">
          T<span className="text-red-600">i</span>tan
          <span className="text-red-400">.</span>
        </Link>

        <ul className="w-full hidden md:flex items-center justify-center gap-8 text-sm text-white font-light">
          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer">
            <Link href="/?category=Men#collection">Men</Link>
          </li>

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer">
            <Link href="/?category=Women#collection">Women</Link>
          </li>

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer">
            <Link href="/?category=Kids#collection">Kids</Link>
          </li>

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer">
            <Link href="/?category=Recommendations#collection">
              Recommendations
            </Link>
          </li>
        </ul>

        <div className="flex gap-3 mr-2.5">
          {search ? (
          <Input
          className={`transition-all duration-300 ease-in-out overflow-hidden rounded-none ${search ? "w-50 opacity-100 px-2 border-b border-solid border-white " : "w-0 opacity-0 px-0 border-none"}`}
            type="text"
            placeholder="Search your movie"
            autoFocus
            onBlur={() => setSearch(false)}
          />
        ) : (
          <Search
           
            width={20}
            height={20}
            alt="Search"
            className="cursor-pointer"
            onClick={() => setSearch(true)}
          />
        )}

          <ShoppingCart />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
