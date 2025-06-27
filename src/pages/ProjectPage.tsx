// import projectImage from "@/assets/project.png"; // Replace with your real image
import { FaGithub } from "react-icons/fa";
import { PiLightningFill } from "react-icons/pi";
import { projects } from "@/data/projectDetails"; // Import your project details
function ProjectPage() {
  return (
    <div className="px-6 md:px-12 py-12 max-w-5xl mx-auto space-y-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-6 bg-[#2d2d2d] rounded-xl p-4 shadow-md hover:bg-[#3a3a3a] transition-all"
        >
          {/* Left: Project Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-1/3 rounded-lg object-cover"
          />

          {/* Right: Project Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-white font-extrabold text-lg sm:text-xl">
                {project.title}
              </h3>
              <p className="text-lightText text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <PiLightningFill className="text-xl" />
                Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectPage;
