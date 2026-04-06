import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReleaseCalendar() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Banner Section (Security Themed Image) */}
      <section id="access-management-banner" className="relative w-full h-[300px] overflow-hidden bg-blue-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqypUMLZll-oL3VqoAf4Q0r0Ou7fRFiGegg&s" 
            alt="Cybersecurity background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          {/* <div className="absolute inset-0 bg-linear-to-r from-blue-950/80 via-blue-900/40 to-transparent" /> */}
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-end justify-start p-8 md:p-12 lg:p-16">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
              Release Calendar
            </h1>
            <div className="mt-4 h-1 w-24 bg-blue-400 mr-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Breadcrumbs Section */}
      <nav className="bg-gray-50 border-b border-gray-200 py-4 px-4 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-md font-medium">
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">Release Calendar</span>
        </div>
      </nav>

      {/* Reimagining Section */}
              <section className="bg-[#f8f9fa] py-0 overflow-hidden border-b border-gray-100 mb-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[300px] lg:min-h-[280px]">
          <div className="flex flex-col justify-center items-end bg-white lg:bg-transparent">
            <div className="w-full max-w-[640px] p-8 md:p-10 lg:p-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                <span className="bg-linear-to-br from-[#00a88f] via-[#2d5da1] to-[#4b2c82] bg-clip-text text-transparent">
                 What we work<br />
                  for reflects<br />
                  what we<br />
                  stand for
                </span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-md leading-relaxed font-medium">
                Our collaborative ecosystem allows us to share insights, cross-pollinate ideas, and refine our approaches through new perspectives.
              </p>
            </div>
          </div>
          <div className="relative h-[250px] lg:h-auto overflow-hidden">
            <img 
              src="https://insmed.com/wp-content/uploads/2025/06/HighRes_20240426_Insmed_BYCTW_DSC_0417.webp" 
              alt="Scientists collaborating" 
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
