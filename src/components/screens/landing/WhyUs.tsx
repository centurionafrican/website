"use client";

const WhyUs = () => {
  return (
    <>
      <div className="w-full h-fit mx-auto px-4 lg:px-0" id="why-choose">
        <div
          className="relative bg-cover bg-center "
          style={{ backgroundImage: "url('/images/kl_18.jpg')" }}
        >
          <div className="bg-black/40 backdrop-blur-md flex justify-center py-[120px]">
            <div className="max-w-6xl w-full mx-auto px-0 sm:px-4 md:px-8">
              <h2 className="text-white md:text-6xl text-6xl font-normal mb-4">
                Why choose <br />
                <span className="text-primary font-bold">Centurion </span>
              </h2>
              <p className="text-white/60 leading-relaxed max-w-xl">
                Centurion Security Group combines elite training, local
                empowerment, and cutting-edge expertise to deliver unmatched
                security solutions across Africa.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                <div className="bg-secondary/40 hover:bg-primary border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Expertly trained personnel
                  </h3>
                  <p className="text-white/50">
                    All our guards undergo intensive training at specialized
                    facilities under certified Centurion instructors.
                  </p>
                </div>

                <div className="bg-secondary/40 hover:bg-primary border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Local Empowerment
                  </h3>
                  <p className="text-white/50">
                    We hire and fairly compensate Rwandans, elevating standards
                    in the national security industry.
                  </p>
                </div>

                <div className="bg-secondary/40 hover:bg-primary border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Proven Industry Expertise
                  </h3>
                  <p className="text-white/50">
                    Our team includes continentally recognized specialists in
                    complex security infrastructure.
                  </p>
                </div>

                <div className="bg-secondary/40 hover:bg-primary border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Advanced Technologies
                  </h3>
                  <p className="text-white/50">
                    From vehicle scanning to remote monitoring, we implement
                    high-grade, modern security systems.
                  </p>
                </div>

                <div className="bg-secondary/40 hover:bg-primary border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    Close Protection Officers
                  </h3>
                  <p className="text-white/50">
                    Whether VIP protection or secured premises, our services are
                    tailored to meet high-stakes requirements.
                  </p>
                </div>
                <div className="bg-secondary/40 border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                  Fair Employment and Benefits
                  </h3>
                  <p className="text-white/50">
                  We take care of our people. Our guards receive competitive salaries, housing, transport, and meals. Fair treatment means better performance and greater peace of mind for our clients.
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
