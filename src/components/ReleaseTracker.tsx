import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReleaseTracker() {
//   const features = [
//     {
//       title: "Identity Verification",
//       description: "Multi-factor authentication and biometric verification to ensure secure user identity.",
//       icon: <Shield className="w-8 h-8 text-blue-600" />,
//     },
//     {
//       title: "Role-Based Access",
//       description: "Granular control over user permissions based on organizational roles and responsibilities.",
//       icon: <Users className="w-8 h-8 text-blue-600" />,
//     },
//     {
//       title: "Credential Management",
//       description: "Secure storage and rotation of passwords, API keys, and digital certificates.",
//       icon: <Key className="w-8 h-8 text-blue-600" />,
//     },
//     {
//       title: "Audit Logging",
//       description: "Comprehensive tracking of all access requests and permission changes for compliance.",
//       icon: <Lock className="w-8 h-8 text-blue-600" />,
//     },
//   ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section (Color Palette Gradient) */}
      <section id="access-management-banner" className="relative w-full h-[280px] overflow-hidden bg-linear-to-r from-blue-900 via-indigo-900 to-blue-800">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-end justify-start p-8 md:p-12 lg:p-16">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
               Release Tracker
            </h1>
            <div className="mt-4 h-1 w-24 bg-blue-400 mr-auto rounded-full" />
            {/* <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-md font-medium">
              Secure your digital perimeter with our enterprise-grade access control and identity management services.
            </p> */}
          </div>
        </div>
      </section>

      {/* Breadcrumbs Section */}
      <nav className="bg-gray-50 border-b border-gray-200 py-4 px-4 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm font-medium">
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600"> Release Tracker</span>
        </div>
      </nav>

      {/* Features Grid */}
      {/* <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Detailed Content */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Access Management?</h2>
            <p className="text-lg text-gray-600 mb-8">
              In today's complex digital landscape, managing who has access to what is critical for security and compliance. 
              Our managed services provide a centralized, automated approach to identity and access management (IAM).
            </p>
            <ul className="space-y-4">
              {["Zero Trust Architecture", "Seamless SSO Integration", "Automated Provisioning", "Real-time Threat Detection"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <img 
              src="https://insmed.com/wp-content/uploads/2025/07/Full_Size_Insmed_WBD_NTM_Day_DSC_0292.webp" 
              alt="Security Dashboard" 
              className="rounded-xl w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
