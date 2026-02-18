"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const WorkWithUs = () => {
  const isHiring = true;

  // Deadline: Feb 25, 2026 (Kigali time UTC+2)
  const deadlineISO = "2026-02-25T23:59:59+02:00";
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(deadlineISO));

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft(deadlineISO)), 1000);
    return () => clearInterval(t);
  }, []);

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
                  {/* NOW HIRING badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/15 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#FF5C35] animate-pulse" />
                    <span className="text-white font-semibold tracking-wide">
                      NOW HIRING
                    </span>
                  </div>

                  <p className="text-white mb-3 leading-relaxed text-lg font-semibold">
                    We are hiring a Senior Accountant and Customer Care Manager!
                  </p>

                  <p className="text-white/90 mb-4 leading-relaxed">
                    Apply before <span className="font-semibold">February 25th</span> and join the Centurion Team!
                  </p>

                  {/* Countdown */}
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-white mb-4">
                    {timeLeft.isExpired ? (
                      <span className="font-semibold">Deadline passed</span>
                    ) : (
                      <span className="font-semibold">
                        Deadline in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                      </span>
                    )}
                  </div>

                  <p className="text-white/90 leading-relaxed">
                    Submit your CV at{" "}
                    <a
                      href="mailto:career@centurionafrica.rw"
                      className="underline font-medium hover:text-[#FF5C35]"
                    >
                      career@centurionafrica.rw
                    </a>
                  </p>

                  <p className="text-white/90 mt-2 leading-relaxed">
                    For more contact{" "}
                    <a
                      href="tel:+250790004777"
                      className="underline font-medium hover:text-[#FF5C35]"
                    >
                      +250790004777
                    </a>
                  </p>
                </div>
              ) : (
                <p className="text-white leading-relaxed">
                  We are not hiring at the moment, but feel free to check back soon for future opportunities.
                </p>
              )}
            </div>

            {/* Buttons */}
            {isHiring ? (
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                {/* View Job PDFs */}
                <Link
                  href="/senior-accountant.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 font-medium bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors duration-200"
                >
                  View Senior Accountant PDF
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

                <Link
                  href="/customer-care-manager.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 font-medium bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors duration-200"
                >
                  View Customer Care Manager PDF
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

                {/* Keep your original mail button */}
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
              </div>
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

function getTimeLeft(deadlineISO) {
  const deadline = new Date(deadlineISO).getTime();
  const now = Date.now();
  const diff = deadline - now;

  if (diff <= 0) {
    return { isExpired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { isExpired: false, days, hours, minutes, seconds };
}
