import Link from "next/link"
import { Heart, Home, LayoutPanelTop, ShoppingCart, SquareUserRound } from "lucide-react"
import {  AlarmClock, Clock, UserRoundArrowLeft, Watch } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function Bottom() {
  return (
    <div className="sticky bottom-0 z-50 bg-white w-full">
      <ul className="flex w-full items-center px-3 py-3 border-3 justify-between gap-5 text-sm text-white font-light">

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center"> 
            <Home/>
            <Link  href="/">
              Home
            </Link>
          </li>

          

          {/* SHADCN SWIPE HANDLE */}
          <Drawer showSwipeHandle>
      <DrawerTrigger render={<li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
            <LayoutPanelTop />
            <Link href="/?category=Women#collection">
              Categories
            </Link>
          </li>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Categories</DrawerTitle>
          <DrawerDescription>Select your category</DrawerDescription>
        </DrawerHeader>
        <div className="w-full flex gap-2 p-4 items-center justify-center">
         <Button href={"/"} className={"rounded-sm"} >Men</Button> 
         <Button className={"rounded-sm"} >Women</Button> 
         <Button className={"rounded-sm"} >Kids</Button> 
         <Button className={"rounded-sm"} >For you</Button> 
        </div>
        <div className="flex flex-col items-center" >
            <h2>Shop By Type</h2>
            <div className="flex items-center justify-center gap-2 my-3">
                <span className="border-2 border-black rounded p-2"><Watch className="" size={44}/></span>
                <span className="border-2 border-black rounded p-2"><Clock size={44}/></span>
                <span className="border-2 border-black rounded p-2"><AlarmClock size={44}/></span>
            </div>
            
        </div>
        <DrawerFooter>
          <DrawerClose  render={<Button>Close</Button>} className={"rounded-sm"}  />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
            <Heart />
            <Link href="/?category=Kids#collection">
              WishList
            </Link>
          </li>

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
            <ShoppingCart />
            <Link href="/?category=Recommendations#collection">
              Cart
            </Link>
          </li>
          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
            <SquareUserRound />
            <Link href="/?category=Recommendations#collection">
              Profile
            </Link>
          </li>

        </ul>
    </div>
  )
}
