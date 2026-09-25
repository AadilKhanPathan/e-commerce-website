import Link from "next/link"
import { Heart, Home, LayoutPanelTop, ShoppingCart, SquareUserRound } from "lucide-react"

export default function Bottom() {
  return (
    <div className="sticky bottom-0 z-50 bg-white w-full">
      <ul className="flex w-full items-center px-3 py-3 border-3 justify-between gap-5 text-sm text-white font-light">

          <li className="text-black flex flex-col items-center hover:border-black cursor-pointer"> 
            <Home/>
            <Link  href="/?category=Men#collection">
              Home
            </Link>
           

          </li>

          <li className="text-black hover:border-b-2 hover:border-black cursor-pointer flex flex-col items-center ">
            <LayoutPanelTop />
            <Link href="/?category=Women#collection">
              Categories
            </Link>
          </li>

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
