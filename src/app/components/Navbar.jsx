
import Link from "next/link";

import { ShoppingCart , Search } from "lucide-react";

function Navbar() {
  const navItems = [
    { name: "About", href: "/about" },

    { name: "Projects", href: "/projects" },

    { name: "Contact", href: "/contact" },

    { name: "Features", href: "/features" },
  ];

  return (
    <div className="sticky top-0 w-full border-b font-semibold tracking-tight ">
      <header className="text-3xl flex h-20 items-center justify-between px-4">
        {/* LOGO */}

        <Link href="/" className="font-bold ">
         T<span className="text-red-600">i</span>tan<span className="text-red-400">.</span>
        </Link>

        <div className="flex gap-1">
             <div className="flex gap-3 mr-2.5">
            <Search/>
            <ShoppingCart />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

