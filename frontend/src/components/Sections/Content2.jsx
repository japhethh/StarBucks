import { image } from "../../constants";

const Content2 = () => {
  return (
    <div className="container mx-auto px-10">
      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div className="overflow-hidden bg-content bg-center">
          <div className="relative w-full h-[400px]">
            <img
              className="w-full h-full object-cover"
              src={image.column2_1}
              alt="Pretzel Party"
            />
          </div>
          <div className="py-7 text-center bg-[#1E3932] text-white">
            <div className="md:w-4/6 mx-auto">
              <h1 className="text-2xl font-semibold py-3">
                It’s A Pretzel Party
              </h1>
              <h1 className="py-3">
                Festive cheer of salted pretzels meets the heartwarming comfort
                of cocoa and espresso.
              </h1>
              <div className="py-3">
                <button className="rounded-full py-1 px-4 border border-white/80 font-semibold bg-transparent">
                  Sip, sip, go
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-content bg-center">
          <div className="relative w-full h-[400px]">
            <img
              className="w-full h-full object-cover"
              src={image.column2_2}
              alt="Pretzel Party"
            />
          </div>
          <div className="py-7 text-center bg-[#1E3932] text-white">
            <div className="md:w-4/6 mx-auto">
              <h1 className="text-2xl font-semibold py-3">Holiday Mode On</h1>
              <h1 className="py-3">
                Experience the warmth and joy of the holidays —our new food menu
                is here to delight.
              </h1>
              <div className="py-3">
                <button className="rounded-full py-1 px-4 border border-white/80 font-semibold bg-transparent">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
        <div className="overflow-hidden bg-content bg-center">
          <div className="relative w-full h-[400px]">
            <img
              className="w-full h-full object-cover"
              src={image.column2_3}
              alt="Pretzel Party"
            />
          </div>
          <div className="py-5 text-center bg-[#D4E9E2] md:h-[200px] text-[#1E3932]">
            <div className="md:w-4/6 mx-auto">
              <h1 className="text-2xl font-semibold py-3">27th Anniversary</h1>
              <h1 className="py-3">
                Fill your favorite drink and go wherever the day takes you.
              </h1>
              <div className="py-3">
                <button className="rounded-full font-semibold py-1 px-4 border  border-[#1E3932] bg-transparent">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-content bg-center">
          <div className="relative w-full h-[400px]">
            <img
              className="w-full h-full object-cover"
              src={image.column2_4}
              alt="Pretzel Party"
            />
          </div>
          <div className="py-5 text-center bg-[#1E3932] text-white md:h-[200px]">
            <div className="md:w-5/6 mx-auto">
              <h1 className="text-2xl font-semibold py-3">
                No time to head out?
              </h1>
              <h1 className="py-3">
                Have your favorites delivered straight to your doorstep
              </h1>
              <div className="py-3">
                <button className="rounded-full py-1 px-4 border border-white/80 font-semibold bg-transparent">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
        <div className="bg-[#FAF6EE] ">
          <div className="h-[200px] my-3 flex justify-center items-center text-center md:w-5/6 mx-auto">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold py-4">Starbucks Stories</h1>
              <p className="text-gray-800">
                Continuing to inspire and nurture the human spirit–one person,
                one cup and one neighborhood at a time.
              </p>

              <div className="py-3">
                <button className="border border-black/80 rounded-full px-4 py-1 font-semibold">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-[200px] w-full">
            <div className=" bg-content bg-top h-[200px]">
              <img
                className="w-full h-full object-cover"
                src={image.column2_5}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
