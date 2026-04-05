import { ShieldCheck, AlertCircle, ClipboardList, Calendar, Activity } from "lucide-react";
import { NavLink } from "react-router-dom";

/**
 * HeaderNav Component
 * Renders a professional horizontal navigation bar for services.
 */
export default function HeaderNav() {
  const navItems = [
    {
      title: "Access Management",
      icon: <ShieldCheck className="w-5 h-5" />,
      path: "/access-management",
    },
    {
      title: "Incident Management",
      icon: <AlertCircle className="w-5 h-5" />,
      path: "/incident-management",
    },
    {
      title: "Intake Process",
      icon: <ClipboardList className="w-5 h-5" />,
      path: "/intake-process",
    },
    {
      title: "Release Calendar",
      icon: <Calendar className="w-5 h-5" />,
      path: "/release-calendar",
    },
    {
      title: "Release Tracker",
      icon: <Activity className="w-5 h-5" />,
      path: "/release-tracker",
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 md:gap-4 py-4">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap border
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100"
                      : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`${isActive ? "text-white" : "text-blue-600"}`}>
                      {item.icon}
                    </span>
                    <span className="font-bold text-sm tracking-tight">
                      {item.title}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
