import { image } from "../constants";
const Nav = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-5 font-semibold">
        <div>
          <div className="flex justify-center items-center gap-4">
            <img className="w-14 h-14 mx-3" src={image.sblogo} alt="" />
            <h1>MENU</h1>
            <h1>MERCHANDISE</h1>
            <h1>REWARDS</h1>
          </div>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default Nav;
