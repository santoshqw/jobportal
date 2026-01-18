import React from "react";
import jobData from "../Data/JobData.json"; 

const LandingPage = () => {
  return (
    <div className="flex flex-col p-10 bg-cyan-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobData.jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            

              <img src={job.Image} alt={job.title} className="m-0 p-0 w-20 h-20 rounded-full" />
            
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-1">
              {job.company} | {job.Location} | {job.Type}
            </p>
            <p className="text-green-600 font-semibold mb-2">{job.Salary}</p>
            <p className="mb-2">{job.description}</p>
            <ul className="list-disc ml-5 mb-2">
              {job.Requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mb-2">
              Posted on: {job.PostedDate}
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
