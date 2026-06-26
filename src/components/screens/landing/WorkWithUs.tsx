"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WorkWithUs = () => {
  const deadlineISO = "2026-07-13T23:59:59+02:00";

  const [timeLeft, setTimeLeft] = useState(
    getTimeLeft(deadlineISO)
  );

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft(getTimeLeft(deadlineISO));
    }, 1000);

    return () => clearInterval(t);
  }, []);

  const isHiring = !timeLeft.isExpired;

  return (
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

          <div className="text-center mb-12 max-w-3xl">
            {isHiring ? (
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/15 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C35] animate-pulse" />
                  <span className="text-white font-semibold tracking-wide">
                    NOW HIRING
                  </span>
                </div>

                <p className="text-white mb-3 leading-relaxed text-2xl font-semibold">
                  Procurement Manager
                </p>

                <p className="text-white/90 mb-4 leading-relaxed">
                  <span className="font-semibold">
                    Department:
                  </span>{" "}
                  Procurement Department
                  <br />

                  <span className="font-semibold">
                    Location:
                  </span>{" "}
                  Kigali – Kamimura
                  <br />

                  <span className="font-semibold">
                    Employment Type:
                  </span>{" "}
                  Full-Time
                  <br />

                  <span className="font-semibold">
                    Reports To:
                  </span>{" "}
                  Managing Director
                </p>

                <p className="text-white/90 mb-4 leading-relaxed">
                  Opening Date:{" "}
                  <span className="font-semibold">
                    June 26, 2026
                  </span>
                  <br />
                  Closing Date:{" "}
                  <span className="font-semibold">
                    July 13, 2026
                  </span>
                </p>

                <div className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-white mb-4">
                  <span className="font-semibold">
                    Apply within: {timeLeft.days}d{" "}
                    {timeLeft.hours}h {timeLeft.minutes}m{" "}
                    {timeLeft.seconds}s
                  </span>
                </div>

                <p className="text-white/90 leading-relaxed">
                  Centurion Africa Ltd is seeking a highly
                  motivated and experienced Procurement Manager
                  to lead and manage the organization's
                  procurement function and support the
                  company's operational and financial
                  objectives.
                </p>

                <p className="text-white/90 mt-4 leading-relaxed">
                  Please review the full job description and
                  submit your application before the deadline.
                </p>

                <p className="text-white/90 mt-2 leading-relaxed">
                  Send your application to{" "}
                  <a
                    href="mailto:career@centurionafrica.rw"
                    className="underline font-medium hover:text-[#FF5C35]"
                  >
                    career@centurionafrica.rw
                  </a>
                </p>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/15 mb-4">
                  <span className="w-2 h-2 rounded-full bg-gray-300" />
                  <span className="text-white font-semibold tracking-wide">
                    NO OPENING JOBS
                  </span>
                </div>

                <p className="text-white leading-relaxed">
                  We currently have no open positions
                  available. Please check back soon for future
                  opportunities.
                </p>
              </div>
            )}
          </div>

          {isHiring ? (
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Link
                href="/PROCUREMENT_MANAGER_RECRUITEMENT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 font-medium bg-white/10 border border-white/15 text-white hover:bg-white/15 transition-colors duration-200"
              >
                View Job Description
              </Link>

              <Link
                href="mailto:career@centurionafrica.rw"
                className="inline-flex items-center px-8 py-3 font-medium bg-[#FF5C35] text-white hover:bg-[#e54d29] transition-colors duration-200"
              >
                APPLY NOW
              </Link>
            </div>
          ) : (
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
  );
};

export default WorkWithUs;

function getTimeLeft(deadlineISO: string) {
  const deadline = new Date(deadlineISO).getTime();
  const now = Date.now();
  const diff = deadline - now;

  if (diff <= 0) {
    return {
      isExpired: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor(
    (totalSeconds % (3600 * 24)) / 3600
  );
  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );
  const seconds = totalSeconds % 60;

  return {
    isExpired: false,
    days,
    hours,
    minutes,
    seconds,
  };
}
