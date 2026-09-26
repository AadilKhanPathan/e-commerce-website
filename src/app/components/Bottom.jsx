"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  Heart,
  Home,
  LayoutPanelTop,
  LogOut,
  MapPinHouse,
  MessageCircleQuestionMark,
  Package,
  Settings,
  ShoppingCart,
  SquareUserRound,
  User,
} from "lucide-react";
import { AlarmClock, Clock, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";

// DRAWER
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// DROPDOWN MENU
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// AVATAR
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Bottom() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession()

  return (
    <div className="sticky bottom-0 z-50 bg-white w-full">
      <ul className="flex w-full items-center px-3 py-3 border-3 justify-between gap-5 text-sm text-white font-light">
        <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center">
          <Home />
          <Link href="/">Home</Link>
        </li>

        {/* CATEGORY SWIPE HANDLE */}
        <Drawer showSwipeHandle open={open} onOpenChange={setOpen}>
          <DrawerTrigger
            render={
              <button className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
                <LayoutPanelTop />
                <Link href="">Categories</Link>
              </button>
            }
          />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Categories</DrawerTitle>
              <DrawerDescription>Select your category</DrawerDescription>
            </DrawerHeader>
            <div className="w-full flex gap-2 p-4 items-center justify-center">
              <Link
                href="/?category=Men#collection"
                onClick={() => setOpen(false)}
              >
                <Button className={"rounded-2xl"}>Men</Button>
              </Link>
              <Link
                href="/?category=Women#collection"
                onClick={() => setOpen(false)}
              >
                <Button className={"rounded-2xl"}>Women</Button>{" "}
              </Link>
              <Link
                href="/?category=Kids#collection"
                onClick={() => setOpen(false)}
              >
                <Button className={"rounded-2xl"}>Kids</Button>{" "}
              </Link>
              <Button className={"rounded-2xl"} onClick={() => setOpen(false)}>
                For you
              </Button>
            </div>
            <div className="flex flex-col items-center">
              <h2>Shop By Type</h2>
              <div className="flex items-center justify-center gap-2 my-3">
                <span className="border-2 border-black rounded p-2">
                  <Watch className="" size={44} />
                </span>
                <span className="border-2 border-black rounded p-2">
                  <Clock size={44} />
                </span>
                <span className="border-2 border-black rounded p-2">
                  <AlarmClock size={44} />
                </span>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose
                render={<Button>Close</Button>}
                className={"rounded-sm"}
              />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
          <Heart />
          <Link href="/?category=Kids#collection">WishList</Link>
        </li>

        <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
          <ShoppingCart />
          <Link href="/?category=Recommendations#collection">Cart</Link>
        </li>

        {/* DROPDOWN MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <button className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
                <SquareUserRound />
                <Link href="">Profile</Link>
              </button>
            }
          />

          
          {session ? 
          // user is logged in
          <DropdownMenuContent className="w-1xl">
            <DropdownMenuGroup>
              <DropdownMenuItem className={"flex items-center gap-4"}>
                
                {/* AVATAR */}
                <Avatar>
                  <AvatarImage
                    src={session?.user.image}
                    alt="@shadcn"
                    className="grayscale"
                  />
                  <AvatarFallback><User/></AvatarFallback>
                </Avatar>
                <div>
                {session?.user.name}<div>{session?.user.email} </div>
                </div>
              </DropdownMenuItem>
            <DropdownMenuSeparator />

              <DropdownMenuItem><Package />My Orders</DropdownMenuItem>
              <DropdownMenuItem><MapPinHouse />Addresses</DropdownMenuItem>
              <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
            </DropdownMenuGroup>
          
            <DropdownMenuSeparator />
            <DropdownMenuItem className={"text-red-600"}><LogOut />Log out</DropdownMenuItem>
           
          </DropdownMenuContent>
          
          : 

          // USer is not logged in
          <DropdownMenuContent className="w-1xl">
            <DropdownMenuGroup>
              <DropdownMenuItem className={"flex items-center gap-4"}>
                
                {/* AVATAR */}
                <Avatar>
                  <AvatarImage
                    src={session?.user.image}
                    alt="@shadcn"
                    className="grayscale"
                  />
                  <AvatarFallback><User/></AvatarFallback>
                </Avatar>
                <div>
                <button>Sign in</button>
                </div>
              </DropdownMenuItem>
            <DropdownMenuSeparator />

              <DropdownMenuItem><Settings />Settings</DropdownMenuItem>
              <DropdownMenuItem><MessageCircleQuestionMark />Help & Support</DropdownMenuItem>
            </DropdownMenuGroup>
            
          </DropdownMenuContent>}
          
        </DropdownMenu>
      </ul>
    </div>
  );
}
