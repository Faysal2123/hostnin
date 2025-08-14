import { FaUsers, FaRegClock, FaAccusoft } from "react-icons/fa";

const stats = [
  {
    icon: <FaAccusoft className="text-4xl text-white" />, 
    value: "2,649+",
    label: "Happy Customers & Growing",
  },
  {
    icon: <FaRegClock className="text-4xl text-white" />,
    value: "11K+",
    label: "Website Built with us",
  },
  {
    icon: <FaUsers className="text-4xl text-white" />,
    value: "4,100+",
    label: "Active Community Members",
  },
];

const StatsSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-10 px-2 bg-[#f8f8f8]">
      <div className="w-full max-w-7xl rounded-2xl shadow-lg bg-gradient-to-br from-blue-800 to-blue-950 px-6 py-12 flex flex-col items-center">
        <h2 className="text-white text-[26px] sm:text-2xl md:text-4xl font-bold text-center mb-10">
          Join a web Hosting Company that Started<br />Small & Scaled up
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 w-full">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center flex-1"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="w-20 h-20 rounded-full bg-blue-300 bg-opacity-20 flex items-center justify-center shadow-lg">
                  <span className="w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center">
                    {stat.icon}
                  </span>
                </span>
              </div>
              <div className="text-white text-3xl font-bold mb-1 flex items-center gap-2">
                {stat.value}
              </div>
              <div className="text-blue-100 text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 