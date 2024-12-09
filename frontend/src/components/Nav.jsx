import { useState } from "react";
import { image } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto px-5">
      <div className="flex justify-between items-center py-5 font-semibold">
        <div>
          <div className="flex gap-4">
            <img
              className="w-14 h-14 mx-3 max-md:block"
              src={image.sblogo}
              alt=""
            />
            <div className="flex justify-center items-center gap-4 max-md:hidden">
              <h1 className="cursor-pointer hover:text-green-800">MENU</h1>
              <h1 className="cursor-pointer hover:text-green-800">MERCHANDISE</h1>
              <h1 className="cursor-pointer hover:text-green-800">REWARDS</h1>
            </div>
          </div>
        </div>
        <div className="max-md:hidden">
          <ul className="flex justify-center items-center gap-3">
            <li className="mr-3 ">
              <h1 className="px-3">Find a Store</h1>
            </li>
            <li>
              <button className="bg-white text-black border border-black rounded-full px-4 py-1">
                Sign in
              </button>
            </li>
            <li>
              <button className="rounded-full px-4 py-1.5 bg-black text-white">
                Join Now
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <GiHamburgerMenu className="text-2xl" onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* Sidebar */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40">
          <div className="fixed top-0 right-0 h-full w-64 bg-white z-50 p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Menu</h2>
              <IoClose className="text-2xl cursor-pointer" onClick={() => setOpen(false)} />
            </div>
            <ul className="mt-5 space-y-4">
              <li className="cursor-pointer">MENU</li>
              <li className="cursor-pointer">MERCHANDISE</li>
              <li className="cursor-pointer">REWARDS</li>
              <li className="cursor-pointer">Find a Store</li>
              <li className="cursor-pointer">Sign In</li>
              <li className="cursor-pointer">Join Now</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
