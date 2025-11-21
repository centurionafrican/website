"use client";

const Team = () => {
  const teamMembers = [
    {
      name: "MANU S. DIEZI",
      position: "CEO",
      image: "/images/ceo.jpg",
      linkedin: "https://www.linkedin.com/in/manu-diezi-74976517/",
    },
    {
      name: "PATRICK GASANA R.",
      position: "Co-CEO",
      image: "/images/ceo2.jpg",
      linkedin: "#",
    },
    {
      name: "LAURENT GASANA M.",
      position: "Operations Manager",
      image: "/images/ops.jpg",
      linkedin: "#",
    },
    {
      name: "PASCAL HABIMANA",
      position: "Director of Legal Affairs",
      image: "/images/och.jpg",
      linkedin: "#",
    },
    {
      name: "ALFRED MAZIMPAKA",
      position: "Project Manager",
      image: "/images/project-manager.jpg",
      linkedin: "#",
    },
    {
      name: "SCOVIA MBABAZI",
      position: "Finance Manager",
      image: "/images/finance.jpg",
      linkedin: "#",
    },
    {
      name: "DAPHINE INGABIRE",
      position: "Internal Audit Manager",
      image: "/images/audit.jpg",
      linkedin: "#",
    },
    {
      name: "MYLENE ISHIMWE",
      position: "Sales Manager",
      image: "/images/sales.jpg",
      linkedin: "#",
    },
    {
      name: "LEVINA IREBE S.",
      position: "Marketing",
      image: "/images/marketing.jpg",
      linkedin: "https://www.linkedin.com/in/levina-irebe-8a506a276/",
    },
    {
      name: "JOSETTE MUKANINKINDI",
      position: "Human Resources",
      image: "/images/hr.jpg",
      linkedin: "#",
    },
    {
      name: "LENAH MUKANDAHIRO",
      position: "Logistics Officer",
      image: "/images/logistic.jpg",
      linkedin: "#",
    },
    {
      name: "DIANE IRADUKUNDA",
      position: "Procurement Manager",
      image: "/images/proc.jpg",
      linkedin: "#",
    },
    {
      name: "ANGE CLAIRETTE U.",
      position: "IT Manager",
      image: "/images/it.jpg",
      linkedin: "https://www.linkedin.com/in/uwishema-ange-clairette-a25908142/",
    },
  ];

  return (
    <>
      <div className="w-full h-fit mx-auto px-4 lg:px-0" id="team">
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('/images/kl_18.jpg')" }}
          id="teams"
        >
          <div className="bg-black/40 backdrop-blur-md flex justify-center py-[120px]">
            <div className="max-w-6xl w-full mx-auto px-0 sm:px-4 md:px-8">
              <h2 className="text-white md:text-6xl text-6xl font-normal mb-4">
                Meet Our <br />
                <span className="text-primary font-bold">Leadership Team</span>
              </h2>
              <p className="text-white/60 leading-relaxed max-w-xl mb-12">
                Our experienced leadership team brings together decades of
                expertise in security, operations, and technology to deliver
                exceptional service across Africa and the Middle East.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="group relative bg-secondary/40 border border-[#F6F8FF14] backdrop-blur-md rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/50"
                  >
                    <div className="absolute top-3 right-3 z-50">
                             <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8  bg-white/10 hover:bg-primary backdrop-blur-sm rounded-md transition-all duration-300 group-hover:scale-110"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                    </div>
                              {/* LinkedIn icon */}
                 
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                      
                      {/* Content overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                        <p className="text-sm mb-0.5 leading-tight group-hover:text-primary transition-colors">
                          {member.name}
                        </p>
                        <p className="text-xs text-white/80 leading-tight mb-3">
                          {member.position}
                        </p>
                        
              
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;