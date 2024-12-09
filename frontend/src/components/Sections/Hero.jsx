import { image } from "../../constants";

const Hero = () => {
  return (
    <div
      className="relative w-full flex justify-center items-center max-md:h-[500px] lg:h-[600px] md:h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image.herobackground})` }}
    >
      <div className="max-md:w-full px-3 md:w-4/6  justify-center items-center text-start text-white   md:mx-auto">
        <h1 className="font-bold text-7xl">Merrier Together</h1>
        <div className="py-5">
          <button className="border font-semibold max-md:text-md border-white rounded-full py-1 px-4">
            Discover the flavors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
