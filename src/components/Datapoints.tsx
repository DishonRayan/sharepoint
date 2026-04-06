import { CheckCircle, Database, TrendingUp, ShieldCheck, Zap, Globe, Layers, Users, Cpu } from "lucide-react";
// import { motion } from "motion/react";
import { motion } from "framer-motion";

export default function Datapoints() {
  const points = [
    {
      text: "Dedicated to empowering data-driven decision-making across the global organization",
      icon: <Globe className="w-5 h-5" />
    },
    {
      text: "Harness data to deliver actionable insights that drive growth, efficiency, and innovation",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      text: "Operate with a strong commitment to accuracy, integrity, and collaboration",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      text: "Transform raw data into strategic intelligence to help stakeholders navigate complexity and seize opportunities",
      icon: <Database className="w-5 h-5" />
    },
    {
      text: "Provide global, enterprise-wide solutions across Commercial, Medical Affairs, Marketing, Clinical, Field Sales Execution, Procurement, IT, and Finance",
      icon: <Layers className="w-5 h-5" />
    },
    {
      text: "Build integrated solutions that combine data from multiple sources into an enterprise-wide single source of truth",
      icon: <Zap className="w-5 h-5" />
    },
    {
      text: "Deliver insights through intuitive, user-focused applications designed for optimal user experience",
      icon: <Users className="w-5 h-5" />
    },
    {
      text: "Continuously adopt modern technologies to enhance product quality, reliability, and value",
      icon: <Cpu className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden" id="datapoints-section">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -u-translate-y-1/2 u-translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 u-translate-y-1/2 -u-translate-x-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" id="datapoints-container">
        
        <div className="mb-12 text-center" id="datapoints-header">
          {/* <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight" 
            id="datapoints-heading"
          >
            Data-Driven Excellence
          </motion.h2>
 */}

          <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-[1.1] mb-6 tracking-tight">
                <span className="bg-linear-to-br from-[#00a88f] via-[#2d5da1] to-[#4b2c82] bg-clip-text text-transparent">
                    Data-Driven Excellence
                </span>
              </h2>
          {/* <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="text-center h-1.5 bg-blue-600 mt-4 rounded-full"
          /> */}
        </div>

        {/* Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6" 
          id="datapoints-grid"
        >
          {points.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all group" 
              id={`datapoint-card-${index}`}
            >
              
              {/* Icon */}
              <div className="mt-1 shrink-0 bg-blue-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm" id={`datapoint-icon-wrapper-${index}`}>
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                <p className="text-gray-800 text-sm md:text-base font-medium leading-relaxed" id={`datapoint-text-${index}`}>
                  {item.text}
                </p>
                {/* <div className="flex items-center gap-1.5 text-blue-600 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle className="w-3 h-3" />
                  Verified Solution
                </div> */}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
