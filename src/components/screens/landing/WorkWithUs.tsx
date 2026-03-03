"use client";
import Link from "next/link";

const WorkWithUs = () => {
  const isHiring = false; // ❌ Hiring closed

  return (
    <>
      <div className="w-full h-fit mx-auto" id="career">
        <div
          className="relative bg-cover bg-center sm:h-[607px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/centurion_gako.svg')",
            backgroundBlendMode: "overlay",
          }}
        >
          <div
            className="max-w-4xl w-full py-12 px-8 mx-auto flex flex-col items-center backdrop-blur-md"
            style={{
              backgroundColor: "rgba(55, 60, 70, 0.2)",
              border: "1px solid rgba(246, 248, 255, 0.08)",
            }}
          >
            <h2 className="text-white text-center text-6xl font-bold mb-8">
              Join our <span className="text-primary">Team</span>
            </h2>

            {/* Description text */}
            <div className="text-center mb-12 max-w-3xl">
              {isHiring ? (
                <div>
                  {/* Hiring content here if needed in future */}
                </div>
              ) : (
                <div>
                  {/* ✅ NO OPENING JOBS badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/15 mb-4">
                    <span className="w-2 h-2 rounded-full bg-gray-300" />
                    <span className="text-white font-semibold tracking-wide">
                      NO OPENING JOBS
                    </span>
                  </div>

                  <p className="text-white leading-relaxed">
                    We currently have no open positions available.
                    Please check back soon for future career opportunities at Centurion.
                  </p>
                </div>
              )}
            </div>

            {/* Button */}
            {!isHiring && (
              <button
                disabled
                className="inline-flex items-center px-8 py-3 font-medium bg-gray-500 text-white cursor-not-allowed opacity-70"
              >
                NO OPENINGS AVAILABLE
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkWithUs;
