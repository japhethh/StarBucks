import { image } from "../../constants";

const Content2 = () => {
  return (
    <div className="container mx-auto ">
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
          <div className="py-3 text-center bg-[#1E3932] text-white">
            <div className="md:w-4/6 mx-auto">
              <h1 className="text-2xl font-semibold py-3">
                It’s A Pretzel Party
              </h1>
              <h1 className="py-5">
                Festive cheer of salted pretzels meets the heartwarming comfort
                of cocoa and espresso.
              </h1>
              <div className="py-3">
                <button className="rounded-full py-1 px-4 border border-white/80 bg-transparent">
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
          <div className="py-3 text-center bg-[#1E3932] text-white">
            <div className="md:w-4/6 mx-auto">
              <h1 className="text-2xl font-semibold py-3">
                It’s A Pretzel Party
              </h1>
              <h1 className="py-5">
                Festive cheer of salted pretzels meets the heartwarming comfort
                of cocoa and espresso.
              </h1>
              <div className="py-3">
                <button className="rounded-full py-1 px-4 border border-white/80 bg-transparent">
                  Sip, sip, go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="overflow-hidden bg-content bg-center">
          <div className="relative w-full h-[400px]">
            <img
              className="w-full h-full object-cover"
              src={image.column2_3}
              alt="Pretzel Party"
            />
          </div>
          <div className="py-3 text-center bg-[#1E3932] text-white">
            <div className="md:w-4/6 mx-auto">
              <h1 className="text-2xl font-semibold py-3">
                It’s A Pretzel Party
              </h1>
              <h1 className="py-5">
                Festive cheer of salted pretzels meets the heartwarming comfort
                of cocoa and espresso.
              </h1>
              <div className="py-3">
                <button className="rounded-full py-1 px-4 border border-white/80 bg-transparent">
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
              src={image.column2_4}
              alt="Pretzel Party"
            />
          </div>
          <div className="py-3 text-center bg-[#1E3932] text-white">
            <div className="md:w-4/6 mx-auto">
              <h1 className="text-2xl font-semibold py-3">
                It’s A Pretzel Party
              </h1>
              <h1 className="py-5">
                Festive cheer of salted pretzels meets the heartwarming comfort
                of cocoa and espresso.
              </h1>
              <div className="py-3">
                <button className="rounded-full py-1 px-4 border border-white/80 bg-transparent">
                  Sip, sip, go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
