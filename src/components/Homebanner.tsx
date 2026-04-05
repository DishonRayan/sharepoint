export default function Homebanner() {

  

    return (

    <>
    <section id="managed-services-banner" className="relative w-full h-[380px] overflow-hidden group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://insmed.com/wp-content/uploads/2025/06/we-thrive-row.webp"
          alt="Managed Services Background"
          className="w-full h-full object-cover object-top "
        //   referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay for better text legibility - adjusted for left alignment */}
         <div className="absolute inset-0 bg-linear-to-tl from-black/70 via-transparent to-transparent" />
<div className="absolute inset-0 backdrop-blur-xs bg-white/5" />
        {/* <div className="absolute inset-0 bg-linear-to-tl from-black/70 via-transparent to-transparent" /> */}
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-end justify-start p-8 md:p-12 lg:p-16">
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-2xl">
            Managed Services
          </h1>
          <div className="mt-4 h-1 w-24 bg-blue-500 mr-auto rounded-full" />
          {/* <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-md font-medium">
            Empowering your business with expert technology management and strategic support.
          </p> */}
        </div>
      </div>
    </section>


    



    </>
    
  );
}
