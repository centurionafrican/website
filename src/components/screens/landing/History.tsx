"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  description: string;
  position: "left" | "right";
}

const HistorySection = () => {
  const events: TimelineEvent[] = [
    {
      year: "2024",
      description:
        "Started the process to incorporate Centurion Guinea and Centurion Qatar",
      position: "right",
    },
    {
      year: "2024",
      description: "Incorporation of Centurion Security Group to manage the sister and affiliate companies",
      position: "left",
    },
    {
      year: "2022",
      description:
        "Incorporation of Centurion Security Mozambique Limitada",
      position: "right",
    },
    {
      year: "2020",
      description: "Incorporation of Centurion Africa in Rwanda",
      position: "left",
    },
    {
      year: "2019",
      description: "Centurion is founded as a specialized private security company, providing high end security services in Rwanda, Africa and the Middle East",
      position: "right",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-16 px-4 sm:px-0"
      style={{ background: "linear-gradient(to bottom, #13191D, #212F38)" }}
      id ='timeline'
    >
      <div className="max-w-5xl mx-auto px-0 sm:px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-6 max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-primary md:text-6xl text-3xl font-bold text-center"
          >
            A brief timeline
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/60 mt-2 text-center max-w-3xl"
          >
            From our first deployment to now: the milestones that matter in our commitment to setting the standard in private security.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="relative mt-6"
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-500 transform -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-500 md:hidden"></div>
          <div className="space-y-10 md:space-y-4 relative">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="md:hidden flex">
                  <div className="absolute left-8 top-4 -ml-[14px] h-[28px] w-[28px] rounded-full bg-[#FFD8CC] border-4 border-[#212F38] flex items-center justify-center">
                    <div className="h-[14px] w-[14px] rounded-full bg-primary"></div>
                  </div>
                  <div className="ml-20">
                    <div className="bg-white py-3 px-5 mb-4 max-w-xs">
                      <p className="text-secondary">{event.description}</p>
                    </div>
                    <div className="inline-block bg-primary text-white font-medium py-1 px-4">
                      {event.year}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block relative">
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 z-10">
                    <div className="h-[28px] w-[28px] rounded-full bg-[#FFD8CC] border-4 border-[#212F38] flex items-center justify-center">
                      <div className="h-[14px] w-[14px] rounded-full bg-primary"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-0 items-center">
                    {event.position === "left" ? (
                      <>
                        <div className="justify-self-end pr-8  relative">
                          <div className="bg-white py-2 px-4 max-w-md">
                            <p className="text-secondary text-sm">
                              {event.description}
                            </p>
                          </div>
                          <div className="absolute top-6 right-0 h-0.5 bg-gray-600 w-8"></div>
                        </div>

                        <div className="justify-self-start pl-8 relative">
                          <div className="inline-block bg-primary text-white font-medium py-1 px-4">
                            {event.year}
                          </div>
                          <div className="absolute top-6 left-0 h-0.5 bg-gray-600 w-8"></div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="justify-self-end pr-8 relative">
                          <div className="inline-block bg-primary text-white font-medium py-1 px-4">
                            {event.year}
                          </div>
                          <div className="absolute top-6 right-0 h-0.5 bg-gray-500 w-8"></div>
                        </div>

                        <div className="justify-self-start pl-8 relative">
                          <div className="bg-white py-2 px-4 max-w-md">
                            <p className="text-secondary text-sm">
                              {event.description}
                            </p>
                          </div>
                          <div className="absolute top-6 left-0 h-0.5 bg-gray-500 w-8"></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;
