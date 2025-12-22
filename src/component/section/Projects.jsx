import { useState } from "react";
import { data } from "../../data/data";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all"); // 'all' | 'image' | 'video' | "real state"

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Filtered data by selected category
  const filteredData = data.filter((item) =>
    filter === "all" ? true : item.mediaType === filter
  );

  // Determine whether to limit results
  const visibleItems =
    filter === "all" && !showAll ? filteredData.slice(0, 6) : filteredData;

  return (
    <div className="w-full h-full relative">
      <div>
        <h1
          data-aos="fade-up"
          className="text-3xl dark:text-white text-center pt-24 mb-8 font-bold text-gray-800"
        >
          Portfolio
        </h1>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {["all", "image", "real-estate-video", "video"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setFilter(type);
              setShowAll(false); // reset when filter changes
            }}
            className={`px-4 py-1 rounded-full border text-sm font-semibold transition capitalize ${
              filter === type
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-white text-gray-600 dark:bg-slate-800 dark:text-gray-300 border-gray-300"
            }`}
          >
            {type === "all"
              ? "All"
              : type === "image"
              ? "Photo"
              : type === "real-estate-video"
              ? "real estate"
              : "video"}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleItems.map((item, index) => {
          const { title, media, mediaType } = item;
          return (
            <article
              key={index}
              onClick={() => handleProjectClick(item)}
              data-aos="fade-up"
              className="cursor-pointer bg-white/60 dark:bg-slate-950/50 w-full rounded-lg shadow-md group hover:shadow-xl duration-300"
            >
              <div className="relative overflow-hidden group">
                {mediaType === "video" ? (
                  <video
                    src={media}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-64 hover:scale-125 transition-all duration-700   object-cover rounded-t-lg"
                  />
                ) : mediaType === "real-estate-video" ? (
                  <video
                    src={media}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-64 hover:scale-125 transition-all duration-700   object-cover rounded-t-lg"
                  />
                ) : (
                  <img
                    src={media}
                    alt={title}
                    className="w-full hover:scale-125 transition-all duration-700 h-64 object-cover object-center rounded-t-lg"
                  />
                )}
              </div>
              <div className="capitalize py-2 px-4">
                <h2 className="text-xl text-gray-600 dark:text-white tracking-wide font-medium">
                  {title}
                </h2>
              </div>
            </article>
          );
        })}
      </div>

      {/* Show More / Less Button (Only for 'all') */}
      {filter === "all" && filteredData.length > 6 && (
        <div className="grid w-full mt-10 place-items-center">
          <button
            className="-mt-4 dark:text-white mb-4 text-sm md:text-lg font-semibold underline hover:no-underline"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-red-400 hover:bg-red-500 z-[999] text-white w-12 h-12 rounded-full hover:text-black dark:hover:text-white text-2xl font-bold"
            >
              &times;
            </button>

            {selectedProject.mediaType === "video" ? (
              <video
                src={selectedProject.media}
                controls
                autoPlay
                loop
                className="w-full h-64 object-cover rounded"
              />
            ) : selectedProject.mediaType === "real-estate-video" ? (
              <video
                src={selectedProject.media}
                controls
                autoPlay
                loop
                className="w-full h-64 object-cover rounded"
              />
            ) : (
              <img
                src={selectedProject.media}
                alt={selectedProject.title}
                className="w-full h-full object-cover rounded"
              />
            )}

            <h2 className="text-2xl mt-4 font-bold dark:text-white">
              {selectedProject.title}
            </h2>

            {selectedProject.description && (
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {selectedProject.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
