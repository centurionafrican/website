"use client";

const WhyUs = () => {

    return (

        <>
            <div className="w-full h-fit mx-auto">

                <div
                    className="relative bg-cover bg-center "
                    style={{ backgroundImage: "url('/images/kl_18.jpg')" }}
                >
                    <div className="bg-black/40 backdrop-blur-md flex justify-center py-[120px]">
                        <div className="max-w-6xl w-full mx-auto px-4 lg:px-8">
                            <h2 className="text-white md:text-7xl text-6xl font-normal mb-4">
                                Why choose <br />
                                <span className="text-secondary font-bold">Centurion</span>
                            </h2>
                            <p className="text-white leading-relaxed max-w-xl">
                                Centurion combines elite training, local empowerment, and cutting-edge expertise to deliver unmatched security solutions across Africa.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                                <div className="bg-[#F6F8FF14] border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Expertly trained personnel</h3>
                                    <p>
                                        All our guards undergo intensive training at specialized facilities
                                        under certified Centurion instructors.
                                    </p>
                                </div>

                                <div className="bg-[#F6F8FF14] border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Local Empowerment</h3>
                                    <p>
                                        We hire and fairly compensate Rwandans, elevating standards in the national security industry.
                                    </p>
                                </div>

                                <div className="bg-[#F6F8FF14] border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Proven Industry Expertise</h3>
                                    <p>
                                        Our team includes continentally recognized specialists in complex security infrastructure.
                                    </p>
                                </div>

                                <div className="bg-[#F6F8FF14] border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Advanced Technologies</h3>
                                    <p>
                                        From vehicle scanning to remote monitoring, we implement high-grade, modern security systems.
                                    </p>
                                </div>

                                <div className="bg-[#F6F8FF14] border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Large-Scale Project Execution</h3>
                                    <p>
                                        Successfully managing over 800 cameras across 200+ CCTV sites, we deliver reliable, scalable solutions.
                                    </p>
                                </div>

                                <div className="bg-[#F6F8FF14] border border-[#F6F8FF14] backdrop-blur-md rounded-[1px] p-5 text-white">
                                    <h3 className="text-xl font-semibold mb-2">Custom Protection Solutions</h3>
                                    <p>
                                        hether VIP protection or secured premises, our services are tailored to meet high-stakes requirements.
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