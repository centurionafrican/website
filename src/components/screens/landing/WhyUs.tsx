"use client";

const WhyUs = () => {
  return (
    <>
      <div className="w-full h-fit mx-auto" id="industries">
        <div
          className="relative bg-cover bg-center "
          style={{ backgroundImage: "url('/images/kl_18.jpg')" }}
        >
          <div className="bg-black/40 backdrop-blur-md flex justify-center py-[120px]">
            <div className="max-w-6xl w-full mx-auto px-0 sm:px-4 md:px-8">
              <h2 className="text-white md:text-7xl text-6xl font-normal mb-4">
                Why choose <br />
                <span className="text-primary font-bold">Centurion</span>
              </h2>
              <p className="text-white/60 leading-relaxed max-w-xl">
                Centurion combines elite training, local empowerment, and
                cutting-edge expertise to deliver unmatched security solutions
                across Africa.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                <div className="bg-secondary/40 border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Expertly trained personnel
                  </h3>
                  <p className="text-white/50">
                    All our guards undergo intensive training at specialized
                    facilities under certified Centurion instructors.
                  </p>
                </div>

                <div className="bg-secondary/40 border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Local Empowerment
                  </h3>
                  <p className="text-white/50">
                    We hire and fairly compensate Rwandans, elevating standards
                    in the national security industry.
                  </p>
                </div>

                <div className="bg-secondary/40 border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Proven Industry Expertise
                  </h3>
                  <p className="text-white/50">
                    Our team includes continentally recognized specialists in
                    complex security infrastructure.
                  </p>
                </div>

                <div className="bg-secondary/40 border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Advanced Technologies
                  </h3>
                  <p className="text-white/50">
                    From vehicle scanning to remote monitoring, we implement
                    high-grade, modern security systems.
                  </p>
                </div>

                <div className="bg-secondary/40 border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Large-Scale Project Execution
                  </h3>
                  <p className="text-white/50">
                    Successfully managing over 800 cameras across 200+ CCTV
                    sites, we deliver reliable, scalable solutions.
                  </p>
                </div>

                <div className="bg-secondary/40 border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Custom Protection Solutions
                  </h3>
                  <p className="text-white/50">
                    hether VIP protection or secured premises, our services are
                    tailored to meet high-stakes requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
