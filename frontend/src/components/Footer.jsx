import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
    <div className=" border-t">
      <div className="container mx-auto px-10 ">
        <div className="py-8 ">
          <div className="grid  grid-cols-2 md:grid-cols-5 gap-3 border-b">
            <div className="p-3  ">
              <h2 className="text-xl text-black/80 font-semibold py-4">
                About Us
              </h2>
              <ul className="flex flex-col gap-3 text-gray-600">
                <li className="cursor-pointer">
                  <a href="#">Our Company</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">Stories and News</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">Customer Service</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="p-3">
              <h2 className="text-xl text-black/80 font-semibold py-4">
                Order Online
              </h2>
              <ul className="flex flex-col gap-3 text-gray-600">
                <li className="cursor-pointer">
                  <a href="#">Order on the App</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">Delivery</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">Send eGifts</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">Grab Partnership</a>
                </li>
              </ul>
            </div>
            <div className="p-3">
              <h2 className="text-xl text-black/80 font-semibold py-4">
                Rewards
              </h2>
              <ul className="flex flex-col gap-3 text-gray-600">
                <li className="cursor-pointer">
                  <a href="#">My Account</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">View Transactions</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">Reload</a>
                </li>
                <li className="cursor-pointer">
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="p-3">
              <h2 className="text-xl text-black/80 font-semibold py-4">
                Social Impact
              </h2>
            </div>
            <div className="p-3">
              <h2 className="text-xl text-black/80 font-semibold py-4">
                About Us
              </h2>
            </div>
          </div>

          {/* Second Footer */}
          <div>
            <div className="py-5">
              <ul className="flex gap-3">
                <li className="bg-black text-white  rounded-full p-2 text-xl">
                  <FaFacebookF />
                </li>
                <li className="bg-black text-white  rounded-full p-2 text-xl">
                  <IoLogoTwitter />
                </li>
                <li className="bg-black text-white  rounded-full p-2 text-xl">
                  <LuInstagram />
                </li>
                <li className="bg-black text-white  rounded-full p-2 text-xl">
                  <IoLogoYoutube />
                </li>
              </ul>
            </div>
          </div>

          {/* Third Footer */}
          <div className="">
            <div className="flex max-md:flex-col md:justify-between  md:items-center gap-3">
              <ul className="grid grid-cols-1 md:grid-cols-5 font-semibold text-md gap-3">
                <li>
                  <h1 className="text-black/80">Web Accessibility</h1>
                </li>
                <li>
                  <h1 className="text-black/80">Privacy Policy</h1>
                </li>
                <li>
                  <h1 className="text-black/80">Terms of Use</h1>
                </li>
                <li>
                  <h1 className="text-black/80">Site Map</h1>
                </li>
                <li>
                  <h1 className="text-black/80">Cookie Preferences</h1>
                </li>
              </ul>

              <div className="my-3">
                <h1>© 2022 Adrey Locaylocay. All rights reserved.</h1>
              </div>
            </div>
          </div>

          {/* Mobile Third Footer */}
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
