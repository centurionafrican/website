"use client";

import Image from "next/image";

const Partners = () => {

    return (

        <div className="py-[64px] w-full">
            <div className="max-w-6xl  w-full mx-auto px-4 lg:px-8">
                <h2 className="text-[#252932] md:text-[45px] text-6xl font-normal mb-4">
                    Trusted by a diverse range of  <br />
                    <span className="text-secondary font-normal">clients across industries</span>
                </h2>
                <p className="text-[#687588] lg:w-1/2">We are proud to serve a diverse range of clients, providing security service solutions that meet their unique needs.</p>

                <div className="flex  items-center gap-4 mt-5 flex-wrap">
                    {[
                        "/images/irembo.png",
                        "/images/bk.png",
                        "/images/rwandair.png",
                        "/images/irembo.png",
                        "/images/rwandair.png",
                        "/images/bk.png"
                    ].map((src, index) => (
                        <div key={index} className="relative w-[100px] h-[35px]">
                            <Image
                                src={src}
                                alt="logo"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Partners;