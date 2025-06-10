"use client";
import Link from "next/link";

const WorkWithUs = () => {
  return (
    <>
      <div className="w-full h-fit mx-auto" id="team">
        <div
          className="relative bg-cover bg-center sm:h-[607px] flex items-center justify-center"
          style={{ 
            backgroundImage: "url('/images/centurion_gako.svg')",
            backgroundBlendMode: "overlay" 
          }}
        >
          <div 
            className="max-w-4xl w-full py-12 px-8 mx-auto flex flex-col items-center backdrop-blur-md"
            style={{ 
              backgroundColor: "rgba(55, 60, 70, 0.2)", 
              border: "1px solid rgba(246, 248, 255, 0.08)"
            }}
          >
            <h2 className="text-white text-center text-6xl font-bold mb-8">
              Join our <span className="text-primary">Team</span>
            </h2>
            
            {/* <p className="text-white/60 text-center leading-relaxed max-w-3xl mb-2 font-light">
              At CenturionAfrica, our Guards are locally employed and fairly compensated to reflect our 
              values. By choosing us, you choose to empower Rwandans and contribute to raising the 
              standard of employment in the Rwandan security industry - Guard benefits
            </p> */}
            
            <div className="flex flex-wrap justify-center gap-1 mb-2">
              <div className="bg-secondary px-4 py-1.5 text-white border-[#FFFFFF]/10 border text-sm">
                Competitive Salary
              </div>
              <div className="bg-secondary px-4 py-1.5 text-white border-[#FFFFFF]/10 border text-sm">
                Housing
              </div>
              <div className="bg-secondary px-4 py-1.5 text-white border-[#FFFFFF]/10 border text-sm">
                Breakfast, Lunch & Dinner
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              <div className="bg-secondary px-4 py-1.5 text-white border-[#FFFFFF]/10 border text-sm">
                Health Insurance
              </div>
              <div className="bg-secondary px-4 py-1.5 text-white border-[#FFFFFF]/10 border text-sm">
                Transportation
              </div>
            </div>
            
            <Link 
              href="https://zohorecruit.com"
              target="_blank"
              className="inline-flex items-center px-8 py-3 font-medium bg-[#FF5C35] text-white hover:bg-[#e54d29] transition-colors duration-200"
            >
              JOIN US NOW
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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