"use client";
import Link from "next/link";

const WorkWithUs = () => {
  const isHiring = false;

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
                  <p className="text-white mb-4 leading-relaxed">
                    We're looking for passionate individuals who share our vision of transforming Africa through innovative solutions. Join our dynamic team and be part of something extraordinary.
                  </p>
                  {/* <p className="text-white/90 text-base">
                    Ready to make an impact? We'd love to hear from you and explore how your talents can contribute to our mission.
                  </p> */}
                </div>
              ) : (
                <p className="text-white leading-relaxed">
                  We are not hiring at the moment, but feel free to check back soon for future opportunities.
                </p>
              )}
            </div>

            {/* Conditional button */}
            {isHiring ? (
              <Link
                href="mailto:career@centurionafrica.rw"
                target="_blank"
                className="inline-flex items-center px-8 py-3 font-medium bg-[#FF5C35] text-white hover:bg-[#e54d29] transition-colors duration-200"
              >
                JOIN US NOW
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            ) : (
              <button
                disabled
                className="inline-flex items-center px-8 py-3 font-medium bg-gray-500 text-white cursor-not-allowed opacity-70"
              >
                NO OPENINGS AVAILABLE
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkWithUs;