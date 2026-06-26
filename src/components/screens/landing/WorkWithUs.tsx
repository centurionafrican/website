"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WorkWithUs = () => {
  const deadlineISO = "2026-07-13T23:59:59+02:00";

  const [timeLeft, setTimeLeft] = useState(
    getTimeLeft(deadlineISO)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(deadlineISO));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isHiring = !timeLeft.isExpired;

  return (
    <section id="career" className="w-full">
      <div
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: "url('/images/centurion_gako.svg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-4 flex justify-center">
          {isHiring ? (
            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Badge */}
              <div className="flex justify-center mb-5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5C35]/20 border border-[#FF5C35]/30">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C35] animate-pulse" />
                  <span className="text-white text-sm font-semibold tracking-wide">
                    NOW HIRING
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-center text-4xl font-bold text-white mb-2">
                Procurement Manager
              </h2>

              <p className="text-center text-white/80 mb-6">
                Procurement Department • Kigali – Kamimura • Full-Time
              </p>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm">
                    Opening Date
                  </p>
                  <p className="text-white font-semibold">
                    26 June 2026
                  </p>
                </div>

                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-white/60 text-sm">
                    Closing Date
                  </p>
                  <p className="text-white font-semibold">
                    13 July 2026
                  </p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 mb-6 text-center">
                <p className="text-white/60 text-sm mb-1">
                  Reporting Line
                </p>
                <p className="text-white font-semibold">
                  Managing Director
                </p>
              </div>

              {/* Description */}
              <p className="text-white/80 text-center leading-relaxed mb-8">
                Centurion Africa Ltd is seeking an experienced
                Procurement Manager to lead and manage the
                organization’s procurement function and support
                operational and financial objectives through
                effective procurement planning and execution.
              </p>

              {/* Countdown */}
              <div className="bg-[#FF5C35]/15 border border-[#FF5C35]/30 rounded-2xl p-5 mb-8">
                <p className="text-center text-white font-semibold mb-4">
                  Application closes in
                </p>

                <div className="grid grid-cols-4 gap-3 text-center">
                  <div>
                    <p className="text-3xl font-bold text-white">
                      {timeLeft.days}
                    </p>
                    <p className="text-white/60 text-xs">
                      Days
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-white">
                      {timeLeft.hours}
                    </p>
                    <p className="text-white/60 text-xs">
                      Hours
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-white">
                      {timeLeft.minutes}
                    </p>
                    <p className="text-white/60 text-xs">
                      Minutes
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-white">
                      {timeLeft.seconds}
                    </p>
                    <p className="text-white/60 text-xs">
                      Seconds
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/procurement-manager-tor.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white text-secondary font-medium hover:bg-gray-100 transition text-center"
                >
                  View Job Description
                </Link>

                <Link
                  href="mailto:career@centurionafrica.rw"
                  className="px-6 py-3 rounded-xl bg-[#FF5C35] text-white font-medium hover:bg-[#e54d29] transition text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ) : (
            <div className="max-w-xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                No Open Positions
              </h2>

              <p className="text-white/70 leading-relaxed">
                We currently have no vacancies available.
                Please check back soon for future
                opportunities at Centurion Africa Ltd.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
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

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor(
    (totalSeconds % (60 * 60 * 24)) / (60 * 60)
  );
  const minutes = Math.floor(
    (totalSeconds % (60 * 60)) / 60
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
