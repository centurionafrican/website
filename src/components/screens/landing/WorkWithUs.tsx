"use client";
import Link from "next/link";


const WorkWithUs = () => {

    return (

        <>


            <div className="w-full h-fit mx-auto">

                <div
                    className="relative bg-cover bg-center h-[607px] flex items-center"
                    style={{ backgroundImage: "url('/images/centurion_gako_37.jpg')" }}
                >
                        <div className="max-w-6xl w-full bg-black py-[56px] rounded-[1px] mx-auto px-4 flex flex-col items-center lg:px-8">
                            <h2 className="text-white text-center md:text-[45px] text-6xl font-bold mb-4">
                            Work with us today. <br />
                            </h2>
                            <p className="text-white  text-center leading-relaxed max-w-xl">
                            Aliquet nec mauris tortor at sed erat. Ut faucibus habitant risus morbi quis egestas etiam lorem. Feugiat lorem aliquam eget mattis cursus. Turpis massa arcu sagittis interdum. Integer molestie.

                            </p>
                            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-2 text-sm mt-5 font-medium bg-secondary text-white hover:text-black hover:bg-gray-100 transition-colors duration-200"
            >
              CONTACT US
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
                    </div>
                </div>
            </div>


        </>
    );
};

export default WorkWithUs;