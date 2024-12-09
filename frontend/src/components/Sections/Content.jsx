import { image } from "../../constants";

const Content = () => {
  return (
    <div className="container mx-auto  px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 my-4">
        {/* Image Section */}
        <div className="bg-cover bg-center">
          <img
            className="w-full h-auto"
            src={image.column1image}
            alt="Column Image"
          />
        </div>

        {/* Content Section */}
        <div className=" bg-[#D4E9E2] flex justify-center items-center">
          <div className="w-4/6 my-8 mx-auto ">
            <div className="text-center flex flex-col gap-3">
              <h1 className="font-bold text-2xl py-5 text-black/80 ">
                2025 Starbucks Traditions
              </h1>
              <div className="flex  justify-center items-center">
                <p className="text-black/90">
                  Connections make celebrations tastier—embrace the season’s
                  tradition and create joy with every cup. Collect 17 stickers
                  for a 2025 Starbucks Traditions merchandise.
                </p>
              </div>
              <div>
                <button className="rounded-full  px-4 my-3 py-1.5 font-semibold text-black/80 border border-black text-black bg-transparent">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-4">
        {/* Content Section */}
        <div className=" bg-[#F9F9F9] flex justify-center items-center">
          <div className="w-4/6 mx-auto my-8">
            <div className="text-center flex flex-col gap-3">
              <h1 className="font-bold text-2xl py-5 text-black/80 ">
                Sip Sip Hooray!
              </h1>
              <div className="flex  justify-center items-center">
                <p className="text-black/90">
                  For every purchase of a 12oz or larger drinkware, you’ll
                  receive an Eco Tumbler Voucher for a FREE Tall Beverage when
                  you bring your personal cup on your next visit. Every small
                  step counts, and together, we can make a big difference. 💚
                </p>
              </div>
              <div>
                <button className="rounded-full  px-4 my-3 py-1.5 font-semibold text-black/80 border border-black text-black bg-transparent">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="bg-cover bg-center">
          <img
            className="w-full h-auto"
            src={image.column1image}
            alt="Column Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
