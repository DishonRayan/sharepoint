import { CheckCircle } from "lucide-react";

export default function Datapoints() {
  const points = [
    "Dedicated to empowering data-driven decision-making across the global organization",
    "Harness data to deliver actionable insights that drive growth, efficiency, and innovation",
    "Operate with a strong commitment to accuracy, integrity, and collaboration",
    "Transform raw data into strategic intelligence to help stakeholders navigate complexity and seize opportunities",
    "Provide global, enterprise-wide solutions across Commercial, Medical Affairs, Marketing, Clinical, Field Sales Execution, Procurement, IT, and Finance",
    "Build integrated solutions that combine data from multiple sources into an enterprise-wide single source of truth",
    "Deliver insights through intuitive, user-focused applications designed for optimal user experience",
    "Continuously adopt modern technologies to enhance product quality, reliability, and value"
  ];

  return (
    <section className="py-8 px-6 md:px-12 lg:px-20 bg-white">
      
      <div className="max-w-5xl">
        
        {/* Heading */}
        {/* <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Data-Driven Excellence
        </h2> */}

        {/* Bullet List */}
        <div className="space-y-4">
          {points.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              
              {/* Icon */}
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1 shrink-0" />

              {/* Text */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}