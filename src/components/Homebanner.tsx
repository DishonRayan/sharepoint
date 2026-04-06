export default function Homebanner() {
  return (
    <>
      <section id="managed-services-banner" className="relative w-full h-[350px] overflow-hidden group">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0">
          <video
            src="https://insmed.com/wp-content/themes/insmed/videos/hero-video-culture.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for better text legibility - adjusted for left alignment */}
          <div className="absolute inset-0 bg-linear-to-tl from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-white/5" />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex items-end justify-start p-8 md:p-12 lg:p-16">
          <div className="text-left">
            {/* <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-2xl">
              Managed Services
            </h1> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
              Managed Service
            </h1>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#26005A] via-[#0047BB] to-[#93328E] mr-auto rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
}
