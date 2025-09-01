import React from "react";

const JobOpenings = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Technical Support Engineer",
      schedule: "Saturday - Thursday, 01:00 AM - 12:00 PM BST",
      tags: ["cPanel/WHM", "Customer Service", "Tickets"],
      description:
        "We're looking for someone with advanced cPanel/WHM server administration experience (UI and CLI), with knowledge of CloudLinux, LiteSpeed, Imunify360, and JetBackup. As a Technical Support Engineer, your responsibilities are to assist our clients on tickets and help the Customer Service Reps team when needed.",

      remote: true,
    },
    {
      id: 2,
      title: "Customer Service Representative",
      schedule: "Saturday - Thursday, 01:00 AM - 12:00 PM BST",
      tags: ["LiveChat", "Tickets", "Customer Support"],
      description:
        "As a Customer Service Representative (L1), your primary responsibilities are to assist our clients in LiveChat and on tickets. Still, we don't have targets in terms of the number of chats or tickets per month. We strongly believe nobody should work more than 1-3 chats at a time if we want to deliver fantastic customer services, this is why we're hiring every few months, to make sure our clients are happy and our team is not overwhelmed.",

      remote: true,
    },
  ];

  // Location icon component
  const LocationIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1
            id="job-section"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Current Openings
          </h1>
          <p className="text-lg text-gray-600">
            Join our team and help us deliver exceptional service to our clients
          </p>
        </div>

        <div className="space-y-8">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex justify-between items-center gap-3 mb-2">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {job.title}
                      </h2>
                      {job.remote && (
                        <span className="flex items-center px-4 py-2 bg-green-100 text-green-800 text-xs md:text-[15px] font-medium rounded-full uppercase tracking-wide">
                          <LocationIcon />
                          Remote
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 md:mt-5">
                      <p className="text-gray-600 font-medium text-lg">
                        {job.schedule}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {job.description}
                </p>

                <div className="border-t border-gray-100 pt-6">
                  <a
                    href="mailto:careers@hostnin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Can't find a suitable position? Send your resume to{" "}
            <a
              href="mailto:careers@hostnin.com"
              className="text-blue-600 hover:underline"
            >
              careers@hostnin.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobOpenings;
