import React from "react";
import Navbar from "../components/Navbar";
import Projectongoing from "../components/Projectongoing";
import Projectdata from "../data/Projectdata";

// Define the shape of a project object
interface Project {
  name: string;
  type: "Apartment" | "Villa" | "Plot";
  description: string;
  image: string;
  location: string;
  status: string;
}

function Project() {
  const byStatus = (status: string) =>
    (Projectdata as Project[]).filter(
      (p) => p.status.toLowerCase() === status.toLowerCase()
    );

  const ongoing = byStatus("Ongoing");
  const completed = byStatus("Completed");
  const upcoming = byStatus("Upcoming");

  return (
    <>
      <Navbar />
      <h1 className="mt-25 font-bold text-green-700 text-3xl pl-15 pt-6">
        Ongoing Projects
      </h1>

      <div className="flex gap-9 flex-wrap">
        {ongoing.map((project) => (
          <Projectongoing
            key={`${project.name}-${project.location}`}
            name={project.name}
            type={project.type}
            desc={project.description}
            img={project.image}
            location={project.location}
          />
        ))}
      </div>

      <h1 className="mt-6 font-bold text-green-700 text-3xl pl-15 pt-6">
        Completed Projects
      </h1>

      <div className="flex gap-9 flex-wrap">
        {completed.map((project) => (
          <Projectongoing
            key={`${project.name}-${project.location}`}
            name={project.name}
            type={project.type}
            desc={project.description}
            img={project.image}
            location={project.location}
          />
        ))}
      </div>

      <h1 className="mt-6 font-bold text-green-700 text-3xl pl-15 pt-6">
        Upcoming Projects
      </h1>

      <div className="flex gap-9 flex-wrap">
        {upcoming.map((project) => (
          <Projectongoing
            key={`${project.name}-${project.location}`}
            name={project.name}
            type={project.type}
            desc={project.description}
            img={project.image}
            location={project.location}
          />
        ))}
      </div>
    </>
  );
}

export default Project;